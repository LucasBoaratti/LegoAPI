# LegoAPI

Uma API de personagens de Lego feita em FastAPI e React.

## Como utilizar a API

### BackEnd
1. Baixe a API clicando em code e vá em Download ZIP;

2. Após baixar os arquivos, retire-os do arquivo ZIP;

3. Agora, abra o VSCode e abra o arquivo;

4. Após abrir o VSCode, abra um terminal e acesse a pasta BackEnd:

```python
cd .\BackEnd\
```

5. Depois crie o ambiente virtual:

```python
python -m venv .venv
```

6. Acesse a pasta do ambiente virtual:

```python
.\.venv\Scripts\activate
```

7. Instale as bibliotecas necessárias:

```python
pip install -r requirements.txt
```

Antes de ir para o próximo passo, coloque o seu usuário e sua senha do seu banco de dados MySQL em Configs.py (Caminho do Configs.py: BackEnd\Core\Configs.py

```python
DB_URL: str = "mysql+asyncmy://{usuario_bd}:{senha_usuario_bd}@127.0.0.1:3306/lego"
```

OBS: 

Troque usuario_bd pelo seu usuário do banco de dados MySQL. (Normalmente é root ou admin)

Troque senha_usuario_bd pela sua senha do banco de dados MySQL.

8. Agora rode o servidor:

```python
uvicorn Main:app
```

### FrontEnd

9. Agora, acessa a pasta FrontEnd:

```node
cd .\FrontEnd\
```

10. Instale a pasta node_modules:

```node
npm install
```

11. Instale as bibliotecas necessárias: (Elas provavelmente virão instaladas já, mas é melhor instalar de novo 😅)

```node
npm install axios react-hook-form zod @hookform/resolvers react-router-dom tailwindcss @tailwindcss/vite postcss autoprefixer @tailwindcss/postcss
```

12. Rode o servidor:

```node
npm run dev
```

E pronto! Agora é só usar a API a vontade :D

# Linguagens e tecnologias utilizadas

## FrontEnd

<div style="display: flex;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="70px" height="70px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" width="70px" height="70px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" width="70px" height="70px"/>
</div>

## BackEnd

<div style="display: flex;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" width="70px" height="70px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" width="70px" height="70px"/>
</div>

## Banco de dados

<div style="display: flex;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" width="70px" height="70px"/>
</div>

## Ferramentas e tecnologias

<div style="display: flex;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite" width="70px" height="70px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" width="70px" height="70px"/>
</div>
