import Mensaje from './Mensaje'

export default interface UserRepository {
  getAllMensajes(): Promise<Mensaje[] | undefined>;
  addMensaje(usuario: string, contenidoMensaje: string): Promise<Mensaje| undefined>

}