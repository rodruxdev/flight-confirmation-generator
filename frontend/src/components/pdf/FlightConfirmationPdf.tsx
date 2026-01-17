import React, { memo, useMemo } from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import type { ConfirmationData, FlightLeg, Language } from "../../types";
import { styles } from "./PdfStyles";
import dayjs from "dayjs";
import { translations } from "./TranslationConstants";
import {
  UserIcon,
  ChildIcon,
  PawIcon,
  BagIcon,
  PlaneIcon,
  BackpackIcon,
  UserCheckIcon,
  BabyCarriageIcon,
  SuitcaseRollingIcon,
  AirplaneTiltFillIcon,
} from "./PdfIcons";

interface FlightConfirmationPdfProps {
  data: ConfirmationData;
  locale?: Language;
}

// TODO divide this in different components
// TODO fix font and styles related to fonts
// TODO add QR logic
// TODO add new text and style for new text
const FlightConfirmationPdf = memo<FlightConfirmationPdfProps>(
  ({ data, locale = "pt" }) => {
    const t = translations[locale] || translations.pt;

    const flightGroups = useMemo(() => {
      if (data.returnFlights && data.returnFlights.length > 0) {
        return { outbound: data.flights, inbound: data.returnFlights };
      }
      return { outbound: data.flights, inbound: [] };
    }, [data.flights, data.returnFlights]);

    const renderFlightSection = (flights: FlightLeg[], title: string) => {
      if (!flights.length) return null;
      return (
        <View style={{ marginBottom: 10 }}>
          {/* Title Row */}
          <View style={styles.flightSectionTitle}>
            <AirplaneTiltFillIcon
              size={14}
              color="#f05a22"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.flightTitleText}>{title}</Text>
            <Text style={{ fontSize: 10, color: "#666", marginLeft: 5 }}>
              {t.start}:
            </Text>
          </View>

          {/* Flight Rows */}
          {flights.map((leg, i) => (
            <View key={i} style={styles.flightLeg}>
              <View style={styles.flightInfoRow}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.flightNumber}>{leg.flightNumber}</Text>
                  <Text style={styles.flightDate}>
                    {dayjs(leg.date).format("DD/MM/YYYY")}
                  </Text>
                  <Text style={styles.timeTag}>{leg.origin.time}</Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      width: 80,
                    }}
                  >
                    <Text style={{ fontSize: 9, color: "#333", maxWidth: 50 }}>
                      {leg.origin.city}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginLeft: 5,
                      }}
                    >
                      {leg.origin.code}
                    </Text>
                  </View>

                  <View style={styles.durationContainer}>
                    <Text
                      style={{ fontSize: 10, color: "#bbb", marginRight: 3 }}
                    >
                      ••••
                    </Text>
                    <PlaneIcon
                      size={12}
                      color="#f05a22"
                      style={{
                        marginHorizontal: 2,
                        transform: "rotate(90deg)",
                      }}
                    />
                    <Text style={{ fontSize: 9, fontWeight: "bold" }}>
                      {leg.duration}
                    </Text>
                    <Text
                      style={{ fontSize: 10, color: "#bbb", marginLeft: 3 }}
                    >
                      ••••
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: 80,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginRight: 5,
                      }}
                    >
                      {leg.destination.code}
                    </Text>
                    <Text style={{ fontSize: 9, color: "#333", maxWidth: 50 }}>
                      {leg.destination.city}
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.timeTag}>{leg.destination.time}</Text>
                  <Text style={styles.flightDate}>
                    {dayjs(leg.date).format("DD/MM/YYYY")}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      );
    };

    return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            {/* Left: Agency Logo - Explicitly left aligned */}
            <View style={styles.agencySection}>
              <Image
                style={styles.agencyLogo}
                src="/viajando-com-sucesso.png"
              />
            </View>

            {/* Center: Locator */}
            <View style={styles.locatorWrapper}>
              <Text style={styles.locatorLabel}>{t.bookingReference}:</Text>
              <View style={styles.locatorSection}>
                <Text style={styles.locatorValue}>{data.locator}</Text>
              </View>
            </View>

            {/* Right: Airline Logo */}
            <View style={styles.airlineSection}>
              {data.airline.logoUrl ? (
                <Image style={styles.airlineLogo} src={data.airline.logoUrl} />
              ) : (
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#f05a22" }}
                >
                  {data.airline.name}
                </Text>
              )}
            </View>
          </View>

          <Text style={styles.sectionTitle}>{t.passengerInfo}</Text>

          {/* Passengers */}
          <View style={styles.subHeader}>
            <UserIcon size={14} color="#333" style={{ marginRight: 5 }} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {t.travelers}:
            </Text>
            <View style={styles.numberContainer}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {data.passengers.length}
              </Text>
            </View>
          </View>

          {data.passengers.map((p, i) => (
            <View key={i} style={styles.passengerRow}>
              <View style={styles.passengerTypeIcon}>
                {p.type === "PET" ? (
                  <PawIcon size={14} color="#333" />
                ) : p.type === "CHILD" ? (
                  <ChildIcon size={14} color="#333" />
                ) : p.type === "BABY" ? (
                  <BabyCarriageIcon size={14} color="#333" />
                ) : (
                  <UserCheckIcon size={14} color="#333" />
                )}
              </View>
              <Text style={styles.passengerName}>{p.name}</Text>
            </View>
          ))}

          {/* Baggage Cards */}
          <View style={styles.baggageSection}>
            <View style={styles.baggageCard}>
              {data.baggage.personalItem > 0 ? (
                <Text style={styles.baggageStatusPillIncluded}>
                  {t.itemsIncluded}
                </Text>
              ) : (
                <Text style={styles.baggageStatusPillExcluded}>
                  {t.itemsExcluded}
                </Text>
              )}
              <BackpackIcon
                size={24}
                color={data.baggage.personalItem > 0 ? "#2ecc71" : "#000"}
              />
              <View style={styles.baggageQuantityContainer}>
                <Text style={styles.baggageTitle}>{t.personalItem}:</Text>
                <View style={styles.baggageNumberContainer}>
                  <Text style={styles.baggageNumber}>
                    {data.baggage.personalItem}
                  </Text>
                </View>
              </View>
              <Text style={styles.baggageDesc}>{t.personalItemDesc}</Text>
            </View>

            <View style={styles.baggageCard}>
              {data.baggage.carryOn > 0 ? (
                <Text style={styles.baggageStatusPillIncluded}>
                  {t.itemsIncluded}
                </Text>
              ) : (
                <Text style={styles.baggageStatusPillExcluded}>
                  {t.itemsExcluded}
                </Text>
              )}
              <SuitcaseRollingIcon
                size={24}
                color={data.baggage.carryOn > 0 ? "#2ecc71" : "#000"}
              />
              <View style={styles.baggageQuantityContainer}>
                <Text style={styles.baggageTitle}>{t.carryOn}:</Text>
                <View style={styles.baggageNumberContainer}>
                  <Text style={styles.baggageNumber}>
                    {data.baggage.carryOn}
                  </Text>
                </View>
              </View>
              <Text style={styles.baggageDesc}>{t.carryOnDesc}</Text>
            </View>

            <View style={styles.baggageCard}>
              {data.baggage.checked > 0 ? (
                <Text style={styles.baggageStatusPillIncluded}>
                  {t.itemsIncluded}
                </Text>
              ) : (
                <Text style={styles.baggageStatusPillExcluded}>
                  {t.itemsExcluded}
                </Text>
              )}
              <BagIcon
                size={24}
                color={data.baggage.checked > 0 ? "#2ecc71" : "#000"}
              />
              <View style={styles.baggageQuantityContainer}>
                <Text style={styles.baggageTitle}>{t.checkedBaggage}:</Text>
                <View style={styles.baggageNumberContainer}>
                  <Text style={styles.baggageNumber}>
                    {data.baggage.checked}
                  </Text>
                </View>
              </View>
              <Text style={styles.baggageDesc}>{t.checkedBaggageDesc}</Text>
            </View>
          </View>

          {/* Flights */}
          {renderFlightSection(flightGroups.outbound, t.outboundFlight)}
          {renderFlightSection(flightGroups.inbound, t.returnFlight)}

          {/* QR */}
          <View style={styles.footer}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "normal",
                color: "#000",
                marginBottom: 5,
              }}
            >
              {t.findFlight}
            </Text>
            <Text style={{ fontSize: 10, color: "#666" }}>{t.scanQr}</Text>

            <View style={styles.qrSection}>
              {data.airline.checkInUrl?.startsWith("data:image") ||
              data.airline.checkInUrl?.startsWith("http") ? (
                <Image style={styles.qrCode} src={data.airline.checkInUrl} />
              ) : (
                // Placeholder QR
                <View
                  style={{
                    width: 100,
                    height: 100,
                    padding: 10,
                    backgroundColor: "blue",
                  }}
                >
                  <Image
                    style={{ width: 100, height: 100 }}
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
                  />
                </View>
              )}
              <Text style={{ fontSize: 8, marginTop: 5 }}>{t.clickOrScan}</Text>
            </View>
          </View>
        </Page>
        <Page size="A4" style={styles.page}>
          <View style={styles.footer}>
            <View style={{ alignSelf: "stretch", marginTop: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 10, color: "#555" }}>
                {t.importantInfo}
              </Text>
              <Text style={styles.legalText}>{t.legalText}</Text>

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#555",
                  marginTop: 10,
                }}
              >
                {t.boardingInstructions}
              </Text>
              {t.boardingList.map((item: string, idx: number) => (
                <Text
                  key={idx}
                  style={{ fontSize: 7, color: "#666", marginTop: 2 }}
                >
                  • {item}
                </Text>
              ))}

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#555",
                  marginTop: 10,
                }}
              >
                {t.contact}
              </Text>
              <Text style={{ fontSize: 8, color: "#666" }}>
                • {data.airline.contactPhone}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  }
);

FlightConfirmationPdf.displayName = "FlightConfirmationPdf";

export default FlightConfirmationPdf;
