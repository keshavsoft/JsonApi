let StartFunc = ({ inmessage, inws }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "OnlineClients";
    LocalObjectToSend.JsonData = inmessage;
    inws.send(JSON.stringify(LocalObjectToSend));
}

module.exports = StartFunc;