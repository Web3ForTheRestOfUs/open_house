// types.ts
export type Status = 'good' | 'medium' | 'bad';

export interface PropertyOverview {
  houseType: string;
  buildingType: string;
  floorLevel: string;
  houseAge: string;
  homeSize: string;
  kitchenSize: string;
  bathroomSize: string;
  balcony: string;
  compound: string;
}

export interface Utilities {
  lightSituation: { status: Status; value: string };
  meterSituation: string;
  waterSituation: { status: Status; value: string };
  internetFiber: string;
  internetTelcos: { status: Status; value: string };
  generator: string;
}

export interface Location {
  location: string;
  nearestBusStop: string;
  mainRoadAccess: string;
  accessibility: string;
  parking: string;
}

export interface Environment {
  security: string;
  floodingRisk: { status: Status; value: string };
  noiseLevel: { status: Status; value: string };
  neighborDemographics: string;
  landlordWahala: { status: Status; value: string };
}

export interface Maintenance {
  needRepair: { status: Status; value: string };
  propertyStatus: string;
  lastRenovation: string;
}

export interface FinancialDetails {
  yearlyRent: string;
  serviceCharge: string;
  paymentTerms: string;
  cautionDeposit: string;
}

export interface PropertyData {
  title: string;
  price: string;
  overview: PropertyOverview;
  utilities: Utilities;
  location: Location;
  environment: Environment;
  maintenance: Maintenance;
  financialDetails: FinancialDetails;
  amenities: string[];
  tenantComments: string;
}