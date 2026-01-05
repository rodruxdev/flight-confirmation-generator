
import React from 'react';
import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import type { ConfirmationData } from '../../types';
import { styles } from './PdfStyles';
import dayjs from 'dayjs';

interface FlightConfirmationPdfProps {
  data: ConfirmationData;
}

const FlightConfirmationPdf: React.FC<FlightConfirmationPdfProps> = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
            <View style={styles.agencySection}>
                 {data.agency.logoUrl ? (
                    <Image style={styles.agencyLogo} src={data.agency.logoUrl} />
                 ) : (
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{data.agency.name}</Text>
                 )}
            </View>
            
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.locatorLabel}>Localizador:</Text>
                <View style={styles.locatorSection}>
                    <Text style={styles.locatorValue}>{data.locator}</Text>
                </View>
            </View>

            <View>
                 {/* Placeholder for airline logo if needed, or just text */}
                 <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#f05a22' }}>{data.airline}</Text>
            </View>
        </View>

        <Text style={styles.sectionTitle}>Informações da sua passagem</Text>

        {/* Passengers */}
        <View style={styles.subHeader}>
             {/* Icon placeholder */}
             <Text style={{ fontSize: 10, fontWeight: 'bold', marginBottom: 5 }}>VIAJANTES {data.passengers.length}</Text>
        </View>

        {data.passengers.map((p, i) => (
            <View key={i} style={styles.passengerRow}>
                {/* Icon placeholder */}
                <Text style={styles.passengerName}>{p.name}</Text>
                <Text style={styles.passengerDoc}>{p.document}</Text>
            </View>
        ))}

        {/* Baggage */}
        <View style={styles.baggageSection}>
             {/* Personal Item */}
             <View style={styles.baggageItem}>
                <Text style={data.baggage.personalItem > 0 ? styles.baggageStatusIncluded : styles.baggageStatusExcluded}>
                    {data.baggage.personalItem > 0 ? 'Incluído' : 'Não Incluído'}
                </Text>
                {/* Icon placeholder */}
                <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>ITEM PESSOAL {data.baggage.personalItem}</Text>
                <Text style={{ fontSize: 8, color: '#666', marginTop: 2 }}>Bolsa ou mochila pequena.</Text>
             </View>

             {/* Carry On */}
             <View style={styles.baggageItem}>
                <Text style={data.baggage.carryOn > 0 ? styles.baggageStatusIncluded : styles.baggageStatusExcluded}>
                     {data.baggage.carryOn > 0 ? 'Incluído' : 'Não Incluído'}
                </Text>
                {/* Icon placeholder */}
                 <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>BAGAGEM DE MÃO {data.baggage.carryOn}</Text>
                 <Text style={{ fontSize: 8, color: '#666', marginTop: 2 }}>Bagagem de mão 10 kg.</Text>
             </View>

             {/* Checked */}
             <View style={styles.baggageItem}>
                <Text style={data.baggage.checked > 0 ? styles.baggageStatusIncluded : styles.baggageStatusExcluded}>
                    {data.baggage.checked > 0 ? 'Incluído' : 'Não Incluído'}
                </Text>
                {/* Icon placeholder */}
                 <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>BAGAGEM DESPACHADA {data.baggage.checked}</Text>
                 <Text style={{ fontSize: 8, color: '#666', marginTop: 2 }}>Bagagem despachada 23 kg.</Text>
             </View>
        </View>

        {/* Flights */}
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
             <Text style={styles.sectionTitle}>VOOS DE IDA</Text>
             <Text style={{ fontSize: 10, color: '#666', marginLeft: 5 }}>Início:</Text>
        </View>

        {data.flights.map((leg, i) => (
            <View key={i} style={styles.flightLeg}>
                <View style={{ width: 100 }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#333' }}>{leg.flightNumber}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                         <Text style={styles.flightDate}>{dayjs(leg.date).format('DD/MM/YYYY')}</Text>
                         <Text style={styles.flightTimeBox}>{leg.origin.time}</Text>
                    </View>
                </View>

                <View style={styles.flightRoute}>
                    <View style={{ alignItems: 'flex-end', width: '30%' }}>
                        <Text style={styles.cityName}>{leg.origin.city}</Text>
                        <Text style={styles.cityCode}>{leg.origin.code}</Text>
                    </View>

                    <View style={{ alignItems: 'center', width: '20%' }}>
                         {/* Icon placeholder */}
                         <Text style={{ fontSize: 14, color: '#f05a22' }}>✈</Text>
                         <Text style={styles.duration}>{leg.duration}</Text>
                    </View>

                    <View style={{ alignItems: 'flex-start', width: '30%' }}>
                        <Text style={styles.cityCode}>{leg.destination.code}</Text>
                        <Text style={styles.cityName}>{leg.destination.city}</Text>
                    </View>
                    
                    <View style={{ alignItems: 'flex-end', width: '20%' }}>
                         <Text style={styles.flightTimeBox}>{leg.destination.time}</Text>
                         <Text style={styles.flightDate}>{dayjs(leg.date).format('DD/MM/YYYY')}</Text>
                    </View>
                </View>
            </View>
        ))}


        {/* Footer */}
        <View style={styles.footer}>
             <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>Encontre seu voo</Text>
             <Text style={{ fontSize: 10, color: '#666', marginBottom: 10 }}>Utilize as informações acima ou leia QR Code ao lado</Text>
             {/* QRCode would go here. Since react-pdf doesn't support QR directly without a canvas or image, we might need a data url passed in. 
                 For now, we will render an empty box or the text passed if it was an image url 
             */}
              {/* NOTE: To generate a real QR code in React-PDF, typically we generate it in the parent component as a Data URI and pass it as an Image. 
                  For this MVP we will assume qrCodeText is a URL to an image or we just show a placeholder box if not an image.
              */}
             {data.qrCodeText.startsWith('data:image') || data.qrCodeText.startsWith('http') ? (
                 <Image style={styles.qrCode} src={data.qrCodeText} />
             ) : (
                <View style={{ width: 80, height: 80, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' }}>
                     <Text style={{ fontSize: 8 }}>QR Code Placeholder</Text>
                </View>
             )}
             <Text style={{ fontSize: 8, marginTop: 5 }}>Clique ou Leia o QR CODE</Text>
        </View>

        <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 20, color: '#666' }}>Informações importantes</Text>
        <Text style={styles.legalText}>
            Penalidades, cancelamentos e alterações: A alteração no itinerário original da viagem, antes ou após o seu início, somente é possível dentro do prazo de validade da passagem sujeito aos ajustes de tarifas, cobrança de taxa ou variações cambiais.
            O reembolso somente será aceito se dentro do prazo de validade, respeitadas as regras de tarifa promocional, cancelamento de voo e penalidades. Para mais informações, inclusive referentes aos valores aplicáveis, consulte o seu emissor.
        </Text>

         <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 15, color: '#666' }}>Orientações para Embarque</Text>
         <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 7, color: '#666', marginBottom: 2 }}>• Apresente-se em nosso check-in com 2 horas de antecedência em voos nacionais, ou com 3 horas em voos internacionais.</Text>
            <Text style={{ fontSize: 7, color: '#666', marginBottom: 2 }}>• Não se esqueça de levar seus documentos originais:</Text>
            <Text style={{ fontSize: 7, color: '#666', marginBottom: 2 }}>• Carteira de Identidade para voos nacionais</Text>
            <Text style={{ fontSize: 7, color: '#666', marginBottom: 2 }}>• Passaporte e os vistos necessários para entrada no pais de destino para voos internacionais.</Text>
            <Text style={{ fontSize: 7, color: '#666', marginBottom: 2 }}>• Verifique a necessidade de Vacinas para o destino de sua viagem.</Text>
         </View>
         
         <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 15, color: '#666' }}>Contato</Text>
         <Text style={{ fontSize: 7, color: '#666', marginTop: 2 }}>• {data.agency.contactPhone}</Text>

      </Page>
    </Document>
  );
};

export default FlightConfirmationPdf;
