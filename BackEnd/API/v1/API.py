from fastapi import APIRouter
from API.v1.Endpoints import Legos

api_router = APIRouter()

api_router.include_router(Legos.router, prefix="/legos", tags=["legos"])