const WebSocket = require('ws');

let StartFunc = ({ inClients }) => {
    let jVarLocalReturnArray = [];
    for (let [key, value] of inClients) {
        if (key.readyState === WebSocket.OPEN) {
        jVarLocalReturnArray.push(value);
        }
    };
    return jVarLocalReturnArray;
}

module.exports = StartFunc;