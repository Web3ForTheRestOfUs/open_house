use anchor_lang::prelude::*;
use crate::space::*;
use crate::Property;

/// Constants for reward logic
const LOCATION_REVEAL_FEE: u64 = 5; // Constant fee for location reveal
const REWARD_THRESHOLDS: [(u64, u64); 3] = [(50, 15), (100, 30), (200, 50)]; // (upvotes, tokens)

pub fn distribute_rewards(
    ctx: Context<DistributeRewards>, 
    amount: u64
) -> Result<()> {
    let scout = &mut ctx.accounts.scout;

    
    // Calculate rewards based on upvotes
    let mut reward_tokens = amount; // initing reward here
    for &(threshold, reward) in REWARD_THRESHOLDS.iter() {
        if scout.upvotes >= threshold {
            reward_tokens = reward_tokens.checked_add(
                amount.checked_mul(reward).ok_or(OpenHouseError::Overflow)?)
                .ok_or(OpenHouseError::Overflow)?;
        }
        
    }

    // Add calculated rewards
    scout.tokens = scout.tokens.checked_add(reward_tokens).ok_or(OpenHouseError::Overflow)?;

    // Emit an event for reward distribution
    emit!(RewardDistributed {
        scout: scout.key(),
        amount: reward_tokens,
        previous_balance: scout.tokens - reward_tokens,
        new_balance: scout.tokens
    });

    Ok(())
}

pub fn handle_location_reveal(
    ctx: Context<HandleLocationReveal>, 
    fee: u64
) -> Result<()> {
    let renter = &mut ctx.accounts.renter;
    let scout = &mut ctx.accounts.scout;
    let property = &ctx.accounts.property;
    let access_record = &mut ctx.accounts.access_record;



    // Record access for the renter
    access_record.property_id = property.property_id.clone();
    access_record.user = renter.key;

    // Ensure the renter has enough tokens to pay the fee
    require!(
        renter.tokens >= LOCATION_REVEAL_FEE,
        OpenHouseError::InsufficientFunds
    );

    // to transfer the fee to the property owner
    scout.tokens = scout.tokens
    .checked_add(LOCATION_REVEAL_FEE)
    .ok_or(OpenHouseError::Overflow)?;


    // Deduct the specified fee
    renter.tokens = renter.tokens.checked_sub(LOCATION_REVEAL_FEE)
        .ok_or(OpenHouseError::Overflow)?;
    
    // Emit an event for fee payment
    emit!(LocationRevealed {
        renter: renter.key(),
        fee_paid: fee,
        remaining_balance: renter.tokens
    });
    Ok(())
}


pub fn verify_access(ctx: Context<VerifyAccess>) -> Result<()> {
    let access_record = &mut ctx.accounts.access_record;

    // Ensure the access record corresponds to the correct user and property
    require!(
        access_record.user == *ctx.accounts.user.key,
        OpenHouseError::UnauthorizedAccess
    );
    require!(
        access_record.property_id == ctx.accounts.property.property_id,
        OpenHouseError::UnauthorizedAccess
    );

    Ok(())
}



// Account for distributing rewards
#[derive(Accounts)]
pub struct DistributeRewards<'info> {
    #[account(
        init,
        payer = scout_wallet,
        space = DISCRIMINATOR_SIZE +  
            U64_SIZE +               // 8 bytes tokens?
            U64_SIZE,               
        seeds = [scout.key().as_ref()],
        bump
    )]
    pub scout: Account<'info, User>,
    #[account(mut)]
    pub scout_wallet: Signer<'info>, // why did i do this again? the scout can't be the payer
    pub system_program: Program<'info, System>,
}

// Account for handling location reveal
#[derive(Accounts)]
pub struct HandleLocationReveal<'info> {
    #[account(mut)]
    pub renter: Account<'info, User>,
    #[account(mut)]
    pub scout: Account<'info, User>, // Scout (property "owner") receives payment
    #[account(
        mut,
        seeds = [property.property_id.as_bytes()],
        bump
    )]
    pub property: Account<'info, Property>,
    #[account(
        init,
        payer = renter,
        space = DISCRIMINATOR_SIZE + STRING_PREFIX_SIZE + MAX_PROPERTY_ID_LENGTH + PUBKEY_SIZE,
        seeds = [property.property_id.as_bytes(), renter.key().as_ref()],
        bump
    )]
    pub access_record: Account<'info, PropertyAccess>,
    pub system_program: Program<'info, System>,

}

// Account for verifying access
#[derive(Accounts)]
pub struct VerifyAccess<'info> {
    #[account(
        seeds = [property.property_id.as_bytes(), user.key().as_ref()],
        bump
    )]
    pub access_record: Account<'info, PropertyAccess>,
    pub user: Signer<'info>, // The user trying to access the location
    #[account(
        seeds = [property.property_id.as_bytes()],
        bump
    )]
    pub property: Account<'info, Property>,
}


// User account structure
#[account]
pub struct User {
    pub tokens: u64,
    pub upvotes: u64,
    pub key: Pubkey,
} 

#[account]
// #[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct PropertyAccess {
    pub property_id: String, 
    pub user: Pubkey,
    pub timestamp: i64, // might come handy for future scalability        
}




// // Property structure
// #[account]
// pub struct Property {
//     pub owner: Pubkey,
//     pub property_id: String,
//     pub details: Vec<String>, // shouldn't pose any issues since strings are expected to be short?
//     pub encrypted_location: Vec<u8>, // Encrypted location of the property
// }


// Event for tracking reward distribution
#[event]
pub struct RewardDistributed {
    pub scout: Pubkey,
    pub amount: u64,
    pub previous_balance: u64,
    pub new_balance: u64,
}

// Event for tracking location reveals
#[event]
pub struct LocationRevealed {
    pub renter: Pubkey,
    pub fee_paid: u64,
    pub remaining_balance: u64,
}

/// Error codes for custom errors
#[error_code]
pub enum OpenHouseError {
    #[msg("Insufficient Funds")]
    InsufficientFunds,
    #[msg("Overflow occurred during token operations")]
    Overflow,
    #[msg("Unauthorized Access")]
    UnauthorizedAccess,
}
