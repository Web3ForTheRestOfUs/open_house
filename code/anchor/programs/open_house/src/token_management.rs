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

pub fn distribute_rewards(
    ctx: Context<DistributeRewards>,
    amount: u64,
) -> Result<()> {
    let scout = &mut ctx.accounts.scout;
    scout.tokens += amount;
    Ok(())
}

pub fn handle_location_reveal(
    ctx: Context<HandleLocationReveal>,
    fee: u64,
) -> Result<()> {
    let renter = &mut ctx.accounts.renter;
    require!(
        renter.tokens >= fee,
        CustomError1::InsufficientFunds
    );
    renter.tokens -= fee;
    Ok(())
}

#[derive(Accounts)]
pub struct DistributeRewards<'info> {
    #[account(
        mut,
        seeds = [scout.key().as_ref()],  // Use scout's pubkey as seed for PDA
        bump
    )]
    pub scout: Account<'info, User>,
}

#[derive(Accounts)]
pub struct HandleLocationReveal<'info> {
    #[account(
        mut,
        seeds = [renter.key().as_ref()],  // Use renter's pubkey as seed for PDA
        bump
    )]
    pub renter: Account<'info, User>,
}

#[account]
pub struct User {
    pub tokens: u64,
}

#[error_code]
pub enum CustomError1 {
    #[msg("Insufficient Funds")]
    InsufficientFunds,
}
