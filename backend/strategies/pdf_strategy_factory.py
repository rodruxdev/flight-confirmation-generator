from .base_strategy import BaseStrategy
from .initial_strategy import InitialStrategy

class PdfStrategyFactory:
    @staticmethod
    def get_strategy(file_content: bytes) -> BaseStrategy:
        # logic to determine strategy based on file content could go here
        return InitialStrategy()
