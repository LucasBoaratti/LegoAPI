from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Core.Configs import settings
from API.v1.API import api_router

app = FastAPI(title="API de personagens de Lego", description="Essa API, realiza todos os métodos HTTP para personagens de lego.")

origins = ["http://localhost", "http://localhost:8080", "http://localhost:5173", "http://127.0.0.1:5173"]

app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"],)

app.include_router(api_router, prefix=settings.API_V1_STR)

if __name__ == "__main__":
     import uvicorn
     
     uvicorn.run("Main:app", host="127.0.0.1", port=8000, log_level="info", reload=True)