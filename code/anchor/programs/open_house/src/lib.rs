use anchor_lang::prelude::*;
use crate::state::listing::{ ListingData, ListingStatus, Location };
use crate::instructions::listing::{ create::*, update::*, vote::* };
use crate::instructions::comment::create::*;

pub mod state;
pub mod instructions;
pub mod constants;

declare_id!("4A6rJDG44QbfBsYByLbHV31RrBADVSimesYjTqCdUGpE");

#[program]
pub mod open_house {
    use super::*;

    pub fn create_listing(ctx: Context<CreateListing>, listing: ListingData) -> Result<()> {
        instructions::listing::create::create_listing(ctx, listing)
    }

    pub fn update_listing(
        ctx: Context<UpdateListing>,
        new_location: Option<Location>,
        new_status: Option<ListingStatus>
    ) -> Result<()> {
        instructions::listing::update::update_listing(ctx, new_location, new_status)
    }

    pub fn vote_on_listing(ctx: Context<VoteOnListing>, is_up_vote: bool) -> Result<()> {
        if is_up_vote {
            return instructions::listing::vote::up_vote_listing(ctx);
        } else {
            return instructions::listing::vote::down_vote_listing(ctx);
        }
    }

    pub fn vote_on_listing_comment(ctx: Context<VoteOnComment>, is_up_vote: bool) -> Result<()> {
        if is_up_vote {
            return instructions::listing::vote::up_vote_comment(ctx);
        } else {
            return instructions::listing::vote::down_vote_comment(ctx);
        }
    }

    pub fn create_comment(ctx: Context<CreateComment>, content: String) -> Result<()> {
        instructions::comment::create::create_comment(ctx, content)
    }

    
}





// property_id: String,
// verify_access
// handle location reveal
// submit_review(
// distribute_rewards(

// #[derive(AnchorSerialize, AnchorDeserialize, Clone)]
// pub enum VoteType {
//     Upvote,
//     Downvote,
// }

// #[account]
// try to implement initspace later, feels cleaner
// pub struct Review {
//     pub content: String,
//     pub votes: i64,
//     pub property_id: String,
//     pub renter: Pubkey,
//     pub voted_users: Vec<Pubkey>,
// }

// Validate property ID length
//   require!(
//     property_id.len() <= MAX_PROPERTY_ID_LENGTH,
//     CustomError::PropertyIdTooLong);
// do we need a property id?






















//THESE INSTRUCTIONS WORKED WITH THEIR ACCOUNTS 

// pub fn create_journal_entry(
//     ctx: Context<CreateEntry>,
//     title: String,
//     message: String,
// ) -> Result<()> {
//     msg!("Journal Entry Created");
//     msg!("Title: {}", title);
//     msg!("Message: {}", message);

//     let journal_entry = &mut ctx.accounts.journal_entry;
//     journal_entry.owner = ctx.accounts.owner.key();
//     journal_entry.title = title;
//     journal_entry.message = message;
//     Ok(())
// }

// pub fn update_journal_entry(
//     ctx: Context<UpdateEntry>,
//     title: String,
//     message: String,
// ) -> Result<()> {
//     msg!("Journal Entry Updated");
//     msg!("Title: {}", title);
//     msg!("Message: {}", message);

//     let journal_entry = &mut ctx.accounts.journal_entry;
//     journal_entry.message = message;

//     Ok(())
// }

// pub fn delete_journal_entry(_ctx: Context<DeleteEntry>, title: String) -> Result<()> {
//     msg!("Journal entry titled {} deleted", title);
//     Ok(())
// }



// #[account]
// pub struct JournalEntryState {
//     pub owner: Pubkey,
//     pub title: String,
//     pub message: String,
// }

// #[derive(Accounts)]
// #[instruction(title: String, message: String)]
// pub struct CreateEntry<'info> {
//     #[account(
//         init,
//         seeds = [title.as_bytes(), owner.key().as_ref()], 
//         bump, 
//         payer = owner, 
//         space = 8 + 32 + 4 + title.len() + 4 + message.len()
//     )]
//     pub journal_entry: Account<'info, JournalEntryState>,
//     #[account(mut)]
//     pub owner: Signer<'info>,
//     pub system_program: Program<'info, System>,
// }

// #[derive(Accounts)]
// #[instruction(title: String, message: String)]
// pub struct UpdateEntry<'info> {
//     #[account(
//         mut,
//         seeds = [title.as_bytes(), owner.key().as_ref()], 
//         bump, 
//         realloc = 8 + 32 + 4 + title.len() + 4 + message.len(),
//         realloc::payer = owner, 
//         realloc::zero = true, 
//     )]
//     pub journal_entry: Account<'info, JournalEntryState>,
//     #[account(mut)]
//     pub owner: Signer<'info>,
//     pub system_program: Program<'info, System>,
// }

// #[derive(Accounts)]
// #[instruction(title: String)]
// pub struct DeleteEntry<'info> {
//     #[account( 
//         mut, 
//         seeds = [title.as_bytes(), owner.key().as_ref()], 
//         bump, 
//         close= owner,
//     )]
//     pub journal_entry: Account<'info, JournalEntryState>,
//     #[account(mut)]
//     pub owner: Signer<'info>,
//     pub system_program: Program<'info, System>,
// }
