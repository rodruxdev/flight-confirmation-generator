import { useEffect, useState } from "react";
import "./index.css";
import ConfirmationForm from "./components/form/ConfirmationForm.tsx";
import { PassengerType, type ConfirmationData } from "./types.ts";
import { AirlinesInfo } from "./constants.ts";
import { Airlines } from "./types.ts";
import { Check } from "lucide-react";
import { PdfPreviewArea } from "./components/pdf/PdfPreviewArea.tsx";
import { generateQrCode } from "./util/generateQrCode.ts";

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
      origin: { city: "Rio Branco", code: "RBR", time: "23:40" },
      destination: { city: "Manaus", code: "MAO", time: "02:40" },
    },
    {
      flightNumber: "G31743",
      date: "2026-01-09",
      origin: { city: "Manaus", code: "MAO", time: "03:25" },
      destination: { city: "Brasília", code: "BSB", time: "07:25" },
    },
    {
      flightNumber: "G31756",
      date: "2026-01-09",
      origin: { city: "Brasília", code: "BSB", time: "08:45" },
      destination: { city: "Curitiba", code: "CWB", time: "10:45" },
    },
  ],
  airline: {
    ...AirlinesInfo[Airlines.GOL],
  },
  language: "pt",
};

function App() {
  const [formData, setFormData] = useState<ConfirmationData>(INITIAL_DATA);
  const [pdfData, setPdfData] = useState<ConfirmationData>(INITIAL_DATA);
  const [qrCodeImageString, setQrCodeImageString] = useState<string>("");

  const handleApply = async () => {
    try {
      const qrCodeData = await generateQrCode(formData.airline.checkInUrl);
      setQrCodeImageString(qrCodeData);
      setPdfData(formData);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const url = formData.airline.baseCheckInUrl;
      if (!url) return;
      const qr = await generateQrCode(url);
      if (!cancelled) setQrCodeImageString(qr);
    };

    run();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2 style={{ marginBottom: "1rem" }}>Configuração</h2>
          <button className="btn-apply btn-apply-header" onClick={handleApply}>
            <Check size={16} style={{ marginRight: 5 }} />
            Aplicar Alterações
          </button>
        </div>
        <ConfirmationForm data={formData} onChange={setFormData} />
        {/* Floating button for mobile */}
        <button className="btn-apply-floating" onClick={handleApply}>
          <Check size={20} />
        </button>
      </div>
      <PdfPreviewArea pdfData={pdfData} qrCodeImageString={qrCodeImageString} />
    </div>
  );
}

export default App;
