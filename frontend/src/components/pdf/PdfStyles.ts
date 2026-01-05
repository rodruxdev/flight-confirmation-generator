
import { StyleSheet, Font } from '@react-pdf/renderer';

// Register a nice font if possible, otherwise use standard fonts
// For now, we'll use Helvetica as default (sans-serif)
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
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  agencySection: {
    flexDirection: 'column',
  },
  agencyLogo: {
    width: 100,
    height: 40,
    objectFit: 'contain',
  },
  locatorSection: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 4,
    color: '#fff',
    marginTop: 5,
    minWidth: 150,
    textAlign: 'center',
  },
  locatorLabel: {
    fontSize: 8,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 2
  },
  locatorValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  airlineLogo: {
    width: 80,
    height: 30,
    objectFit: 'contain',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  subHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
  },
  icon: {
      width: 12,
      height: 12,
      marginRight: 5
  },
  passengerRow: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 4,
    marginBottom: 5,
    alignItems: 'center'
  },
  passengerName: {
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
  },
  passengerDoc: {
    fontSize: 10,
    color: '#666',
  },
  baggageSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  baggageItem: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  baggageStatusIncluded: {
    color: '#2ecc71',
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 4,
    backgroundColor: '#e8f8f5',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  baggageStatusExcluded: {
    color: '#e74c3c',
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 4,
    backgroundColor: '#fdedec',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  baggageIcon: {
      width: 24,
      height: 24,
      marginVertical: 5
  },
  flightLeg: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      borderBottomWidth: 0.5,
      borderBottomColor: '#eee',
  },
  flightDate: {
      width: 60,
      fontSize: 9,
      color: '#666'
  },
  flightTimeBox: {
      backgroundColor: '#f05a22', // Example orange color
      color: '#fff',
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 3,
      fontSize: 9,
      fontWeight: 'bold',
      marginRight: 5,
  },
  flightRoute: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10
  },
  cityCode: {
      fontSize: 14,
      fontWeight: 'bold',
  },
  cityName: {
      fontSize: 9, 
      color: '#666'
  },
  duration: {
    fontSize: 9,
    color: '#666',
    marginHorizontal: 10
  },
  footer: {
      marginTop: 30,
      alignItems: 'center'
  },
  qrCode: {
      width: 80,
      height: 80,
      marginBottom: 10
  },
  legalText: {
      fontSize: 7,
      color: '#888',
      marginTop: 20,
      lineHeight: 1.5,
      textAlign: 'justify'
  }
});
