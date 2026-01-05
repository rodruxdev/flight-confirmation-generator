import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import "./index.css";
import ConfirmationForm from "./components/form/ConfirmationForm.tsx";
import FlightConfirmationPdf from "./components/pdf/FlightConfirmationPdf.tsx";
import { PassengerType, type ConfirmationData } from "./types.ts";
import { Download } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";

const INITIAL_DATA: ConfirmationData = {
  locator: "UKIQHA",
  passengers: [{ name: "MANUEL SILVEIRA ORIHUELA", type: PassengerType.ADULT }],
  baggage: {
    personalItem: 1,
    carryOn: 1,
    checked: 0,
  },
  flights: [
    {
      flightNumber: "G31246",
      date: "2026-01-08",
      duration: "3h0m",
      origin: { city: "Rio Branco", code: "RBR", time: "23:40" },
      destination: { city: "Manaus", code: "MAO", time: "02:40" },
    },
    {
      flightNumber: "G31743",
      date: "2026-01-09",
      duration: "4h0m",
      origin: { city: "Manaus", code: "MAO", time: "03:25" },
      destination: { city: "Brasília", code: "BSB", time: "07:25" },
    },
    {
      flightNumber: "G31756",
      date: "2026-01-09",
      duration: "2h0m",
      origin: { city: "Brasília", code: "BSB", time: "08:45" },
      destination: { city: "Curitiba", code: "CWB", time: "10:45" },
    },
  ],
  airline: {
    name: "Viajando com Sucesso",
    contactPhone: "0800 704 0465",
    logoUrl: "https://viajaNet.com.br/assets/img/logo-viajanet.png", // Placeholder
    checkInUrl: "https://google.com",
  },
};

function App() {
  // TODO: Add an apply button and refresh the data, don't apply live changes.
  const [data, setData] = useState<ConfirmationData>(INITIAL_DATA);

  return (
    <div className="app-container">
      <div className="sidebar">
        <ConfirmationForm data={data} onChange={setData} />
      </div>
      <div className="preview-area">
        <div className="preview-header">
          <h2>Visualização</h2>
          <PDFDownloadLink
            document={<FlightConfirmationPdf data={data} />}
            fileName={`confirmacion-${data.locator}.pdf`}
          >
            {({ loading }) => (
              <button className="btn-primary" disabled={loading}>
                <Download size={16} style={{ marginRight: 5 }} />
                {loading ? "Gerando..." : "Baixar PDF"}
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
