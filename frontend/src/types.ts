export interface Passenger {
  id: string;
  name: string;
  document: string; // e.g., CPF or Passport
}

export type BaggageConfig = {
    personalItem: number; // 0 or 1 usually
    carryOn: number;
    checked: number;
}

export interface FlightLeg {
  id: string;
  flightNumber: string;
  date: string; // YYYY-MM-DD
  origin: {
    code: string; // e.g. RBR
    city: string; // e.g. Rio Branco
    time: string; // HH:mm
  };
  destination: {
    code: string; // e.g. MAO
    city: string; // e.g. Manaus
    time: string; // HH:mm
  };
  duration: string; // e.g. 3h0m
  nextDayArrival?: boolean;
}

export interface AgencyInfo {
  name: string;
  logoUrl?: string; // Data URL or external URL
  contactPhone: string;
  website?: string;
}

export interface ConfirmationData {
  locator: string; // e.g. UKIQHA
  airline: string; // e.g. GOL
  passengers: Passenger[];
  baggage: BaggageConfig;
  flights: FlightLeg[];
  agency: AgencyInfo;
  qrCodeText: string;
}
