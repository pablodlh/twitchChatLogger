import Mensaje from './Mensaje'

export default interface UserRepository {
  getAllMensajes(): Promise<Mensaje[] | undefined>;
  addMensaje(usuario: string, contenidoMensaje: string,canal: string): Promise<Mensaje| undefined>

}