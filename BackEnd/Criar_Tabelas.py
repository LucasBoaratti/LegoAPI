from Core.Configs import settings
from Core.DataBase import engine
from Models import All_Models

async def create_tables() -> None:
     print("As tabelas estão sendo criadas no banco de dados...")
     
     async with engine.begin() as conexao:
          await conexao.run_sync(settings.DBBaseModel.metadata.drop_all)
          
          await conexao.run_sync(settings.DBBaseModel.metadata.create_all)
          
     print("As tabelas foram criadas com sucesso!")
     
if __name__ == "__main__":
     import asyncio
     
     asyncio.run(create_tables())