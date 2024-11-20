// use anchor_lang::prelude::*;

// pub fn distribute_rewards(
//     ctx: Context<DistributeRewards>,
//     amount: u64,
// ) -> Result<()> {
//     let scout = &mut ctx.accounts.scout;
//     scout.tokens += amount;
//     Ok(())
// }

// pub fn handle_location_reveal(
//     ctx: Context<HandleLocationReveal>,
//     fee: u64,
// ) -> Result<()> {
//     let renter = &mut ctx.accounts.renter;
//     require!(
//         renter.tokens >= fee,
//         CustomError1::InsufficientFunds
//     );
//     renter.tokens -= fee;
//     Ok(())
// }

// #[derive(Accounts)]
// pub struct DistributeRewards<'info> {
//     #[account(mut)]
//     pub scout: Account<'info, User>,
// }

// #[derive(Accounts)]
// pub struct HandleLocationReveal<'info> {
//     #[account(mut)]
//     pub renter: Account<'info, User>,
// }

// #[account]
// pub struct User {
//     pub tokens: u64,
// }

// #[error_code]
// pub enum CustomError1 {
//     #[msg("Insufficient Funds")]
//     InsufficientFunds,
// }


use anchor_lang::prelude::*;

/// Constants for reward logic
const LOCATION_REVEAL_FEE: u64 = 5; // Constant fee for location reveal
const REWARD_THRESHOLDS: [(u64, u64); 3] = [(50, 15), (100, 30), (200, 50)]; // (votes, tokens)

pub fn distribute_rewards(ctx: Context<DistributeRewards>, amount: u64) -> Result<()> {
    let scout = &mut ctx.accounts.scout;
    // let amount = ctx.accounts.amount; // testing

    // Calculate rewards based on upvotes
    let mut reward_tokens = 0;
    for &(threshold, reward) in REWARD_THRESHOLDS.iter() {
        if scout.upvotes >= threshold {
            reward_tokens = reward; // Keep updating to the highest reward threshold
        }
    }

    // Add calculated rewards
    scout.tokens = scout.tokens.checked_add(reward_tokens).ok_or(CustomError1::Overflow)?;
    Ok(())
}

pub fn handle_location_reveal(ctx: Context<HandleLocationReveal>, fee: u64) -> Result<()> {
    let renter = &mut ctx.accounts.renter;
    // let fee = ctx.accounts.fee; // testing

    // Ensure the renter has enough tokens to pay the fee
    require!(
        renter.tokens >= LOCATION_REVEAL_FEE,
        CustomError1::InsufficientFunds
    );

    // Deduct the constant fee
    renter.tokens -= LOCATION_REVEAL_FEE;
    Ok(())
}

// Account for distributing rewards
#[derive(Accounts)]
pub struct DistributeRewards<'info> {
    #[account(
        mut,
        seeds = [scout.key().as_ref()],  // Use scout's pubkey as seed for PDA
        bump
    )]
    pub scout: Account<'info, User>,
}

/// Account for handling location reveal
#[derive(Accounts)]
pub struct HandleLocationReveal<'info> {
    #[account(
        mut,
        seeds = [renter.key().as_ref()],  // Use renter's pubkey as seed for PDA
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

/// Error codes for custom errors
#[error_code]
pub enum CustomError1 {
    #[msg("Insufficient Funds")]
    InsufficientFunds,
    #[msg("Overflow occurred during token operations")]
    Overflow,
}
