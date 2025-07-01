from pydantic.v1 import BaseSettings
from sqlalchemy.orm import declarative_base

class Settings(BaseSettings):
     API_V1_STR: str = "/api/v1"
     DB_URL: str = "mysql+asyncmy://{usuario_bd}:{senha_usuario_bd}@127.0.0.1:3306/lego"
     
     DBBaseModel = declarative_base()
     
class Config:
     case_sensitive = False
     env_file = ".venv"
     
settings = Settings()