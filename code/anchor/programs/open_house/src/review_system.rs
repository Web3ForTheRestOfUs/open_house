use anchor_lang::prelude::*;
use crate::space::*;

const MAX_REVIEW_CONTENT_LENGTH: usize = 200;  // Maximum length for review content
const MAX_PROPERTY_ID_LENGTH: usize = 50;      // Maximum length for property ID

pub fn submit_review(
    ctx: Context<SubmitReview>,
    review_content: String,
    property_id: String,
) -> Result<()> {
    // Validate review content length and property ID length
    require!(
        review_content.len() <= MAX_REVIEW_CONTENT_LENGTH, 
        CustomError::ReviewTooLong
    );
    require!(
        property_id.len() <= MAX_PROPERTY_ID_LENGTH, 
        CustomError::PropertyIdTooLong
    );

    

    let review = &mut ctx.accounts.review;
    review.content = review_content;
    review.votes = 0;
    review.renter = *ctx.accounts.renter.key;
    review.property_id = property_id;
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


#[derive(Accounts)]
#[instruction(property_id: String, review_content: String)]
pub struct SubmitReview<'info> {
    #[account(
        init,
        payer = renter,
        space = DISCRIMINATOR_SIZE +      // 8 bytes discriminator
            STRING_PREFIX_SIZE + MAX_REVIEW_CONTENT_LENGTH +  // 4 + 200 content
            I64_SIZE +                    // 8 bytes votes
            STRING_PREFIX_SIZE + MAX_PROPERTY_ID_LENGTH +     // 4 + 50 property_id
            PUBKEY_SIZE,
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
// try to implement initspace later, feels cleaner
pub struct Review {
    pub content: String,
    pub votes: i64,
    pub property_id: String,
    pub renter: Pubkey,
    pub voted_users: Vec<Pubkey>,
}

#[event]
pub struct VoteEvent {
    review: Pubkey,
    voter: Pubkey,
    vote_type: VoteType,
    new_vote_count: i64,
}

// custom error definitions
#[error_code]
pub enum CustomError {
    #[msg("Review content is too long")]
    ReviewTooLong,
    #[msg("Property ID is too long")]
    PropertyIdTooLong,
    #[msg("Vote overflow occurred")]
    VoteOverflow,
    #[msg("Vote underflow occurred")]
    VoteUnderflow,
    #[msg("Duplicate vote detected")]
    DuplicateVote,
}