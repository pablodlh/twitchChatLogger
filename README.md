# Twitch Chat Logger

Una aplicación web para guardar el registro de mensajes de uno o varios canales de Twitch

## Despliegue

Para desplegar el proyecto:

```bash
  npm run start:mongo
```
```bash
  npm run start:server
```
```bash
  npm run start:client
```


## API 

#### Recuperar todos los mensajes

```http
  GET /mensajes
```
#### Borrar todos los mensajes

```http
  DELETE /mensajes
```
#### Añadir mensaje Nuevo

```http
  POST /mensajes
```
| Parametro | Tipo      | Descripción                       |
| :-------- | :-------  | :-------------------------------- |
| `mensaje` | `mensaje` | un objeto de tipo mensaje  |
