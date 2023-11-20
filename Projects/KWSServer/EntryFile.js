const WebSocket = require('ws');
let jwt = require('jsonwebtoken');
let wss;
const clients = new Map();
const clientsInfo = new Map();

let CommonOnlineClients = require('./OnlineClients')
let CommonOnlineClientsFromSendMessage = require('./SendMessage/OnlineClients')
let CommoninsertToClients = require('./insertToClients')
let CommonOnMessage = require('./OnMessage')
let CommonVerifyToken = require('./VerifyToken');
let CommonSaveToJsonOnConnections = require("./LogHistory/OnConnection/EntryFile")
let CommonSaveToJsonOnMessage = require("./LogHistory/OnMessage/EntryFile")

let CommonLogChat = true;

let StartFunc = (server) => {
    wss = new WebSocket.Server({ server });

    wss.on("connection", WsOnConnection);
};
var get_cookies = function ({ inRequest }) {
    var cookies = {};

    if (("headers" in inRequest) === false) return cookies;
    if (("cookie" in inRequest.headers) === false) return cookies;

    inRequest.headers.cookie.split(';').forEach(function (cookie) {
        var parts = cookie.match(/(.*?)=(.*)$/)
        cookies[parts[1].trim()] = (parts[2] || '').trim();
    });

    return cookies;
};

let WsOnConnection = (ws, req) => {
    CommoninsertToClients({
        inClients: clients,
        ws
    });

    let LocalGetCookie = get_cookies({ inRequest: req });
    let LocalTokenName = "KToken";
    let LocalFromVerifyToken;

    if (LocalTokenName in LocalGetCookie) {
        LocalFromVerifyToken = CommonVerifyToken({ inKToken: LocalGetCookie[LocalTokenName], inws: ws });
    }
    else {
        ws.close();
    };

    if (LocalFromVerifyToken.DataPk === undefined) {
        ws.close();
    };

    CommonSaveToJsonOnConnections({
        inVerifyToken: LocalFromVerifyToken, inws: ws, inClients: clients,
        inRequest: req
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

    // CommonSaveToJsonOnMessage({ inVerifyToken: LocalFromVerifyToken, inws: ws, inClients: clients, inMessage: messageAsString });

    ws.on('close', () => {
        console.log('closed');
    });

    ws.send('Hai Socket established');
};

module.exports = StartFunc;