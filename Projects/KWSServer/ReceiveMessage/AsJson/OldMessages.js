let CommonForOldMessages = require("./OldMessages/EntryFile");

let StartFunc = ({ inws, inMetadata, LocalJsonData, inClients, inVerifyToken }) => {

    let LocalReceiverId = LocalJsonData.ReceiverId;
    let LocalDataNeeded = CommonForOldMessages({ inVerifyToken, inItemName: LocalReceiverId });
    let LocalChatData = []
    LocalDataNeeded.JsonData.forEach(element => {
      if (element.ReceiverId === inMetadata.id) {
        LocalChatData.push(element.Message)
      }
    });

    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "OldMessages";
    LocalObjectToSend.JsonData = {};
    LocalObjectToSend.JsonData.FromMessage = LocalChatData;
    LocalObjectToSend.JsonData.Receiver = LocalReceiverId;
    inws.send(JSON.stringify(LocalObjectToSend))
}

module.exports = StartFunc;