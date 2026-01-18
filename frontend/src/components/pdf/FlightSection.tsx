import React from "react";
import { View, Text } from "@react-pdf/renderer";
import dayjs from "dayjs";
import { styles } from "./PdfStyles";
import { AirplaneTiltFillIcon, PlaneIcon } from "./PdfIcons";
import type { FlightLeg } from "../../types";

interface FlightSectionProps {
  flights: FlightLeg[];
  title: string;
  startLabel: string;
}

const FlightSection: React.FC<FlightSectionProps> = ({ flights, title, startLabel }) => {
  if (!flights.length) return null;

  return (
    <View style={styles.flightSectionWrapper}>
      {/* Title Row */}
      <View style={styles.flightSectionTitle}>
        <AirplaneTiltFillIcon
          size={14}
          color="#f05a22"
          style={styles.iconMarginRight}
        />
        <Text style={styles.flightTitleText}>{title}</Text>
        <Text style={styles.flightStartLabel}>
          {startLabel}:
        </Text>
      </View>

      {/* Flight Rows */}
      {flights.map((leg, i) => {
        const isNextDay =
          Number(leg.destination.time.replace(":", "")) <
          Number(leg.origin.time.replace(":", ""));
        const destinationDate = isNextDay
          ? dayjs(leg.date).add(1, "day").format("DD/MM/YYYY")
          : dayjs(leg.date).format("DD/MM/YYYY");

        return (
          <View key={i} style={styles.flightLeg}>
            <View style={styles.flightInfoRow}>
              <View style={styles.flightRowCenter}>
                <Text style={styles.flightNumber}>{leg.flightNumber}</Text>
                <Text style={styles.flightDate}>
                  {dayjs(leg.date).format("DD/MM/YYYY")}
                </Text>
                <Text style={styles.timeTag}>{leg.origin.time}</Text>

                <View style={styles.originContainer}>
                  <Text style={styles.cityName}>{leg.origin.city}</Text>
                  <Text style={styles.airportCodeOrigin}>{leg.origin.code}</Text>
                </View>

                <View style={styles.durationContainer}>
                  <Text style={styles.durationDotsLeft}>••••</Text>
                  <PlaneIcon
                    size={12}
                    color="#f05a22"
                    style={styles.planeIconWrapper}
                  />
                  <Text style={styles.durationTime}>{leg.duration}</Text>
                  <Text style={styles.durationDotsRight}>••••</Text>
                </View>

                <View style={styles.destinationContainer}>
                  <Text style={styles.airportCodeDestination}>
                    {leg.destination.code}
                  </Text>
                  <Text style={styles.cityName}>{leg.destination.city}</Text>
                </View>
              </View>

              <View style={styles.flightRowCenter}>
                <Text style={styles.timeTag}>{leg.destination.time}</Text>
                <Text style={styles.flightDate}>{destinationDate}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default FlightSection;
