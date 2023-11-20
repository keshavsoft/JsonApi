let CommonToChatHistoryToItem = require("../ToChatHistory/ToItem")

let StartFunc = ({ inVerifyToken, inItemName, inMessage }) => {
    let LocalToChatHistoryToItem = CommonToChatHistoryToItem({ inVerifyToken, inItemName, inMessage });
};

module.exports = StartFunc;
