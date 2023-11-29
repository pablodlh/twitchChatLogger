
import WebSocket from 'ws';

process.env.OAUTH_TWITCH
const oAuth = process.env.OAUTH_TWITCH
const nick = `prixenBot`

const channel = process.env.CANAL_A_CONECTARSE_TWITCH

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443")


export default  function abrirSocket(){
    socket.addEventListener('open', ()=> {
        socket.send(`PASS oauth:${oAuth}`)
        socket.send(`NICK ${nick}`)
        socket.send(`JOIN #${channel}`)
    })
}