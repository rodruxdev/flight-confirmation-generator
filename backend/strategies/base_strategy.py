from abc import ABC, abstractmethod

class BaseStrategy(ABC):
    @abstractmethod
    def extract_data(self, raw_data: str) -> dict:
        pass
    
