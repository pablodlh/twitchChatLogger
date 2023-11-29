import express from "express";
import MensajeRepositoryMongoDB from "../db/mensaje.mongo";
import MensajeRepository from "../../domain/MensajeRepository"
import { Request, Response } from 'express';


const router = express.Router();
const mensajeRepostory: MensajeRepository  = new MensajeRepositoryMongoDB();

router.get("/", async(req,res: Response) => {
    try{
        const mensajes = await mensajeRepostory.getAllMensajes();
        res.json(mensajes)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Serasdfasver Error" });
    }
})

export default router;