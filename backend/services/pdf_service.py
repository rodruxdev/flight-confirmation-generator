import pdfplumber
import io
from fastapi import UploadFile
from strategies.pdf_strategy_factory import PdfStrategyFactory

class PdfService:
    async def extract_raw_data(self, file: UploadFile) -> str:
        content = await file.read()
        text_content = ""
        with pdfplumber.open(io.BytesIO(content)) as pdf:
            for page in pdf.pages:
                text_content += page.extract_text() or ""
        return text_content

    async def process_pdf(self, file: UploadFile) -> dict:
        # Reset file cursor after reading in extract_raw_data if called sequentially,
        # but here we might need to read it again or pass the content.
        # For efficiency, let's read once.
        content = await file.read()
        
        # We need to seek back to 0 if we want to use the file object again or just use the content
        await file.seek(0) 
        
        raw_text = await self.extract_raw_data(file)
        
        # Select strategy
        strategy = PdfStrategyFactory.get_strategy(content)
        
        # Extract structured data using strategy
        extracted_data = strategy.extract_data(raw_text)
        
        return {
            "raw_text": raw_text,
            "extracted_data": extracted_data
        }
