from typing import List
from fastapi import APIRouter, status, Depends, HTTPException, Response
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from Models.Lego_Model import LegoModel
from Schemas.Lego_Schema import LegoSchema
from Core.Deps import get_session

router = APIRouter()

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=LegoSchema)

async def post_lego(lego: LegoSchema, db: AsyncSession = Depends(get_session)):
     novoLego = LegoModel(nome=lego.nome, jogo=lego.jogo, roupa=lego.roupa, habilidade=lego.habilidade, pulo_duplo=lego.pulo_duplo, acessorio=lego.acessorio, foto=lego.foto)
     
     db.add(novoLego)
     
     await db.commit()
     
     await db.refresh(novoLego)
     
     return novoLego

@router.get("/", response_model=List[LegoSchema])

async def get_legos(db: AsyncSession = Depends(get_session)):
     query = select(LegoModel)
          
     result = await db.execute(query)
          
     legos: List[LegoModel] = result.scalars().all()
          
     return legos
     
@router.get("/{lego_id}", response_model=LegoSchema, status_code=status.HTTP_200_OK)

async def get_lego(lego_id: int, db: AsyncSession = Depends(get_session)):
     query = select(LegoModel).filter(LegoModel.id == lego_id)
          
     result = await db.execute(query)
          
     lego = result.scalar_one_or_none()
          
     if lego:
          return lego
     else:
          raise HTTPException(detail="Personagem de Lego não encontrado.", status_code=status.HTTP_404_NOT_FOUND)
          
@router.put("/{lego_id}", response_model=LegoSchema, status_code=status.HTTP_202_ACCEPTED)

async def put_lego(lego_id: int, lego: LegoSchema, db: AsyncSession = Depends(get_session)):
     query = select(LegoModel).filter(LegoModel.id == lego_id)
          
     result = await db.execute(query)
          
     lego_upgrade = result.scalar_one_or_none()
          
     if lego_upgrade:
          lego_upgrade.nome = lego.nome
          lego_upgrade.jogo = lego.jogo
          lego_upgrade.roupa = lego.roupa
          lego_upgrade.habilidade = lego.habilidade
          lego_upgrade.pulo_duplo = lego.pulo_duplo
          lego_upgrade.acessorio = lego.acessorio
          lego_upgrade.foto = lego.foto
               
          await db.commit()
          
          await db.refresh(lego_upgrade)
               
          return lego_upgrade
     else:
          raise HTTPException(detail="Personagem de Lego não encontrado.", status_code=status.HTTP_404_NOT_FOUND)
          
@router.delete("/{lego_id}", status_code=status.HTTP_204_NO_CONTENT)

async def delete_lego(lego_id: int, db: AsyncSession = Depends(get_session)):
     query = select(LegoModel).filter(LegoModel.id == lego_id)
          
     result = await db.execute(query)
          
     lego_del = result.scalar_one_or_none()
          
     if lego_del:
          await db.delete(lego_del) #Remover, se necessário
               
          await db.commit()
               
          return Response(status_code=status.HTTP_204_NO_CONTENT)
     else:
          raise HTTPException(detail="Personagem de Lego não encontrado.", status_code=status.HTTP_404_NOT_FOUND)