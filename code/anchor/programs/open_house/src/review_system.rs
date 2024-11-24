use anchor_lang::prelude::*;

const MAX_REVIEW_CONTENT_LENGTH: usize = 200;  // Maximum length for review content
const MAX_PROPERTY_ID_LENGTH: usize = 50;      // Maximum length for property ID
const MAX_DETAILS_LENGTH: usize = 500;  // Maximum length for property details

pub fn submit_review(
    ctx: Context<SubmitReview>,
    review_content: String,
) -> Result<()> {
    // Validate review content length
    require!(
        review_content.len() <= MAX_REVIEW_CONTENT_LENGTH, 
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
#[instruction(property_id: String, review_content: String)]
pub struct SubmitReview<'info> {
    #[account(
        init,
        payer = renter,
        space = 8 + // discriminator
            32 + // pubkey
            4 + MAX_PROPERTY_ID_LENGTH + // String length prefix + content
            4 + MAX_DETAILS_LENGTH + // String length prefix + content
            1,
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
    #[account(mut)]
    pub voter: Signer<'info>,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub enum VoteType {
    Upvote,
    Downvote,
}

#[account]
pub struct Review {
    pub content: String,
    pub votes: i64,
    pub property_id: String,
    pub renter: Pubkey,
    pub voted_users: Vec<Pubkey>,
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