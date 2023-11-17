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
let CommonFromDataSupply = require("../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/AsArray/EntryFile");


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
    let LocalDataPK;
    if (LocalTokenName in LocalGetCookie) {

        LocalDataPK = CommonVerifyToken({ inKToken: LocalGetCookie[LocalTokenName], inws: ws });

        console.log("get_cookies", LocalGetCookie, LocalDataPK);
    }
    else {
        ws.close();
    }
    LocalFuncSaveToJson({ inDataPK: LocalDataPK, inws: ws, inClients: clients });

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

let LocalFuncSaveToJson = ({ inDataPK, inws, inClients }) => {
    let LocalFolderName = "ForChat";
    let LocalFileName = "ConnectedClients";
    let LocalItemName = "MetadataAsArray";
    const metadata = inClients.get(inws);
    let LocalFromForExistence = CommonFromDataSupply.StartFunc(
        {
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inItemName: LocalItemName,
            inDataPK,
            inDataToInsert: JSON.stringify(metadata)
        });
console.log("hi",LocalFromForExistence);
};


module.exports = StartFunc;