// Base interfaces
interface Coordinates {
  latitude: string;
  longitude: string;
  accuracy?: string;
}

interface Dimensions {
  width: number;
  height: number;
}

// Media related classes
class MediaMetadata {
  dimensions: Dimensions;
  fileSize: number;
  fileType: string;
  coordinates?: Coordinates;

  constructor(data: Partial<MediaMetadata>) {
    Object.assign(this, data);
  }
}

class MediaItem {
  id: string;
  category: string;
  type: string;
  ipfsHash: string;
  thumbnailHash: string;
  description: string;
  metadata: MediaMetadata;
  order: number;
  verificationStatus: "pending" | "verified";
  tags: string[];

  constructor(data: Partial<MediaItem>) {
    Object.assign(this, data);
    this.metadata = new MediaMetadata(data.metadata || {});
  }
}

class PropertyMedia {
  images: MediaItem[];
  videos: MediaItem[];
  virtualTour?: {
    enabled: boolean;
    provider: string;
    ipfsHash: string;
    thumbnailHash: string;
    description: string;
    metadata: {
      tourId: string;
      createdAt: Date;
      lastAccessed: Date;
      totalViews: number;
    };
  };
  floorPlan?: {
    enabled: boolean;
    ipfsHash: string;
    thumbnailHash: string;
    description: string;
    metadata: MediaMetadata;
  };

  constructor(data: Partial<PropertyMedia>) {
    Object.assign(this, data);
    this.images = (data.images || []).map((img) => new MediaItem(img));
    this.videos = (data.videos || []).map((vid) => new MediaItem(vid));
  }
}

// Location related classes
class Location {
  nearestBusStop: string;
  mainRoadAccess: string;
  estate: string;
  street: string;
  area: string;
  lga: string;
  state: string;
  coordinates: Coordinates;
  landmarks: string[];

  constructor(data: Partial<Location>) {
    Object.assign(this, data);
  }
}

// Utilities related classes
class PowerUtility {
  lightSituation: string;
  meterType: string;
  meterNumber: string;
  averageMonthlyBill: string;
  lastBillAmount: string;
  lastBillDate: string;
  electricityBand: string;
  powerCompany: string;
  loadLimit: string;
  powerRating: string;

  constructor(data: Partial<PowerUtility>) {
    Object.assign(this, data);
  }

  getMonthlyAverage(): number {
    return parseFloat(this.averageMonthlyBill);
  }
}

class WaterUtility {
  situation: string;
  source: string[];
  storage: {
    groundTank: string;
    overheadTank: string;
  };
  waterPressure: string;
  pumpingSchedule: string;
  treatmentSystem: string;
  backup: string;

  constructor(data: Partial<WaterUtility>) {
    Object.assign(this, data);
  }
}

// Financial related classes
class Rent {
  amount: string;
  currency: string;
  paymentSchedule: string;
  paymentMethods: string[];
  lastIncrement: {
    date: string;
    percentage: number;
  };

  constructor(data: Partial<Rent>) {
    Object.assign(this, data);
  }

  getMonthlyAmount(): number {
    return parseFloat(this.amount) / 12;
  }
}

class ServiceCharge {
  amount: string;
  frequency: string;
  covers: string[];
  exclusions: string[];

  constructor(data: Partial<ServiceCharge>) {
    Object.assign(this, data);
  }

  getMonthlyAmount(): number {
    return parseFloat(this.amount) / (this.frequency === "Annual" ? 12 : 1);
  }
}

// Room related classes
class Room {
  size: string;
  features: string[];
  windows: number;
  flooring: string;
  orientation: string;

  constructor(data: Partial<Room>) {
    Object.assign(this, data);
  }
}

class PropertyRooms {
  livingRoom: Room;
  bedroom: Room;
  kitchen: Room;
  bathroom: Room;
  toilet: {
    separate: boolean;
    size: string;
    features: string[];
  };
  balcony: {
    type: string;
    size: string;
    features: string[];
    orientation: string;
  };

  constructor(data: Partial<PropertyRooms>) {
    this.livingRoom = new Room(data.livingRoom || {});
    this.bedroom = new Room(data.bedroom || {});
    this.kitchen = new Room(data.kitchen || {});
    this.bathroom = new Room(data.bathroom || {});
    Object.assign(this, { toilet: data.toilet, balcony: data.balcony });
  }
}

// Main Property Listing class that composes all other classes
class PropertyListing {
  readonly listingId: string;
  readonly version: string;
  readonly timestamp: {
    created: Date;
    lastModified: Date;
    expiresAt: Date;
  };
  readonly media: PropertyMedia;
  readonly location: Location;
  readonly utilities: {
    power: PowerUtility;
    water: WaterUtility;
  };
  readonly rooms: PropertyRooms;
  readonly rent: Rent;
  readonly serviceCharge: ServiceCharge;
  readonly security: Security;
  readonly environment: Environment;
  readonly landlordRules: LandlordRules;
  readonly maintenance: MaintenanceSchedule;
  readonly documentation: PropertyDocumentation;

  constructor(data: any) {
    this.listingId = data.listingId;
    this.version = data.version;
    this.timestamp = {
      created: new Date(data.timestamp.created),
      lastModified: new Date(data.timestamp.lastModified),
      expiresAt: new Date(data.timestamp.expiresAt),
    };
    this.media = new PropertyMedia(data.media);
    this.location = new Location(data.basicInfo.location);
    this.utilities = {
      power: new PowerUtility(data.detailedInfo.utilities.power),
      water: new WaterUtility(data.detailedInfo.utilities.water),
    };
    this.rooms = new PropertyRooms(data.detailedInfo.propertyDetails.rooms);
    this.rent = new Rent(data.detailedInfo.financials.rent);
    this.serviceCharge = new ServiceCharge(
      data.detailedInfo.financials.serviceCharge
    );
    this.security = new Security(data.detailedInfo.security);
    this.environment = new Environment(data.detailedInfo.environment);
    this.landlordRules = new LandlordRules(
      data.detailedInfo.landlordDetails.rules
    );
    this.maintenance = new MaintenanceSchedule(data.detailedInfo.maintenance);
    this.documentation = new PropertyDocumentation(
      data.detailedInfo.documentation
    );
  }

  getTotalMonthlyExpenses(): number {
    return (
      this.rent.getMonthlyAmount() +
      this.serviceCharge.getMonthlyAmount() +
      this.utilities.power.getMonthlyAverage()
    );
  }

  isExpired(): boolean {
    return new Date() > this.timestamp.expiresAt;
  }
}

// Previously defined classes remain the same...

class Security {
  type: string;
  personnel: {
    gateGuard: boolean;
    estateSecuirty: boolean;
    workingHours: string;
    numberOfGuards: number;
  };
  features: string[];
  access: {
    gatePass: boolean;
    intercom: boolean;
    visitorParking: boolean;
    gateClosingTime: string;
  };
  emergency: {
    exitRoutes: number;
    fireExtinguisher: boolean;
    firstAidKit: boolean;
    emergencyContacts: string[];
  };

  constructor(data: Partial<Security>) {
    Object.assign(this, data);
  }

  hasFeature(feature: string): boolean {
    return this.features.includes(feature);
  }
}

class Environment {
  flooding: {
    status: string;
    history: string[];
    preventiveMeasures: string[];
  };
  noise: {
    level: string;
    sources: string[];
    distanceToMainRoad: string;
  };
  pollution: {
    air: string;
    dust: string;
    industrial: string;
  };
  neighbors: {
    type: string;
    demographics: string;
    density: string;
    commercialActivity: string;
  };
  amenities: {
    distances: Record<string, string>;
    nearbyFacilities: string[];
  };

  constructor(data: Partial<Environment>) {
    Object.assign(this, data);
  }

  getAmenitiesWithinRadius(radius: number): string[] {
    return Object.entries(this.amenities.distances)
      .filter(
        ([_, distance]) => parseFloat(distance.replace("km", "")) <= radius
      )
      .map(([amenity]) => amenity);
  }
}

class LandlordRules {
  petPolicy: {
    allowed: string;
    restrictions: string[];
    deposit: string;
  };
  visitorPolicy: {
    overnightStays: boolean;
    maxDuration: string;
    visitorParking: boolean;
    registration: {
      required: boolean;
      process: string;
    };
    restrictions: string[];
  };
  businessUse: {
    homeOffice: boolean;
    businessVisitors: boolean;
    restrictions: string[];
  };
  modifications: {
    painting: string;
    nailing: string;
    structuralChanges: string;
    applianceInstallation: string;
  };

  constructor(data: Partial<LandlordRules>) {
    Object.assign(this, data);
  }

  isPetAllowed(petType: string): boolean {
    return (
      this.petPolicy.allowed !== "No Pets" &&
      !this.petPolicy.restrictions.some((r) =>
        r.toLowerCase().includes(petType.toLowerCase())
      )
    );
  }
}

class MaintenanceSchedule {
  schedule: {
    cleaning: string;
    pestControl: string;
    generalInspection: string;
  };
  responsibilities: {
    tenant: string[];
    landlord: string[];
  };
  contacts: {
    emergency: string;
    generalMaintenance: string;
    estateFacility: string;
  };
  history: {
    lastMajorRepairs: Array<{
      date: string;
      type: string;
      description: string;
    }>;
    upcomingMaintenance: Array<{
      scheduled: string;
      type: string;
      description: string;
    }>;
  };

  constructor(data: Partial<MaintenanceSchedule>) {
    Object.assign(this, data);
  }

  getUpcomingMaintenance(): Array<{ scheduled: string; type: string }> {
    return this.history.upcomingMaintenance.map(({ scheduled, type }) => ({
      scheduled,
      type,
    }));
  }
}

class PropertyDocumentation {
  required: string[];
  propertyDocuments: {
    buildingApproval: {
      available: boolean;
      number: string;
      verified: boolean;
    };
    surveyPlan: {
      available: boolean;
      verified: boolean;
    };
    deedOfAssignment: {
      available: boolean;
      verified: boolean;
    };
  };
  agreements: {
    tenancyAgreement: {
      available: boolean;
      duration: string;
      renewable: boolean;
    };
    houseRules: {
      available: boolean;
      version: string;
    };
  };

  constructor(data: Partial<PropertyDocumentation>) {
    Object.assign(this, data);
  }

  hasRequiredDocuments(): boolean {
    return (
      this.propertyDocuments.buildingApproval.verified &&
      this.propertyDocuments.surveyPlan.verified &&
      this.propertyDocuments.deedOfAssignment.verified
    );
  }
}

// Helper types for type safety
type PropertyType = "Mini Flat" | "Apartment" | "Duplex";
type VerificationStatus = "pending" | "verified";
type ListingStatus = "active" | "inactive";
type PropertyStatus = "vacant" | "occupied";

export {
  PropertyListing,
  Security,
  Environment,
  LandlordRules,
  MaintenanceSchedule,
  PropertyDocumentation,
  PropertyType,
  VerificationStatus,
  ListingStatus,
  PropertyStatus,
};
