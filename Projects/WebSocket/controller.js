const WebSocket = require('ws');

let incoming = (message, isBinary, ws, wss) => {
    console.log('test--: this is else', message.toString());

    setTimeout(function () {
        ws.send('iiiiiiiiiiiii');

    }, 5000);

    ws.send('count : ', wss.clients.size);

    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(`${message} : to all`, { binary: isBinary });
        }
    });
};

module.exports = incoming;