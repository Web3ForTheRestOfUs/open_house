use anchor_lang::prelude::*;

const MAX_PROPERTY_ID_LENGTH: usize = 50;  // Maximum length for property ID
const MAX_DETAILS_LENGTH: usize = 500;  // Maximum length for property details

pub fn register_property(
    ctx: Context<RegisterProperty>,
    property_id: String,
    details: String,
) -> Result<()> {

    // Validate property ID length
    require!(property_id.len() <= MAX_PROPERTY_ID_LENGTH, CustomError::PropertyIdTooLong);
    require!(details.len() <= MAX_DETAILS_LENGTH, CustomError::DetailsTooLong);



    let property = &mut ctx.accounts.property;
    property.owner = *ctx.accounts.owner.key;
    property.property_id = property_id;
    property.details = details;
    property.verified = false;
    Ok(())
}

pub fn update_property(
    ctx: Context<UpdateProperty>,
    new_details: String,
) -> Result<()> {
    // Validate new details length
    require!(new_details.len() <= MAX_DETAILS_LENGTH, CustomError::DetailsTooLong);

    let property = &mut ctx.accounts.property;
    require!(
        property.owner == *ctx.accounts.owner.key,
        CustomError::Unauthorized
    );
    property.details = new_details;
    Ok(())
}


#[derive(Accounts)]
#[instruction(property_id: String, details: String)]
pub struct RegisterProperty<'info> {
    #[account(
        init,
        payer = owner,
        space = 8 + // discriminator
            32 + // pubkey
            4 + MAX_PROPERTY_ID_LENGTH + // String length prefix + content
            4 + MAX_DETAILS_LENGTH + // String length prefix + content
            1,
        seeds = [property_id.as_bytes()],  // Using property_id as the seed
        bump
    )]
    pub property: Account<'info, Property>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(property_id: String)]
pub struct UpdateProperty<'info> {
    #[account(
        mut,
        has_one = owner,
        seeds = [property.property_id.as_bytes()],  // Using property_id as the seed
        bump
    )]
    pub property: Account<'info, Property>,
    pub owner: Signer<'info>,
}

#[account]
pub struct Property {
    pub owner: Pubkey,
    pub property_id: String,
    pub details: String,
    pub verified: bool,
}


#[error_code]
pub enum CustomError {
    #[msg("Unauthorized action")]
    Unauthorized,
    #[msg("Property ID exceeds maximum length")]
    PropertyIdTooLong,
    #[msg("Property details exceed maximum length")]
    DetailsTooLong,
}