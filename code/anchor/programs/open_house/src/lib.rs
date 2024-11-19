#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
declare_id!("B6g6uSjcFRn9U1p1wv4s7eggzUoFCn7koc2cnonrEZGJ");

pub mod property_registry;
pub mod review_system;
pub mod token_management;

use property_registry::*;
use review_system::*;
use token_management::*;

#[program]
pub mod open_house {
    use super::*;

    pub fn register_property(
        ctx: Context<RegisterProperty>,
        property_id: String,
        details: String,
    ) -> Result<()> {
        property_registry::register_property(ctx, property_id, details)
    }

    pub fn update_property(
        ctx: Context<UpdateProperty>,
        new_details: String,
    ) -> Result<()> {
        property_registry::update_property(ctx, new_details)
    }

    // pub fn verify_property(
    //     ctx: Context<VerifyProperty>,
    // ) -> Result<()> {
    //     property_registry::verify_property(ctx)
    // }

    pub fn submit_review(
        ctx: Context<SubmitReview>,
        review_content: String,
    ) -> Result<()> {
        review_system::submit_review(ctx, review_content)
    }

    // pub fn validate_review(
    //     ctx: Context<ValidateReview>,
    // ) -> Result<()> {
    //     review_system::validate_review(ctx)
    // }

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
}
