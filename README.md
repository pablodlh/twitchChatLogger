
# Twitch Chat Logger

Una aplicación web para guardar el registro de mensajes de uno o varios canales de Twitch

[MIT](https://choosealicense.com/licenses/mit/)


DESPLIEGUE:
1. Crear y configurar la base de datos con mongoDB, pasos para desplegarla con docker:


archivo compose.yaml:
----------------------------
services:
  mongo:
    restart: always
    image: mongo
    volumes:
      - ./data:/data/db
    ports:
      - "27017:27017"
----------------------------

$ docker compose up

Crea una base de datos con una colleccion


2. Crear .env en la carpeta servidor


-------------------------------------------------

DB_CONN_STRING=""  -> usualmente mongodb://localhost:27017
DB_NAME=""
MENSAJES_COLLECTION_NAME=""
OAUTH_TWITCH="" -> Tu oauth lo puedes generar facilmente desde esta web: https://twitchapps.com/tmi/
CANAL_A_CONECTARSE_TWITCH=""

-----------------------------------------------------------

