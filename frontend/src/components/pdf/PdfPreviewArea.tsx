import { memo } from "react";
import type { ConfirmationData } from "../../types";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import FlightConfirmationPdf from "./FlightConfirmationPdf";
import { Download } from "lucide-react";

interface PdfPreviewAreaProps {
  pdfData: ConfirmationData;
}

export const PdfPreviewArea = memo<PdfPreviewAreaProps>(({ pdfData }) => {
  return (
    <div className="preview-area">
      <div className="preview-header">
        <h2>Visualização</h2>
        <PDFDownloadLink
          document={<FlightConfirmationPdf data={pdfData} />}
          fileName={`confirmacion-${pdfData.locator}.pdf`}
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
          <FlightConfirmationPdf data={pdfData} />
        </PDFViewer>
      </div>
    </div>
  );
});

PdfPreviewArea.displayName = "PdfPreviewArea";
