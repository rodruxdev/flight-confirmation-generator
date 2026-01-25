import requests
import unittest
from reportlab.pdfgen import canvas
import io

class TestExtractData(unittest.TestCase):
    def setUp(self):
        self.url = "http://localhost:8000/extract-data"

    def test_extract_data(self):
        # Create a simple PDF
        buffer = io.BytesIO()
        p = canvas.Canvas(buffer)
        p.drawString(100, 100, "Hello World Data Extraction")
        p.save()
        buffer.seek(0)

        files = {'file': ('test.pdf', buffer, 'application/pdf')}
        response = requests.post(self.url, files=files)
        
        self.assertEqual(response.status_code, 200)
        data = response.json()
        print(f"Response data: {data}")
        self.assertIn("raw_text", data)
        self.assertIn("Hello World Data Extraction", data["raw_text"])
        self.assertIn("extracted_data", data)

if __name__ == '__main__':
    unittest.main()
