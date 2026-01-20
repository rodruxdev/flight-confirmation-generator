export enum PassengerType {
  ADULT = "ADULT",
  CHILD = "CHILD",
  BABY = "BABY",
  PET = "PET",
}

export enum Airlines {
  GOL = "GOL",
  LATAM = "Latam",
  AZUL = "Azul",
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
  nextDayArrival?: boolean;
}

export interface AirlineInfo {
  name: string;
  logoUrl?: string;
  contactPhone: string;
  baseCheckInUrl?: string;
  checkInUrl?: string;
}

export type Language = "pt" | "es" | "en";

export interface ConfirmationData {
  locator: string;
  passengers: Passenger[];
  baggage: BaggageConfig;
  flights: FlightLeg[];
  returnFlights?: FlightLeg[];
  airline: AirlineInfo;
  language: Language;
}
