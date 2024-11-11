// use anchor_lang::prelude::*;

// pub fn submit_review(
//     ctx: Context<SubmitReview>,
//     review_content: String,
// ) -> Result<()> {
//     let review = &mut ctx.accounts.review;
//     review.content = review_content;
//     review.validated = false;
//     Ok(())
// }

// pub fn validate_review(ctx: Context<ValidateReview>) -> Result<()> {
//     let review = &mut ctx.accounts.review;
//     review.validated = true;
//     Ok(())
// }

// #[derive(Accounts)]
// pub struct SubmitReview<'info> {
//     #[account(init, payer = renter, space = 8 + Review::LEN)]
//     pub review: Account<'info, Review>,
//     #[account(mut)]
//     pub renter: Signer<'info>,
//     pub system_program: Program<'info, System>,
// }

// #[derive(Accounts)]
// pub struct ValidateReview<'info> {
//     #[account(mut)]
//     pub review: Account<'info, Review>,
//     pub verifier: Signer<'info>,
// }

// #[account]
// pub struct Review {
//     pub content: String,
//     pub validated: bool,
// }

// impl Review {
//     const LEN: usize = 4 + 200 + 1; // Adjust this based on actual data size
// }

//WITH PDAs
use anchor_lang::prelude::*;

pub fn submit_review(
    ctx: Context<SubmitReview>,
    review_content: String,
) -> Result<()> {
    let review = &mut ctx.accounts.review;
    review.content = review_content;
    review.validated = false;
    Ok(())
}

pub fn validate_review(ctx: Context<ValidateReview>) -> Result<()> {
    let review = &mut ctx.accounts.review;
    review.validated = true;
    Ok(())
}

#[derive(Accounts)]
#[instruction(property_id: String)]
pub struct SubmitReview<'info> {
    #[account(
        init,
        payer = renter,
        space = 8 + Review::LEN,
        seeds = [property_id.as_bytes(), renter.key().as_ref()],  // Using property_id and renter as seeds
        bump
    )]
    pub review: Account<'info, Review>,
    #[account(mut)]
    pub renter: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ValidateReview<'info> {
    #[account(
        mut,
        seeds = [review.property_id.as_bytes(), review.renter.as_ref()],
        bump
    )]
    pub review: Account<'info, Review>,
    pub verifier: Signer<'info>,
}

#[account]
pub struct Review {
    pub content: String,
    pub validated: bool,
    pub property_id: String,   // Added field for property_id
    pub renter: Pubkey,        // Added field for renter
}

impl Review {
    const LEN: usize = 4 + 200 + 1 + 4 + 32; // Adjusted length to include property_id and renter (32 bytes for Pubkey)
}
