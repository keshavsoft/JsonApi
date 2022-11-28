const { json } = require('express');
const WebSocket = require('ws');

let CommonjwtFunc = require("../../common/Jwt/Bs5");
let CommonController = require("./controller");

let wss;
const clients = new Map();
const clientsInfo = new Map();

let StartFunc = (server) => {

    wss = new WebSocket.Server({ server });

    wss.on("connection", WsOnConnection);

};

var get_cookies = function (request) {
    var cookies = {};
    request.headers && request.headers.cookie.split(';').forEach(function (cookie) {
        var parts = cookie.match(/(.*?)=(.*)$/)
        cookies[parts[1].trim()] = (parts[2] || '').trim();
    });
    return cookies;
};

let WsOnConnection = async (ws, req) => {
    CommonController.insertToClients({
        inClients: clients,
        ws
    });

    // const id = uuidv4();
    // const color = Math.floor(Math.random() * 360);
    // const metadata = { id, color };

    // clients.set(ws, metadata);

    let LocalCookie;
    const ip = req.socket.remoteAddress;
  //  console.log("ip : ", ip, req.headers);
    ws.send(ip);
    if (req.headers.cookie !== undefined) {
        LocalCookie = get_cookies(req);

        if (LocalCookie.hasOwnProperty("KToken")) {
            let LocalJwtReturn = await CommonjwtFunc.VerifyTokenOnly({ inToken: LocalCookie.KToken });

            if (LocalJwtReturn === false) {
                ws.close();
            };

            let LocalAuthData = await CommonjwtFunc.VerifyTokenReturnData({ inToken: LocalCookie.KToken });
            console.log("ssssssss : ", LocalAuthData.UserName);
            //let LocalAuthDataAsJson = JSON.parse(LocalAuthData);

            ws.on('message', (messageAsString) => {
                CommonController.incoming({
                    inComingMessage: messageAsString.toString(),
                    inClients: clients,
                    ws,
                    inClientsInfo: clientsInfo,
                    inUserName: LocalAuthData.UserName
                });
            });

            ws.on('close', () => {
                clients.delete(ws);
                console.log('closed');
            });

            ws.send('Hai Socket established');
        } else {
            ws.close();
        }
    } else {
        console.log("else------ : ");
        
        ws.on('message', (messageAsString) => {
            CommonController.incoming({
                inComingMessage: messageAsString.toString(),
                inClients: clients,
                ws,
                inClientsInfo: clientsInfo
            });
        });

        ws.on('close', () => {
            clients.delete(ws);
            console.log('closed');
        });

        //  ws.send('Hai Socket established');
    }
};

let WsOnConnection_28Nov2022 = async (ws, req) => {
    const id = uuidv4();
    const color = Math.floor(Math.random() * 360);
    const metadata = { id, color };

    clients.set(ws, metadata);

    let LocalCookie;
    const ip = req.socket.remoteAddress;
    console.log("ip : ", ip);
    ws.send(ip);
    if (req.headers.cookie !== undefined) {
        LocalCookie = get_cookies(req);

        if (LocalCookie.hasOwnProperty("KToken")) {
            let LocalJwtReturn = await CommonjwtFunc.VerifyTokenOnly({ inToken: LocalCookie.KToken });

            if (LocalJwtReturn === false) {
                ws.close();
            };

            ws.on('message', (messageAsString) => {
                CommonController.incoming({
                    inComingMessage: messageAsString.toString(),
                    inClients: clients,
                    ws
                });
            });

            ws.on('close', () => {
                clients.delete(ws);
                console.log('closed');
            });

            ws.send('Hai Socket established');
        } else {
            ws.close();
        }
    } else {
        ws.on('message', (messageAsString) => {
            const message = {};

            message.inComingMessage = messageAsString.toString();

            const metadata = clients.get(ws);

            message.sender = metadata.id;
            message.color = metadata.color;

            const outbound = JSON.stringify(message);

            for (let [key, value] of clients.entries()) {
                console.log(' - ' + JSON.stringify(value));
            }

            [...clients.keys()].forEach((client) => {
                client.send(messageAsString.toString());
            });

            console.log('-----: %s', messageAsString);
            //   Dal.SaveOnly({ inJsonConfig: { inFolderName: "Masters", inJsonFileName: "Chat.json" }, inItemConfig: { inItemName: "Names", inScreenName: "Name1" }, inUserName: "GPS", inPostData: { "Chat": message } }).then().catch();
        });

        ws.on('close', () => {
            clients.delete(ws);
            console.log('closed');
        });

        //  ws.send('Hai Socket established');
    }
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

module.exports = StartFunc;