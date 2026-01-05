
import { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import ConfirmationForm from './components/form/ConfirmationForm';
import FlightConfirmationPdf from './components/pdf/FlightConfirmationPdf';
import type { ConfirmationData } from './types.ts';
import { Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';

const INITIAL_DATA: ConfirmationData = {
  locator: 'UKIQHA',
  airline: 'GOL',
  passengers: [
    { id: '1', name: 'MANUEL SILVEIRA ORIHUELA', document: '1272152279458' }
  ],
  baggage: {
    personalItem: 1,
    carryOn: 1,
    checked: 0
  },
  flights: [
    {
      id: '1',
      flightNumber: 'G31246',
      date: '2026-01-08',
      duration: '3h0m',
      origin: { city: 'Rio Branco', code: 'RBR', time: '23:40' },
      destination: { city: 'Manaus', code: 'MAO', time: '02:40' }
    },
    {
      id: '2',
      flightNumber: 'G31743',
      date: '2026-01-09',
      duration: '4h0m',
      origin: { city: 'Manaus', code: 'MAO', time: '03:25' },
      destination: { city: 'Brasília', code: 'BSB', time: '07:25' }
    },
    {
       id: '3',
       flightNumber: 'G31756',
       date: '2026-01-09',
       duration: '2h0m',
       origin: { city: 'Brasília', code: 'BSB', time: '08:45' },
       destination: { city: 'Curitiba', code: 'CWB', time: '10:45' } 
    }
  ],
  agency: {
      name: 'Viajando com Sucesso',
      contactPhone: '0800 704 0465',
      logoUrl: 'https://viajaNet.com.br/assets/img/logo-viajanet.png' // Placeholder
  },
  qrCodeText: 'https://google.com'
};

function App() {
  const [data, setData] = useState<ConfirmationData>(INITIAL_DATA);

  return (
    <div className="app-container">
      <div className="sidebar">
        <ConfirmationForm data={data} onChange={setData} />
      </div>
      <div className="preview-area">
        <div className="preview-header">
             <h2>Visualização</h2>
             <PDFDownloadLink document={<FlightConfirmationPdf data={data} />} fileName={`confirmacao-${data.locator}.pdf`}>
                {({ loading }) => (
                    <button className="btn-primary" disabled={loading}>
                        <Download size={16} style={{marginRight: 5}}/>
                        {loading ? 'Gerando...' : 'Baixar PDF'}
                    </button>
                )}
             </PDFDownloadLink>
        </div>
        <div className="pdf-wrapper">
            <PDFViewer width="100%" height="100%" className="pdf-viewer">
              <FlightConfirmationPdf data={data} />
            </PDFViewer>
        </div>
      </div>
    </div>
  );
}

export default App;
