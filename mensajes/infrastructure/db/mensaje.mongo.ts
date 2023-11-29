import { collections } from "../../../context/MongoConnection";
import Mensaje from "../../domain/Mensaje"
import MensajeRepository from "../../domain/MensajeRepository"
import { ObjectId } from "mongodb";

export default class MensajeRepositoryMongoDB implements MensajeRepository {

     async getAllMensajes(): Promise<Mensaje[] | undefined> {
        const mensajesFromDB = await collections.mensajes.find().toArray();
        if(!mensajesFromDB) {
            console.log("f en el chat")

            return undefined;}

        const mensajes: Mensaje[] = mensajesFromDB.map((mensajeFromDB)=> {
            const mensaje: Mensaje = {
                id: String(mensajeFromDB._id),
                usuario: mensajeFromDB.usuario,
                contenidoMensaje: mensajeFromDB.contenidoMensaje,
                canal: mensajeFromDB.canal
            };
            return mensaje
        })
        return mensajes;
        
    }


    async addMensaje(usuarioRecibido: string,contenidoMensajeRecibido: string, canalRecibido: string){

        const mensaje: Mensaje = {
            usuario:  usuarioRecibido,
            contenidoMensaje : contenidoMensajeRecibido,
            canal: canalRecibido
        }

        await collections.mensajes.insertOne(mensaje)

        return mensaje

    }


}