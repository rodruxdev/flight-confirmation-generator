import React, { memo, useMemo } from "react";
import { Document, Page, Text, View, Image, Link } from "@react-pdf/renderer";
import type { ConfirmationData, Language } from "../../types";
import { styles } from "./PdfStyles";
import { translations } from "./TranslationConstants";
import {
  UserIcon,
  ChildIcon,
  PawIcon,
  BagIcon,
  BackpackIcon,
  UserCheckIcon,
  BabyCarriageIcon,
  SuitcaseRollingIcon,
} from "./PdfIcons";
import AdditionalInfoPage from "./AdditionalInfoPage";
import FlightSection from "./FlightSection";

interface FlightConfirmationPdfProps {
  data: ConfirmationData;
  qrCodeImageString?: string;
  locale?: Language;
}

const FlightConfirmationPdf = memo<FlightConfirmationPdfProps>(
  ({ data, qrCodeImageString = "", locale = "pt" }) => {
    const t = translations[locale] || translations.pt;

    const flightGroups = useMemo(() => {
      if (data.returnFlights && data.returnFlights.length > 0) {
        return { outbound: data.flights, inbound: data.returnFlights };
      }
      return { outbound: data.flights, inbound: [] };
    }, [data.flights, data.returnFlights]);



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
                <Text style={styles.airlineNameFallback}>
                  {data.airline.name}
                </Text>
              )}
            </View>
          </View>

          <Text style={styles.sectionTitle}>{t.passengerInfo}</Text>

          {/* Passengers */}
          <View style={styles.subHeader}>
            <UserIcon size={14} color="#333" style={styles.iconMarginRight} />
            <Text style={styles.textBold12Upper}>
              {t.travelers}:
            </Text>
            <View style={styles.numberContainer}>
              <Text style={styles.textBold12}>
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
          <FlightSection
            flights={flightGroups.outbound}
            title={t.outboundFlight}
            startLabel={t.start}
          />
          <FlightSection
            flights={flightGroups.inbound}
            title={t.returnFlight}
            startLabel={t.start}
          />

          {/* QR */}
          {data.airline.checkInUrl?.trim() && qrCodeImageString ? (
            <View style={styles.footer}>
              <Text style={styles.findFlightTitle}>
                {t.findFlight}
              </Text>
              <Text style={styles.scanQrText}>{t.scanQr}</Text>

              <View style={styles.qrSection}>
                <Link src={data.airline.checkInUrl}>
                  <Image style={styles.qrCode} src={qrCodeImageString} />
                </Link>
                <Text style={styles.clickOrScanText}>
                  {t.clickOrScan}
                </Text>
              </View>
            </View>
          ) : null}
        </Page>
        <AdditionalInfoPage locale={locale} data={data} />
      </Document>
    );
  },
);

FlightConfirmationPdf.displayName = "FlightConfirmationPdf";

export default FlightConfirmationPdf;
