const WebSocket = require('ws');

let SendToAll = ({ inwss, inmessage }) => {
    inwss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(inmessage);
        }
    });

}

let SendSingle = ({ inwss, inmessage, inReceiver, inClients }) => {
 for (let [key, value] of inClients) {
            if (key.readyState === WebSocket.OPEN && value.Name === inReceiver) {
                console.log("Matched",[key,value]);
                console.log("log",inwss.clients.get([key,value]));
            }
        };
};
    //     }); {
    //         console.log("cli",client);
    //     // for (let [key, value] of inClients) {
    //     //     if (key.readyState === WebSocket.OPEN && value.Name === inReceiver) {
    //     //         console.log("Matched",[key,value]);
    //     //     }
    //     // };
    // };
    // inClients.forEach(function each(client) {
    //     console.log("cli",client);
    //     if (client.Name === inReceiver) {
    //         console.log("sent",client);

    //         console.log("client",inwss.clients.get(client));

    //         inwss.clients.get(client).send(inmessage);
    //         console.log("delivered",inmessage);

    //     }

    module.exports = SendSingle;