const WebSocket = require('ws');

let SendToOnly = ({ inws, inwss, inmessage }) => {
    inwss.clients.forEach(function each(client) {
        if (client !== inws && client.readyState === WebSocket.OPEN) {
            client.send(inmessage);
        }
    });

}

module.exports = SendToOnly;