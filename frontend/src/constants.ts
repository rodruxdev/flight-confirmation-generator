import type { AirlineInfo, Airlines } from "./types";
import { PassengerType } from "./types";

export const AirlinesInfo: Record<Airlines, AirlineInfo> = {
  GOL: {
    name: "GOL",
    logoUrl: "/gol.png",
    contactPhone: "0800-704-0465",
    baseCheckInUrl: "https://b2c.voegol.com.br/check-in/",
    checkInUrl: "https://b2c.voegol.com.br/check-in/",
  },
  Azul: {
    name: "Azul",
    logoUrl: "/azul.png",
    contactPhone: "4003-2199",
    baseCheckInUrl: "https://www.voeazul.com.br/br/pt/home/azulwebcheckin/",
    checkInUrl: "https://www.voeazul.com.br/br/pt/home/azulwebcheckin/",
  },
  Latam: {
    name: "Latam",
    logoUrl: "/latam.png",
    contactPhone: "0800-761-0062",
    baseCheckInUrl: "https://www.latamairlines.com/check-in/",
    checkInUrl: "https://www.latamairlines.com/check-in/",
  },
};

export const PassengerTypeLabels: Record<PassengerType, string> = {
  [PassengerType.ADULT]: "Adulto",
  [PassengerType.CHILD]: "Criança",
  [PassengerType.BABY]: "Bebe",
  [PassengerType.PET]: "Pet",
};
