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
pub enum VoteType { // enum to represent the type of vote
    Upvote,
    Downvote,
}

pub fn submit_review(
    ctx: Context<SubmitReview>,
    review_content: String,
) -> Result<()> {
    let review = &mut ctx.accounts.review;
    review.content = review_content;
    review.votes = 0; // initialize votes to 0
    review.voters = Vec::new(); // initialize empty voters list
    Ok(())
}

pub fn vote_review(ctx: Context<VoteReview>, vote_type: VoteType) -> Result<()> {
    let review = &mut ctx.accounts.review;
    let voter_key = ctx.accounts.voter.key();

    // check if the user has already voted
    require!(
        !review.voters.contains(voter_key),
        CustomError::DuplicateVote
    );

    // determine whether it's an increment or decrement based on the vote type
    let vote = match vote_type {
        VoteType::Upvote => 1,
        VoteType::Downvote => -1,
    };

    // safely update the votes with overflow handling
    review.votes = review
        .votes
        .checked_add(vote)
        .ok_or(CustomError::VoteOverflow)?;

    // add the voter's key to the list of voters
    review.voters.push(*voter_key);

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
pub struct VoteReview<'info> {
    #[account(
        mut,
        seeds = [review.property_id.as_bytes(), review.renter.as_ref()],
        bump
    )]
    pub review: Account<'info, Review>,
    pub voter: Signer<'info>, // User voting on the review
}

#[account]
pub struct Review {
    pub content: String,       
    pub votes: i64,            // net votes (upvotes - downvotes)
    pub property_id: String,   
    pub renter: Pubkey,        // The renter who submitted the review
    pub voters: Vec<Pubkey>,   // List of users who have voted
}

impl Review {
    // Adjusted length to include all fields and voters list
    const LEN: usize = 4 + 200 + 8 + 4 + 32 + (4 + 32 * MAX_VOTERS);
}

const MAX_VOTERS: usize = 100; // Adjust based on space constraints

#[error_code]
pub enum CustomError {
    #[msg("review overflow")]
    VoteOverflow,
    #[msg("you already reviewed this property")]
    DuplicateVote,
}

