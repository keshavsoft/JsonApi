const CommonIncoming = require("./Incoming/inMessage");

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

let incoming = ({ inComingMessage, inClients, ws, inClientsInfo, inUserName }) => {
    const message = {};

    console.log("ssssssssinUserName : ", inUserName, inComingMessage);

    message.inComingMessage = inComingMessage;

    const metadata = inClients.get(ws);

    message.sender = metadata.id;
    message.color = metadata.color;

    const outbound = JSON.stringify(message);

    CommonIncoming.insertToClientsInfo({
        inComingMessage,
        inClientsInfo,
        inClientId: metadata.id
    });

    CommonIncoming.SwitchOnIncomingMessage({
        inComingMessage,
        inWs: ws,
        inClientsInfo,
        inUserName
    });



    // switch (inComingMessage) {
    //     case "Back":
    //         ws.send("------------");
    //         break;

    //     default:
    //         break;
    // };

    [...inClients.keys()].forEach((client) => {
        client.send(inComingMessage.toString());
    });
};


let incoming_keshav_28Nov2022 = ({ inComingMessage, inClients, ws, inClientsInfo }) => {
    const message = {};

    message.inComingMessage = inComingMessage;

    const metadata = inClients.get(ws);

    message.sender = metadata.id;
    message.color = metadata.color;

    const outbound = JSON.stringify(message);

    CommonIncoming.insertToClientsInfo({
        inComingMessage,
        inClientsInfo
    });

    for (let [key, value] of inClients.entries()) {
        console.log(' - ' + JSON.stringify(value));
    }

    [...inClients.keys()].forEach((client) => {
        client.send(inComingMessage.toString());
    });
};


let insertToClients = ({ inClients, ws }) => {
    const id = uuidv4();
    const color = Math.floor(Math.random() * 360);
    const metadata = { id, color };

    inClients.set(ws, metadata);

};

module.exports = { incoming, insertToClients };