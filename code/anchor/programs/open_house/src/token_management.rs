use anchor_lang::prelude::*;

/// Constants for reward logic
const LOCATION_REVEAL_FEE: u64 = 5; // Constant fee for location reveal
const REWARD_THRESHOLDS: [(u64, u64); 3] = [(50, 15), (100, 30), (200, 50)]; // (upvotes, tokens)

pub fn distribute_rewards(ctx: Context<DistributeRewards>, amount: u64) -> Result<()> {
    let scout = &mut ctx.accounts.scout;

    
    // Calculate rewards based on upvotes
    let mut reward_tokens = amount; // initing amount here instead
    for &(threshold, reward) in REWARD_THRESHOLDS.iter() {
        if scout.upvotes >= threshold {
            // Add multiplier based on threshold reached
            reward_tokens = reward_tokens.checked_mul(reward)
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

pub fn handle_location_reveal(ctx: Context<HandleLocationReveal>, fee: u64) -> Result<()> {
    let renter = &mut ctx.accounts.renter;

    // Ensure the renter has enough tokens to pay the fee
    require!(
        renter.tokens >= fee && fee >= LOCATION_REVEAL_FEE,
        OpenHouseError::InsufficientFunds
    );

    // Deduct the specified fee
    renter.tokens = renter.tokens.checked_sub(fee)
        .ok_or(OpenHouseError::Overflow)?;
    
    // Emit an event for fee payment
    emit!(LocationRevealed {
        renter: renter.key(),
        fee_paid: fee,
        remaining_balance: renter.tokens
    });
    Ok(())
}

// Account for distributing rewards
#[derive(Accounts)]
pub struct DistributeRewards<'info> {
    #[account(
        mut,
        seeds = [scout.key().as_ref()],
        bump
    )]
    pub scout: Account<'info, User>,
}

/// Account for handling location reveal
#[derive(Accounts)]
pub struct HandleLocationReveal<'info> {
    #[account(
        mut,
        seeds = [renter.key().as_ref()],
        bump
    )]
    pub renter: Account<'info, User>,
}

/// User account structure
#[account]
pub struct User {
    pub tokens: u64,      // Token balance
    pub upvotes: u64,     // Total upvotes received
}

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
}
