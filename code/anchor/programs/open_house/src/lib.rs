use anchor_lang::prelude::*;
declare_id!("B9jEbbSFoDZpmwqnRghE6zvUGQEZ3Bq2FVALL4FQYZPM");

pub mod property_registry;
pub mod review_system;
pub mod token_management;
pub mod space;


use property_registry::*;
use review_system::*;
use token_management::*;

#[program]
pub mod open_house {
    use super::*;

    pub fn register_property(
        ctx: Context<RegisterProperty>,
        property_id: String,
        details: Vec<String>,
        encrypted_location: Vec<u8>,
    ) -> Result<()> {
        property_registry::register_property(ctx, property_id, details, encrypted_location)
    }

    pub fn update_property(
        ctx: Context<UpdateProperty>,
        new_details: Vec<String>,
    ) -> Result<()> {
        property_registry::update_property(ctx, new_details)
    }

    pub fn submit_review(
        ctx: Context<SubmitReview>,
        review_content: String,
        property_id: String,
    ) -> Result<()> {
        review_system::submit_review(ctx, review_content, property_id)
    }

    pub fn distribute_rewards(
        ctx: Context<DistributeRewards>,
        amount: u64,
    ) -> Result<()> {
        token_management::distribute_rewards(ctx, amount)
    }

    pub fn handle_location_reveal(
        ctx: Context<HandleLocationReveal>,
        fee: u64,
    ) -> Result<()> {
        token_management::handle_location_reveal(ctx, fee)
    }

    pub fn verify_access(
        ctx: Context<VerifyAccess>,
    ) -> Result<()> {
        token_management::verify_access(ctx)
    }
}