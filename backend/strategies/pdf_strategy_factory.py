from .base_strategy import BaseStrategy
from .reserva_strategy import ReservaStrategy

class PdfStrategyFactory:
    @staticmethod
    def get_strategy(raw_text: str) -> BaseStrategy:
        # logic to determine strategy based on file content could go here using raw text
        return ReservaStrategy()
