// Constants for space calculations
pub const DISCRIMINATOR_SIZE: usize = 8;
pub const PUBKEY_SIZE: usize = 32;
pub const STRING_PREFIX_SIZE: usize = 4;    
pub const VECTOR_PREFIX_SIZE: usize = 4;
pub const BOOL_SIZE: usize = 1;
pub const U64_SIZE: usize = 8;
pub const I64_SIZE: usize = 8;
pub const VEC_PREFIX_SIZE: usize = 4;

// Program-specific constants
pub const MAX_PROPERTY_ID_LENGTH: usize = 50;
pub const MAX_REVIEW_CONTENT_LENGTH: usize = 200;
pub const MAX_DETAILS_COUNT: usize = 90;
pub const MAX_DETAIL_LENGTH: usize = 250;
pub const MAX_ENCRYPTED_LOCATION_SIZE: usize = 256;

// location reveal fee
pub const LOCATION_REVEAL_FEE: u64 = 10000;
