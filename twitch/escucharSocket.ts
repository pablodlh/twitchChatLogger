
import WebSocket from 'ws';

process.env.OAUTH_TWITCH
const oAuth = process.env.OAUTH_TWITCH
const nick = `prixenBot`

const channel = process.env.CANAL_A_CONECTARSE_TWITCH

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443")

export default function escucharSocket(){
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
    
                
                if (userName && mensajeParseado && channel) {
                    mensajeRepostory.addMensaje(userName, mensajeParseado, channel);
                }
            }
        }
    })
    }
    