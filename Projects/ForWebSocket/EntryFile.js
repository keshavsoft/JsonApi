const WebSocket = require('ws');

let wss;
const clients = new Map();
const clientsInfo = new Map();
let CommonOnlineClients = require('./OnlineClients')
let CommonOnlineClientsFromSendMessage = require('./SendMessage/OnlineClients')
let CommoninsertToClients = require('./insertToClients')
let CommonOnMessage = require('./OnMessage')

let StartFunc = (server) => {
    wss = new WebSocket.Server({ server });

    wss.on("connection", WsOnConnection);
};

let WsOnConnection = (ws, req) => {
    CommoninsertToClients({
        inClients: clients,
        ws
    });

    const ip = req.socket.remoteAddress;
    ws.send(ip);

    CommonOnlineClientsFromSendMessage({ inmessage: CommonOnlineClients({ inClients: clients }), inws: ws });

    ws.on('message', (messageAsString) =>
        CommonOnMessage({
            inMessageAsString: messageAsString,
            inClients: clients,
            inws: ws,
            inwss: wss
        }));

    ws.on('close', () => {
        console.log('closed');
    });

    ws.send('Hai Socket established');
};

module.exports = StartFunc;