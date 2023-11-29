import WebSocket from 'ws';
import MensajeRepositoryMongoDB from "../mensajes/infrastructure/db/mensaje.mongo";


process.env.OAUTH_TWITCH
const oAuth = process.env.OAUTH_TWITCH
const nick = `prixenBot`

const channel = process.env.CANAL_A_CONECTARSE_TWITCH
const mensajeRepostory  = new MensajeRepositoryMongoDB();

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443")


function abrirSocket(){
    console.log("socket abierto")
    socket.addEventListener('open', ()=> {
        socket.send(`PASS oauth:${oAuth}`)
        socket.send(`NICK ${nick}`)
        socket.send(`JOIN #${channel}`)
    })
}

function escucharSocket(){
    socket.addEventListener('message', (event) => {
    console.log("escuchadorsocket abierto")

        
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
    export {abrirSocket,escucharSocket}