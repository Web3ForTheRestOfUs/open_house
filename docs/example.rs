use chrono::{ DateTime, Utc };
use rust_decimal::Decimal;
use serde::{ Deserialize, Serialize };
use std::collections::HashMap;

// Base types
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Coordinates {
    latitude: String,
    longitude: String,
    accuracy: Option<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Dimensions {
    width: u32,
    height: u32,
}

// Media structs
#[derive(Debug, Serialize, Deserialize)]
pub struct MediaMetadata {
    dimensions: Dimensions,
    file_size: u64,
    file_type: String,
    device_info: Option<String>,
    coordinates: Option<Coordinates>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MediaItem {
    id: String,
    category: String,
    item_type: String,
    ipfs_hash: String,
    thumbnail_hash: String,
    description: String,
    metadata: MediaMetadata,
    order: u32,
    verification_status: VerificationStatus,
    tags: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VirtualTour {
    enabled: bool,
    provider: String,
    ipfs_hash: String,
    thumbnail_hash: String,
    description: String,
    metadata: VirtualTourMetadata,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VirtualTourMetadata {
    tour_id: String,
    created_at: DateTime<Utc>,
    last_accessed: DateTime<Utc>,
    total_views: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct FloorPlan {
    enabled: bool,
    ipfs_hash: String,
    thumbnail_hash: String,
    description: String,
    metadata: MediaMetadata,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyMedia {
    images: Vec<MediaItem>,
    videos: Vec<MediaItem>,
    virtual_tour: Option<VirtualTour>,
    floor_plan: Option<FloorPlan>,
}

// Blockchain info
#[derive(Debug, Serialize, Deserialize)]
pub struct BlockchainInfo {
    network: String,
    lister_wallet: String,
    contract_address: String,
    tokens_minted: String,
    verification_status: VerificationStatus,
    listing_status: ListingStatus,
}

// Property types
#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyType {
    house_type: String,
    building_type: String,
    floor_level: u32,
    total_floors: u32,
}

// Location
#[derive(Debug, Serialize, Deserialize)]
pub struct Location {
    nearest_bus_stop: String,
    main_road_access: String,
    estate: String,
    street: String,
    area: String,
    lga: String,
    state: String,
    coordinates: Coordinates,
    landmarks: Vec<String>,
}

// Pricing
#[derive(Debug, Serialize, Deserialize)]
pub struct Pricing {
    yearly_rent: Decimal,
    currency: String,
    payment_terms: String,
    negotiable: bool,
    price_range: String,
}

// Availability
#[derive(Debug, Serialize, Deserialize)]
pub struct Availability {
    status: PropertyStatus,
    expiry_month: String,
    expiry_year: String,
    intent_to_leave: String,
    move_in_date: String,
    minimum_stay_period: String,
    viewing_hours: String,
}

// Overview stats
#[derive(Debug, Serialize, Deserialize)]
pub struct OverviewStats {
    bedrooms: u32,
    bathrooms: u32,
    toilets: u32,
    parking_spaces: u32,
    approximate_size: String,
}

// Basic Info aggregation
#[derive(Debug, Serialize, Deserialize)]
pub struct BasicInfo {
    property_type: PropertyType,
    location: Location,
    pricing: Pricing,
    availability: Availability,
    overview_stats: OverviewStats,
}

// Enums for status types
#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "lowercase")]
pub enum VerificationStatus {
    Pending,
    Verified,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum ListingStatus {
    Active,
    Inactive,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum PropertyStatus {
    Vacant,
    Occupied,
}

impl PropertyMedia {
    pub fn total_media_count(&self) -> usize {
        self.images.len() + self.videos.len()
    }
}

impl Location {
    pub fn is_within_radius(&self, target: &Coordinates, radius_km: f64) -> bool {
        // Haversine formula implementation would go here
        todo!()
    }
}

impl BasicInfo {
    pub fn is_available_for_viewing(&self) -> bool {
        self.availability.status == PropertyStatus::Vacant
    }
}
// Utilities
#[derive(Debug, Serialize, Deserialize)]
pub struct PowerUtility {
    light_situation: String,
    meter_type: String,
    meter_number: String,
    average_monthly_bill: Decimal,
    last_bill_amount: Decimal,
    last_bill_date: String,
    electricity_band: String,
    power_company: String,
    load_limit: String,
    power_rating: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct WaterStorage {
    ground_tank: String,
    overhead_tank: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct WaterUtility {
    situation: String,
    source: Vec<String>,
    storage: WaterStorage,
    water_pressure: String,
    pumping_schedule: String,
    treatment_system: String,
    backup: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct InternetFiberOptic {
    available: bool,
    providers: Vec<String>,
    max_speed: String,
    installation_status: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TelcoNetworks {
    mtn: u8,
    airtel: u8,
    glo: u8,
    nine_mobile: u8,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct InternetConnectivity {
    fiber_optic: InternetFiberOptic,
    telcos: TelcoNetworks,
    average_speed: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GeneratorDetails {
    capacity: String,
    brand: String,
    max_allowed_size: String,
    housing_location: String,
    operating_hours: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct FuelPolicy {
    policy_type: String,
    storage_allowed: bool,
    max_storage_limit: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SharedGenerator {
    available: bool,
    capacity: Option<String>,
    schedule: Option<String>,
    monthly_fee: Option<Decimal>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Generator {
    generator_type: String,
    details: GeneratorDetails,
    fuel_policy: FuelPolicy,
    shared_generator: SharedGenerator,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CookingUtility {
    gas_allowed: bool,
    gas_type: Vec<String>,
    electric_cooking_allowed: bool,
    kerosene_allowed: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct WasteManagement {
    management_system: String,
    collection_days: Vec<String>,
    monthly_fee: Decimal,
    segregation_required: bool,
    bin_location: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Utilities {
    power: PowerUtility,
    water: WaterUtility,
    internet: InternetConnectivity,
    generator: Generator,
    cooking: CookingUtility,
    waste: WasteManagement,
}

// Property Details
#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyAge {
    category: String,
    year_built: String,
    last_major_renovation: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RoomDimensions {
    total_area: String,
    living_room: String,
    bedroom: String,
    kitchen: String,
    bathroom: String,
    balcony: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PropertySize {
    category: String,
    dimensions: RoomDimensions,
    ceiling_height: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PlannedMaintenance {
    maintenance_type: String,
    scheduled_date: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MaintenanceHistory {
    last_inspection: String,
    regular_maintenance: bool,
    last_painted: String,
    structural_issues: bool,
    recent_repairs: Vec<String>,
    ongoing_issues: Vec<String>,
    planned_maintenance: Vec<PlannedMaintenance>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyCondition {
    needs_repair: String,
    maintenance_history: MaintenanceHistory,
}

// Room structures
#[derive(Debug, Serialize, Deserialize)]
pub struct Room {
    size: String,
    features: Vec<String>,
    windows: u32,
    flooring: String,
    orientation: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Toilet {
    separate: bool,
    size: String,
    features: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Balcony {
    balcony_type: String,
    size: String,
    features: Vec<String>,
    orientation: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyRooms {
    living_room: Room,
    bedroom: Room,
    kitchen: Room,
    bathroom: Room,
    toilet: Toilet,
    balcony: Balcony,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct WallFinishes {
    exterior: String,
    interior: String,
    condition: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct FloorFinishes {
    material: String,
    finish_type: String,
    condition: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct WindowFinishes {
    window_type: String,
    glazing: String,
    nets: String,
    burglar_proof: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DoorFinishes {
    main: String,
    internal: String,
    condition: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyFinishes {
    walls: WallFinishes,
    floors: FloorFinishes,
    windows: WindowFinishes,
    doors: DoorFinishes,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Parking {
    parking_type: String,
    spaces: u32,
    covered: bool,
    secured: bool,
    dimensions: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Accessibility {
    vehicular: String,
    pedestrian: String,
    handicap: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Landscaping {
    garden: bool,
    paved: bool,
    green_area: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SharedFacilities {
    laundry: LaundryFacility,
    storage: StorageFacility,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct LaundryFacility {
    available: bool,
    facility_type: String,
    location: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct StorageFacility {
    available: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CompoundFeatures {
    parking: Parking,
    accessibility: Accessibility,
    landscaping: Landscaping,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Compound {
    size: String,
    features: CompoundFeatures,
    shared: SharedFacilities,
}

// Security related structs
#[derive(Debug, Serialize, Deserialize)]
pub struct SecurityPersonnel {
    gate_guard: bool,
    estate_security: bool,
    working_hours: String,
    number_of_guards: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SecurityAccess {
    gate_pass: bool,
    intercom: bool,
    visitor_parking: bool,
    gate_closing_time: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct EmergencySecurity {
    exit_routes: u32,
    fire_extinguisher: bool,
    first_aid_kit: bool,
    emergency_contacts: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Security {
    security_type: String,
    personnel: SecurityPersonnel,
    features: Vec<String>,
    access: SecurityAccess,
    emergency: EmergencySecurity,
}

impl Security {
    pub fn has_security_feature(&self, feature: &str) -> bool {
        self.features.iter().any(|f| f == feature)
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Environment {
    flooding: FloodingInfo,
    noise: NoiseInfo,
    pollution: PollutionInfo,
    neighbors: NeighborInfo,
    amenities: AmenityInfo,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct FloodingInfo {
    status: String,
    history: Vec<String>,
    preventive_measures: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct NoiseInfo {
    level: String,
    sources: Vec<String>,
    distance_to_main_road: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PollutionInfo {
    air: String,
    dust: String,
    industrial: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct NeighborInfo {
    neighbor_type: String,
    demographics: String,
    density: String,
    commercial_activity: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AmenityInfo {
    distances: HashMap<String, String>,
    nearby_facilities: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PetPolicy {
    allowed: String,
    restrictions: Vec<String>,
    deposit: Decimal,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VisitorRegistration {
    required: bool,
    process: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct VisitorPolicy {
    overnight_stays: bool,
    max_duration: String,
    visitor_parking: bool,
    registration: VisitorRegistration,
    restrictions: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct BusinessUsePolicy {
    home_office: bool,
    business_visitors: bool,
    restrictions: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ModificationRules {
    painting: String,
    nailing: String,
    structural_changes: String,
    appliance_installation: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct LandlordRules {
    pet_policy: PetPolicy,
    visitor_policy: VisitorPolicy,
    business_use: BusinessUsePolicy,
    modifications: ModificationRules,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RentDetails {
    amount: Decimal,
    currency: String,
    payment_schedule: String,
    payment_methods: Vec<String>,
    last_increment: RentIncrement,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RentIncrement {
    date: String,
    percentage: f64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ServiceCharge {
    amount: Decimal,
    frequency: String,
    covers: Vec<String>,
    exclusions: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AgencyFee {
    percentage: f64,
    amount: Decimal,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CautionDeposit {
    amount: Decimal,
    refundable: bool,
    refund_terms: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AdditionalFees {
    agreement_fee: Decimal,
    agency_fee: AgencyFee,
    caution_deposit: CautionDeposit,
    legal_fee: Decimal,
    infrastructure_fee: Decimal,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UtilityBills {
    electricity: UtilityBill,
    water: UtilityBill,
    waste: WasteBill,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UtilityBill {
    average_monthly: Decimal,
    payment_structure: String,
    meter_number: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct WasteBill {
    monthly_fee: Decimal,
    included_in_service_charge: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RentHistory {
    rent_increases: Vec<HistoricalRentIncrease>,
    service_charge_history: Vec<HistoricalServiceCharge>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct HistoricalRentIncrease {
    date: String,
    previous_amount: Decimal,
    new_amount: Decimal,
    percentage: f64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct HistoricalServiceCharge {
    year: String,
    amount: Decimal,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Financials {
    rent: RentDetails,
    service_charge: ServiceCharge,
    additional_fees: AdditionalFees,
    utilities: UtilityBills,
    history: RentHistory,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyDocumentation {
    required_documents: Vec<String>,
    property_documents: PropertyDocuments,
    agreements: Agreements,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyDocuments {
    building_approval: DocumentStatus,
    survey_plan: DocumentStatus,
    deed_of_assignment: DocumentStatus,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DocumentStatus {
    available: bool,
    number: Option<String>,
    verified: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Agreements {
    tenancy_agreement: TenancyAgreement,
    house_rules: HouseRules,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TenancyAgreement {
    available: bool,
    duration: String,
    renewable: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct HouseRules {
    available: bool,
    version: String,
}

impl PropertyDocumentation {
    pub fn is_fully_verified(&self) -> bool {
        self.property_documents.building_approval.verified &&
            self.property_documents.survey_plan.verified &&
            self.property_documents.deed_of_assignment.verified
    }
}
#[derive(Debug, Serialize, Deserialize)]
pub struct Maintenance {
    schedule: MaintenanceSchedule,
    responsibilities: MaintenanceResponsibilities,
    contacts: MaintenanceContacts,
    history: MaintenanceHistory,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MaintenanceSchedule {
    cleaning: String,
    pest_control: String,
    general_inspection: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MaintenanceResponsibilities {
    tenant: Vec<String>,
    landlord: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MaintenanceContacts {
    emergency: String,
    general_maintenance: String,
    estate_facility: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MaintenanceRepair {
    date: String,
    repair_type: String,
    description: String,
}

// Main PropertyListing struct that ties everything together
#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyListing {
    listing_id: String,
    version: String,
    timestamp: PropertyTimestamp,
    blockchain: BlockchainInfo,
    media: PropertyMedia,
    basic_info: BasicInfo,
    detailed_info: DetailedInfo,
    metadata: PropertyMetadata,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PropertyTimestamp {
    created: DateTime<Utc>,
    last_modified: DateTime<Utc>,
    expires_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DetailedInfo {
    utilities: Utilities,
    property_details: PropertyDetails,
    compound: Compound,
    security: Security,
    environment: Environment,
    landlord_details: LandlordDetails,
    financials: Financials,
    documentation: PropertyDocumentation,
    maintenance: Maintenance,
}

impl PropertyListing {
    pub fn new(data: serde_json::Value) -> Result<Self, serde_json::Error> {
        serde_json::from_value(data)
    }

    pub fn is_expired(&self) -> bool {
        Utc::now() > self.timestamp.expires_at
    }

    pub fn calculate_total_cost(&self) -> Decimal {
        self.detailed_info.financials.rent.amount +
            self.detailed_info.financials.service_charge.amount +
            self.detailed_info.financials.additional_fees.legal_fee +
            self.detailed_info.financials.additional_fees.agreement_fee +
            self.detailed_info.financials.additional_fees.agency_fee.amount
    }
}
