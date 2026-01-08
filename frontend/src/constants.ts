import type { AirlineInfo, Airlines } from "./types";
import { PassengerType } from "./types";

export const AirlinesInfo: Record<Airlines, AirlineInfo> = {
  GOL: {
    name: "GOL",
    logoUrl: "/gol.png",
    contactPhone: "0800-704-0465",
  },
  Azul: {
    name: "Azul",
    logoUrl: "/azul.png",
    contactPhone: "4003-2199",
  },
  Latam: {
    name: "Latam",
    logoUrl: "/latam.png",
    contactPhone: "0800-761-0062",
  },
};

export const PassengerTypeLabels: Record<PassengerType, string> = {
  [PassengerType.ADULT]: "Adulto",
  [PassengerType.CHILD]: "Criança",
  [PassengerType.PET]: "Pet",
};
