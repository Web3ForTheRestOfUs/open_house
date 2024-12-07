use anchor_lang::prelude::*;
use crate::space::*;



pub fn register_property(
    ctx: Context<RegisterProperty>,
    property_id: String,
    details: Vec<String>,
    encrypted_location: Vec<u8>,

) -> Result<()> {
    
    // Validate property ID length
    require!(
        property_id.len() <= MAX_PROPERTY_ID_LENGTH, 
        CustomError::PropertyIdTooLong);

    // Validate details count and length
    require!(
        details.len() <= MAX_DETAILS_COUNT,
        CustomError::DetailsTooLong
    );
    
    for detail in details.iter() {
        require!(
            detail.len() <= MAX_DETAIL_LENGTH,
            CustomError::DetailStringTooLong
        );
    }

    let property = &mut ctx.accounts.property;
    property.owner = *ctx.accounts.owner.key;
    property.property_id = property_id;

    property.details = details;    
    property.encrypted_location = encrypted_location;

    Ok(())
}

pub fn update_property(
    ctx: Context<UpdateProperty>,
    new_details: Vec<String>,
) -> Result<()> {

    let property = &mut ctx.accounts.property;
    require!(
        property.owner == *ctx.accounts.owner.key,
        CustomError::Unauthorized
    );
    property.details = new_details;

    Ok(())
}


#[derive(Accounts)]
#[instruction(property_id: String, details: Vec<String>, encrypted_location: Vec<u8>)]
pub struct RegisterProperty<'info> {
    #[account(
        init,
        payer = owner,
        space = DISCRIMINATOR_SIZE +         // 8 bytes
                PUBKEY_SIZE +               // 32 bytes
                STRING_PREFIX_SIZE +        // 4 bytes
                MAX_PROPERTY_ID_LENGTH +    // e.g., 32 bytes
                VECTOR_PREFIX_SIZE +        // 4 bytes
                (MAX_DETAILS_COUNT * (STRING_PREFIX_SIZE + MAX_DETAIL_LENGTH)) + // Details
                VECTOR_PREFIX_SIZE +        // 4 bytes
                MAX_ENCRYPTED_LOCATION_SIZE, // 256 bytes
        seeds = [property_id.as_bytes()],
        bump
    )]
    pub property: Account<'info, Property>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(property_id: String, new_details: Vec<String>)]
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



// STRUCTS, LFG?
#[account]
pub struct Property {
    pub owner: Pubkey,
    pub property_id: String,
    pub details: Vec<String>,
    pub encrypted_location: Vec<u8>, // encrypted location of the property, only revealed after payment, see how to implement
}




// ERROR ENUM
#[error_code]
pub enum CustomError {
    #[msg("Unauthorized action")]
    Unauthorized,
    #[msg("Property ID exceeds maximum length")]
    PropertyIdTooLong,
    #[msg("Failed to serialize property details")]
    SerializationError,
    #[msg("Details count exceeds maximum length")]
    DetailsTooLong,
    #[msg("Detail string exceeds maximum length")]
    DetailStringTooLong,
}