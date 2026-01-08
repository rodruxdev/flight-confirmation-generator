import { useState } from "react";
import "./index.css";
import ConfirmationForm from "./components/form/ConfirmationForm.tsx";
import { PassengerType, type ConfirmationData } from "./types.ts";
import { AirlinesInfo } from "./constants.ts";
import { Airlines } from "./types.ts";
import { Check } from "lucide-react";
import { PdfPreviewArea } from "./components/pdf/PdfPreviewArea.tsx";

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
    ...AirlinesInfo[Airlines.GOL],
    checkInUrl: "https://google.com",
  },
  language: "pt",
};

function App() {
  const [formData, setFormData] = useState<ConfirmationData>(INITIAL_DATA);
  const [pdfData, setPdfData] = useState<ConfirmationData>(INITIAL_DATA);

  const handleApply = () => {
    setPdfData(formData);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2 style={{ marginBottom: "1rem" }}>Configuração</h2>
          <button className="btn-apply" onClick={handleApply}>
            <Check size={16} style={{ marginRight: 5 }} />
            Aplicar Alterações
          </button>
        </div>
        <ConfirmationForm data={formData} onChange={setFormData} />
      </div>
      <PdfPreviewArea pdfData={pdfData} />
    </div>
  );
}

export default App;
