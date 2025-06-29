from typing import Optional
from pydantic import BaseModel as SCBaseModel

class LegoSchema(SCBaseModel):
     id: Optional[int] = None #ID do personagem
     nome: str #Nome do personagem
     jogo: str #Jogo/série/filme que o personagem participou
     roupa: str #Roupa do personagem
     habilidade: str #Habilidade especial do personagem
     pulo_duplo: bool #Pulo duplo do personagem
     acessorio: str #Acessório do personagem (ex: arma, boomerangue, chicote etc)
     foto: str #Foto do personagem
     
     class Config:
          from_attributes = True