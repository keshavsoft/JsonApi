let CommonToConnectedClients = require("../ToConnectedClients/EntryFile")
let CommonToChatHistory = require("../ToChatHistory/InsertItem")

let StartFunc = ({ inVerifyToken, inws, inClients, inRequest }) => {
    let LocalFromConnectedClients = CommonToConnectedClients({ inVerifyToken, inws, inClients, inRequest });
    
    if (LocalFromConnectedClients === undefined === false) {
        if (LocalFromConnectedClients.KTF === true) {
            CommonToChatHistory({ inVerifyToken, inws, inClients, inRequest })
        }
    };
};

module.exports = StartFunc;
