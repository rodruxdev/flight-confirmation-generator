from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

from fastapi import UploadFile, File
from controllers.extract_data_controller import ExtractDataController

extract_data_controller = ExtractDataController()

@app.post("/extract-data")
async def extract_data(file: UploadFile = File(...)):
    return await extract_data_controller.handle_extract_data(file)