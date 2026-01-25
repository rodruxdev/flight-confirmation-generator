from .base_strategy import BaseStrategy

class ReservaStrategy(BaseStrategy):
    def extract_data(self, raw_data: str) -> dict:
        return {"data": "Initial extraction (not implemented)"}
