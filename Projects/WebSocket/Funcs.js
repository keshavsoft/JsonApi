let CommonjwtFunc = require("../../common/Jwt/Bs5");

var get_cookies = function (request) {
    var cookies = {};
    request.headers && request.headers.cookie.split(';').forEach(function (cookie) {
        var parts = cookie.match(/(.*?)=(.*)$/)
        cookies[parts[1].trim()] = (parts[2] || '').trim();
    });
    return cookies;
};

let WsOnConnection = (ws, req) => {
    let LocalCookie;
    const ip = req.socket.remoteAddress;
    console.log("ip : ", ip);
    ws.send(ip);
    if (req.headers.cookie !== undefined) {
        LocalCookie = get_cookies(req);

        if (LocalCookie.hasOwnProperty("KToken")) {
            let LocalJwtReturn = CommonjwtFunc.ForKeshavSoftRedirectToLogin({ inToken: LocalCookie.KToken });

            if (LocalJwtReturn.KTF === false) {
                ws.close();
            };

            ws.on('message', function incoming(message) {
                console.log('-----: %s', message);
                //   Dal.SaveOnly({ inJsonConfig: { inFolderName: "Masters", inJsonFileName: "Chat.json" }, inItemConfig: { inItemName: "Names", inScreenName: "Name1" }, inUserName: "GPS", inPostData: { "Chat": message } }).then().catch();
            });

            ws.on('close', function incoming() {
                console.log('closed');
            });

            ws.send('Hai Socket established');
        } else {
            ws.close();
        }
    } else {
        console.log("ws : ", req.headers);
        ws.on('message', function incoming(message) {
            console.log('test--: %s', message);
            //   Dal.SaveOnly({ inJsonConfig: { inFolderName: "Masters", inJsonFileName: "Chat.json" }, inItemConfig: { inItemName: "Names", inScreenName: "Name1" }, inUserName: "GPS", inPostData: { "Chat": message } }).then().catch();

            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                  client.send(message, { binary: isBinary });
                }
              });

        });

        ws.on('close', function incoming() {
            console.log('closed');
        });

        ws.send('Hai Socket established');
    }
};

module.exports = WsOnConnection;