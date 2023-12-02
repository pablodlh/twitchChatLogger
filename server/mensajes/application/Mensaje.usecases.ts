import Mensaje from '../domain/Mensaje'
import MensajeRepository from '../domain/MensajeRepository'

export class MensajeUseCases{
    private mensajeRepository: MensajeRepository;

    constructor(mensajeRepository: MensajeRepository){
        this.mensajeRepository = mensajeRepository;
    }

      async getAllMensajes() {
        return await this.mensajeRepository.getAllMensajes();
      }
      async deleteAllMensajes() {
        return await this.mensajeRepository.deleteAllMensajes();
      }

      async addMensaje(usuario:string, contenidoMensaje:string,canal: string){
        return await this.mensajeRepository.addMensaje(usuario,contenidoMensaje,canal)

      }
}
