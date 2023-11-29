import express from "express";
import createMongoConnection from "./context/MongoConnection";
import MensajeRepositoryMongoDB from "./mensajes/infrastructure/db/mensaje.mongo";
import MensajeRepository from "./mensajes/domain/MensajeRepository";
import { Request, Response } from 'express';
import dotenv from "dotenv";
import abrirSocket from "./twitch/abrirSocket";
import escucharSocket from "./twitch/escucharSocket";

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

abrirSocket()
escucharSocket()




