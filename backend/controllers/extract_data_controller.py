from fastapi import UploadFile, HTTPException
from services.pdf_service import PdfService

class ExtractDataController:
    def __init__(self):
        self.pdf_service = PdfService()

    async def handle_extract_data(self, file: UploadFile):
        if not file.filename.endswith('.pdf'):
             raise HTTPException(status_code=400, detail="Invalid file type. Only PDF files are allowed.")
        
        try:
            result = await self.pdf_service.process_pdf(file)
            return result
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
