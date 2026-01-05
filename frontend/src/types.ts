export const enum PassengerType {
  ADULT = "ADULT",
  CHILD = "CHILD",
  PET = "PET",
}

export interface Passenger {
  name: string;
  type: PassengerType;
}

export type BaggageConfig = {
  personalItem: number;
  carryOn: number;
  checked: number;
};

export interface FlightLeg {
  flightNumber: string;
  date: string;
  origin: {
    code: string;
    city: string;
    time: string;
  };
  destination: {
    code: string;
    city: string;
    time: string;
  };
  duration: string;
  nextDayArrival?: boolean;
}

export interface AirlineInfo {
  name: string;
  logoUrl?: string;
  contactPhone: string;
  checkInUrl?: string;
}

export interface ConfirmationData {
  locator: string;
  passengers: Passenger[];
  baggage: BaggageConfig;
  flights: FlightLeg[];
  airline: AirlineInfo;
}
