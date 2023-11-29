import express from "express";
import createMongoConnection from "./context/MongoConnection";
import MensajeRepositoryMongoDB from "./mensajes/infrastructure/db/mensaje.mongo";
import MensajeRepository from "./mensajes/domain/MensajeRepository";
import { Request, Response } from 'express';
import dotenv from "dotenv";

dotenv.config();



createMongoConnection();

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



const mensajeRepostory  = new MensajeRepositoryMongoDB();

app.get("/", async(req,res: Response) => {
    try{
        const mensajes = await mensajeRepostory.getAllMensajes();
        res.json(mensajes)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Serasdfasver Error" });
    }
})

import WebSocket from 'ws';

process.env.OAUTH_TWITCH
const oAuth = process.env.OAUTH_TWITCH
const nick = `prixenBot`

const channel = process.env.CANAL_A_CONECTARSE_TWITCH

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443")

socket.addEventListener('open', ()=> {
    socket.send(`PASS oauth:${oAuth}`)
    socket.send(`NICK ${nick}`)
    socket.send(`JOIN #${channel}`)
})

socket.addEventListener('message', (event) => {
    
    const data:string = event.data.toString();
    console.log(data)

    if(data.includes("PRIVMSG")){

        const coincidencia = data.match(/:(.*?)!/);
        if(coincidencia){
            const userName = coincidencia[1];
            const cadena = data;
            const partes = cadena.split(":");
            const mensaje = partes.slice(2).join(":");
            const mensajeParseado = mensaje.replace(/\r\n$/, '');

            
            mensajeRepostory.addMensaje(userName,mensajeParseado)
        }
    }
})