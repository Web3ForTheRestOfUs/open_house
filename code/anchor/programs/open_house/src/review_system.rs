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
// #[instruction(property_id: String)]
// pub struct SubmitReview<'info> {
//     #[account(
//         init,
//         payer = renter,
//         space = 8 + Review::LEN,
//         seeds = [property_id.as_bytes(), renter.key().as_ref()],  // Using property_id and renter as seeds
//         bump
//     )]
//     pub review: Account<'info, Review>,
//     #[account(mut)]
//     pub renter: Signer<'info>,
//     pub system_program: Program<'info, System>,
// }

// #[derive(Accounts)]
// pub struct ValidateReview<'info> {
//     #[account(
//         mut,
//         seeds = [review.property_id.as_bytes(), review.renter.as_ref()],
//         bump
//     )]
//     pub review: Account<'info, Review>,
//     pub verifier: Signer<'info>,
// }

// #[account]
// pub struct Review {
//     pub content: String,
//     pub validated: bool,
//     pub property_id: String,   // Added field for property_id
//     pub renter: Pubkey,        // Added field for renter
// }

// impl Review {
//     const LEN: usize = 4 + 200 + 1 + 4 + 32; // Adjusted length to include property_id and renter (32 bytes for Pubkey)
// }


use anchor_lang::prelude::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub enum VoteType {
    Upvote,
    Downvote,
}

pub fn submit_review(
    ctx: Context<SubmitReview>,
    review_content: String,
) -> Result<()> {
    // Validate review content length
    require!(
        review_content.len() <= 200, 
        CustomError::ReviewTooLong
    );

    let review = &mut ctx.accounts.review;
    review.content = review_content;
    review.votes = 0;
    review.voted_users = Vec::new();
    Ok(())
}

pub fn vote_review(
    ctx: Context<VoteReview>, 
    vote_type: VoteType
) -> Result<()> {
    let review = &mut ctx.accounts.review;
    let voter = &ctx.accounts.voter.key();

    // Prevent duplicate votes
    require!(
        !review.voted_users.contains(voter),
        CustomError::DuplicateVote
    );

    // Update votes based on vote type
    match vote_type {
        VoteType::Upvote => {
            review.votes = review.votes.checked_add(1)
                .ok_or(CustomError::VoteOverflow)?;
        },
        VoteType::Downvote => {
            review.votes = review.votes.checked_sub(1)
                .ok_or(CustomError::VoteUnderflow)?;
        }
    }

    // Track voted users
    review.voted_users.push(*voter);

    // Emit vote event
    emit!(VoteEvent {
        review: review.key(),
        voter: *voter,
        vote_type,
        new_vote_count: review.votes
    });

    Ok(())
}

#[event]
pub struct VoteEvent {
    review: Pubkey,
    voter: Pubkey,
    vote_type: VoteType,
    new_vote_count: i64,
}

#[derive(Accounts)]
#[instruction(property_id: String)]
pub struct SubmitReview<'info> {
    #[account(
        init,
        payer = renter,
        space = 8 + Review::LEN,
        seeds = [property_id.as_bytes(), renter.key().as_ref()],
        bump
    )]
    pub review: Account<'info, Review>,
    #[account(mut)]
    pub renter: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct VoteReview<'info> {
    #[account(mut)]
    pub review: Account<'info, Review>,
    pub voter: Signer<'info>,
}

#[account]
pub struct Review {
    pub content: String,
    pub votes: i64,
    pub property_id: String,
    pub renter: Pubkey,
    pub voted_users: Vec<Pubkey>,
}

impl Review {
    const LEN: usize = 4 + 200 + 8 + 4 + 32 + (4 + 100); // Adjusted for Pubkey vector
}

#[error_code]
pub enum CustomError {
    #[msg("Review content is too long")]
    ReviewTooLong,
    #[msg("Vote overflow occurred")]
    VoteOverflow,
    #[msg("Vote underflow occurred")]
    VoteUnderflow,
    #[msg("Duplicate vote detected")]
    DuplicateVote,
}