
import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf'
});


export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Open Sans',
    fontSize: 10,
    color: '#333',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    height: 60,
  },
  agencySection: {
    width: '30%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  agencyLogo: {
    width: 100,
    height: 40,
    objectFit: 'contain',
  },
  agencyNameFallback: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366'
  },
  locatorWrapper: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locatorLabel: {
    fontSize: 10,
    color: '#333',
    marginBottom: 2,
    fontWeight: 'bold'
  },
  locatorSection: {
    backgroundColor: '#000',
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 4,
    minWidth: 140,
    alignItems: 'center',
  },
  locatorValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1
  },
  airlineSection: {
     width: '30%',
     alignItems: 'flex-end',
     justifyContent: 'center',
  },
  airlineLogo: {
      width: 100,
      height: 40,
      objectFit: 'contain'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 10,
    marginTop: 10,
    color: '#000',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  passengerLabel: {
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginLeft: 5,
  },
  passengerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 2,
  },
  passengerName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textTransform: 'uppercase'
  },
  passengerDoc: {
      fontSize: 11,
      color: '#333',
      fontWeight: 'bold'
  },
  // Baggage Cards
  baggageSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    gap: 15,
  },
  baggageCard: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
    height: 90, 
    justifyContent: 'center'
  },
  baggageStatusPillIncluded: {
     backgroundColor: '#e6fffa',
     color: '#38b2ac',
     fontSize: 8,
     fontWeight: 'bold',
     paddingHorizontal: 8,
     paddingVertical: 2,
     borderRadius: 10,
     marginBottom: 5,
     position: 'absolute',
     top: -8,
     alignSelf: 'center'
  },
   baggageStatusPillExcluded: {
     backgroundColor: '#fff5f5', // light red
     color: '#e53e3e', // red
     fontSize: 8,
     fontWeight: 'bold',
     paddingHorizontal: 8,
     paddingVertical: 2,
     borderRadius: 10,
     marginBottom: 5,
  },
  baggageTitle: {
      fontSize: 9, 
      fontWeight: 'bold', 
      marginTop: 5, 
      textTransform: 'uppercase',
      color: '#555'
  },
  baggageDesc: {
      fontSize: 8, 
      color: '#888', 
      textAlign: 'center', 
      marginTop: 2
  },
  
  // Flight Section
  flightSectionTitle: {
      flexDirection: 'row', 
      alignItems: 'center', 
      marginTop: 15, 
      marginBottom: 10
  },
  flightTitleText: {
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#000',
  },
  flightLeg: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 0,
      marginBottom: 5
  },
  flightInfoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between'
  },
  flightNumber: {
      fontSize: 9,
      color: '#666',
      width: 50,
  },
  flightDate: {
      fontSize: 9,
      color: '#666',
      marginRight: 10
  },
  timeTag: {
      backgroundColor: '#cc3300', // Deep orange/rust
      color: '#fff',
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 4,
      fontSize: 10,
      fontWeight: 'bold',
  },
  cityText: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#000'
  },
  cityLabel: {
      fontSize: 9,
      color: '#666',
      marginLeft: 4
  },
  durationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10
  },
  footer: {
      marginTop: 30,
      alignItems: 'center',
  },
  footerTitle: {
      fontSize: 14,
      marginBottom: 5,
      textAlign: 'center'
  },
  qrSection: {
      alignItems: 'center',
      marginTop: 10
  },
  qrCode: {
      width: 100,
      height: 100,
      marginBottom: 5,
      objectFit: 'contain'
  },
  legalText: {
      fontSize: 6,
      color: '#999',
      marginTop: 5,
      lineHeight: 1.3,
      textAlign: 'justify'
  },
  passengerTypeIcon: {
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 20
  }
});

