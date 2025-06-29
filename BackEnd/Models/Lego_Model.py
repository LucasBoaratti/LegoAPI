from Core.Configs import settings
from sqlalchemy import Column, Integer, String, Boolean, Text

class LegoModel(settings.DBBaseModel):
     __tablename__ = "Personagens"
     
     id: int = Column(Integer, primary_key=True, autoincrement=True)
     nome: str = Column(String(50), nullable=False)
     jogo: str = Column(String(50), nullable=False)
     roupa: str = Column(Text)
     habilidade: str = Column(String(100)) 
     pulo_duplo: bool = Column(Boolean, nullable=False)
     acessorio: str = Column(String(100))
     foto: str = Column(Text) 