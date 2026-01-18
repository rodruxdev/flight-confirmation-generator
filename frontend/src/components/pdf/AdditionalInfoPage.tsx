import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { translations } from "./TranslationConstants";
import { styles } from "./PdfStyles";
import type { Language, ConfirmationData } from "../../types";

interface AdditionalInfoPageProps {
  locale: Language;
  data: ConfirmationData;
}

const AdditionalInfoPage: React.FC<AdditionalInfoPageProps> = ({
  locale,
  data,
}) => {
  const t = translations[locale] || translations.pt;
  const info = t.additionalPage;

  if (!info) return null;

  const renderTextWithHighlight = (
    text: string,
    highlight?: string,
    style: any = styles.additionalItemText
  ) => {
    if (!highlight || !text.includes(highlight)) {
      return <Text style={style}>{text}</Text>;
    }
    const parts = text.split(highlight);
    return (
      <Text style={style}>
        {parts[0]}
        <Text style={styles.additionalBoldText}>{highlight}</Text>
        {parts.slice(1).join(highlight)}
      </Text>
    );
  };

  return (
    <Page size="A4" style={styles.page}>
      <Text style={styles.additionalPageTitle}>
        {info.title}
      </Text>

      {info.sections.map((section: any, idx: number) => (
        <View key={idx} style={styles.additionalSectionWrapper} wrap={false}>
          <Text style={styles.additionalSectionTitle}>{section.title}</Text>
          
          {/* Airline Contact Special Case */}
          {section.title.includes("6)") && (
             <View style={styles.additionalAirlineContact}>
               <Text style={styles.additionalItemText}>
                 SAC {data.airline.name.toUpperCase()} BRASIL: {data.airline.contactPhone}
               </Text>
             </View>
          )}

          {section.items &&
            section.items.map((item: any, iIdx: number) => (
              <View key={iIdx} style={styles.additionalItemWrapper}>
                <View style={styles.additionalItemRow}>
                  <Text style={[styles.additionalBullet, styles.additionalItemText]}>•</Text>
                  <View style={styles.additionalContentWrapper}>
                    {renderTextWithHighlight(item.text, item.highlight, styles.additionalItemText)}
                  </View>
                </View>

                {item.subItems &&
                  item.subItems.map((sub: any, sIdx: number) => (
                    <View key={sIdx} style={styles.additionalSubItemRow}>
                      <Text style={[styles.additionalBullet, styles.additionalSubItemText]}>-</Text>
                      <View style={styles.additionalContentWrapper}>
                         {renderTextWithHighlight(sub.text, sub.highlight, styles.additionalSubItemText)}
                      </View>
                    </View>
                  ))}
              </View>
            ))}
        </View>
      ))}
    </Page>
  );
};

export default AdditionalInfoPage;
