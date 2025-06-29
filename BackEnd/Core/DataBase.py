from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import create_async_engine, AsyncEngine, AsyncSession
from Core.Configs import settings

engine = create_async_engine(settings.DB_URL, echo=True)

Session: AsyncEngine = sessionmaker(
     autocommit=False,
     autoflush=False,
     expire_on_commit=False,
     class_= AsyncSession,
     bind=engine
)