use anchor_lang::prelude::*;

pub fn register_property(
    ctx: Context<RegisterProperty>,
    property_id: String,
    details: String,
) -> Result<()> {
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
    let property = &mut ctx.accounts.property;
    require!(
        property.owner == *ctx.accounts.owner.key,
        CustomError::Unauthorized
    );
    property.details = new_details;
    Ok(())
}

pub fn verify_property(ctx: Context<VerifyProperty>) -> Result<()> {
    let property = &mut ctx.accounts.property;
    property.verified = true;
    Ok(())
}

#[derive(Accounts)]
#[instruction(property_id: String)]
pub struct RegisterProperty<'info> {
    #[account(
        init,
        payer = owner,
        space = 8 + Property::LEN,
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

#[derive(Accounts)]
#[instruction(property_id: String)]
pub struct VerifyProperty<'info> {
    #[account(
        mut,
        seeds = [property_id.as_bytes()],
        bump
    )]
    pub property: Account<'info, Property>,
    pub verifier: Signer<'info>,
}

#[account]
pub struct Property {
    pub owner: Pubkey,
    pub property_id: String,
    pub details: String,
    pub verified: bool,
}

impl Property {
    const LEN: usize = 32 + 4 + 100 + 1; // Adjust this as needed for actual data size
}

#[error_code]
pub enum CustomError {
    #[msg("Unauthorized action")]
    Unauthorized,
}
