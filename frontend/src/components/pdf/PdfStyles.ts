import { StyleSheet, Font } from "@react-pdf/renderer";

// Register Open Sans font family with all variants
Font.register({
  family: "Open Sans",
  fonts: [
    { src: "/fonts/OpenSans-Regular.ttf" }, // font-style: normal, font-weight: normal
    { src: "/fonts/OpenSans-Bold.ttf", fontWeight: "bold" },
    { src: "/fonts/OpenSans-Italic.ttf", fontStyle: "italic" },
    { src: "/fonts/OpenSans-BoldItalic.ttf", fontStyle: "italic", fontWeight: "bold" },
  ],
});

export const styles = StyleSheet.create({
  // Base page
  page: {
    padding: 30,
    fontFamily: "Open Sans",
    fontSize: 10,
    color: "#333",
    backgroundColor: "#fff",
  },

  // Header section
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    height: 60,
  },
  agencySection: {
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  agencyLogo: {
    width: 120,
    height: 90,
    objectFit: "cover",
  },
  locatorWrapper: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  locatorLabel: {
    fontSize: 10,
    color: "#333",
    marginBottom: 2,
    fontWeight: "bold",
  },
  locatorSection: {
    width: "100%",
    backgroundColor: "#000",
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
  },
  locatorValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },
  airlineSection: {
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  airlineLogo: {
    width: 120,
    height: 90,
    objectFit: "cover",
  },
  airlineNameFallback: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f05a22",
  },

  // Section titles
  sectionTitle: {
    fontSize: 18,
    fontWeight: "normal",
    marginBottom: 10,
    marginTop: 10,
    color: "#000",
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  // Number badges
  numberContainer: {
    marginLeft: 2,
    paddingVertical: 1,
    paddingHorizontal: 2,
    backgroundColor: "#f5f5f5",
    borderRadius: 2,
  },
  textBold12: {
    fontSize: 12,
    fontWeight: "bold",
  },
  textBold12Upper: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // Passenger section
  passengerRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 5,
    marginBottom: 2,
    borderRadius: 3,
  },
  passengerName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    textTransform: "uppercase",
  },
  passengerTypeIcon: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 20,
  },

  // Baggage Cards
  baggageSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 10,
    gap: 15,
  },
  baggageCard: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
    alignItems: "center",
    marginRight: 10,
    height: 110,
    justifyContent: "center",
  },
  baggageStatusPillIncluded: {
    backgroundColor: "#e6fffa",
    color: "#38b2ac",
    fontSize: 8,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginBottom: 5,
  },
  baggageStatusPillExcluded: {
    backgroundColor: "#fff5f5",
    color: "#e53e3e",
    fontSize: 8,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginBottom: 5,
  },
  baggageQuantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  baggageTitle: {
    fontSize: 9,
    fontWeight: "bold",
    marginTop: 5,
    textTransform: "uppercase",
    color: "#555",
  },
  baggageNumberContainer: {
    marginLeft: 2,
    paddingVertical: 1,
    paddingHorizontal: 2,
    backgroundColor: "#d5d5d5",
    borderRadius: 2,
    marginTop: 5,
  },
  baggageNumber: {
    fontSize: 9,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#555",
  },
  baggageDesc: {
    fontSize: 8,
    color: "#888",
    textAlign: "center",
    marginTop: 2,
  },

  // Flight Section
  flightSectionWrapper: {
    marginBottom: 10,
  },
  flightSectionTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  flightTitleText: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#000",
  },
  flightStartLabel: {
    fontSize: 10,
    color: "#666",
    marginLeft: 5,
  },
  flightLeg: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#eee",
  },
  flightInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  flightRowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  flightNumber: {
    fontSize: 9,
    color: "#666",
    width: 50,
  },
  flightDate: {
    fontSize: 9,
    color: "#666",
  },
  timeTag: {
    backgroundColor: "#cc3300",
    color: "#fff",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 10,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  originContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 80,
  },
  destinationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 80,
  },
  cityName: {
    fontSize: 9,
    color: "#333",
    maxWidth: 50,
  },
  airportCode: {
    fontSize: 16,
    fontWeight: "bold",
  },
  airportCodeOrigin: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  airportCodeDestination: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  durationDots: {
    fontSize: 10,
    color: "#bbb",
  },
  durationDotsLeft: {
    fontSize: 10,
    color: "#bbb",
    marginRight: 3,
  },
  durationDotsRight: {
    fontSize: 10,
    color: "#bbb",
    marginLeft: 3,
  },
  durationTime: {
    fontSize: 9,
    fontWeight: "bold",
  },
  planeIconWrapper: {
    marginHorizontal: 2,
    transform: "rotate(90deg)",
  },

  // Footer & QR
  footer: {
    marginTop: 30,
    alignItems: "center",
  },
  findFlightTitle: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#000",
    marginBottom: 5,
  },
  scanQrText: {
    fontSize: 10,
    color: "#666",
  },
  qrSection: {
    alignItems: "center",
    marginTop: 10,
  },
  qrCode: {
    width: 100,
    height: 100,
    marginBottom: 5,
    objectFit: "cover",
  },
  clickOrScanText: {
    fontSize: 8,
    marginTop: 5,
  },

  // Additional Info Page Styles
  additionalPageTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  additionalSectionWrapper: {
    marginBottom: 6,
  },
  additionalSectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
    color: "#333",
  },
  additionalAirlineContact: {
    marginTop: 2,
  },
  additionalItemWrapper: {
    marginBottom: 2,
  },
  additionalItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  additionalSubItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  additionalBullet: {
    width: 10,
    fontSize: 8,
  },
  additionalContentWrapper: {
    flex: 1,
  },
  additionalItemText: {
    fontSize: 8,
    color: "#444",
    marginBottom: 2,
    lineHeight: 1.4,
  },
  additionalSubItemText: {
    fontSize: 8,
    color: "#555",
    marginLeft: 10,
    marginBottom: 2,
    lineHeight: 1.4,
  },
  additionalBoldText: {
    fontWeight: "bold",
    color: "#000",
  },

  // Common icon styles
  iconMarginRight: {
    marginRight: 5,
  },
});
