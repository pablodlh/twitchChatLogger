import express from 'express'
import createMongoConnection from './context/MongoConnection'
import mensajesRouter from './mensajes/infrastructure/rest/mensaje.route'

import { abrirSocket, escucharSocket } from './twitch/socket'

abrirSocket()
escucharSocket()

createMongoConnection()

const app = express()
const port = 8080

app.use(express.json())
app.use('/mensajes', mensajesRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
