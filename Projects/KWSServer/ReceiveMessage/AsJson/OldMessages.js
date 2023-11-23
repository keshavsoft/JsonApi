let CommonForOldMessages = require("./OldMessages/EntryFile");

let StartFunc = ({ inwss, inMetadata, LocalJsonData, inClients, inVerifyToken }) => {

    let LocalReceiverId = LocalJsonData.ReceiverId;
    console.log("Id------------",LocalReceiverId);
    let LocalDataNeeded = CommonForOldMessages({ inVerifyToken, inItemName: LocalReceiverId });
    console.log("Data",LocalDataNeeded);
    // let LocalMessageAsString = LocalJsonData.Message;
    // let LocalObjectToSend = {};
    // LocalObjectToSend.MessageType = "OneToOneMessage";
    // LocalObjectToSend.JsonData = {};
    // LocalObjectToSend.JsonData.FromName = inMetadata.Name;
    // LocalObjectToSend.JsonData.FromId = inMetadata.id;
    // LocalObjectToSend.JsonData.FromMessage = LocalMessageAsString;
    // LocalObjectToSend.JsonData.Receiver = LocalReceiverId;
    // let LocalWSToSend = getByValue(inClients,LocalReceiverId);
    // LocalWSToSend.send(JSON.stringify(LocalObjectToSend))
}

function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        console.log("value",value);
      if (value.id === searchValue)
        return key;
    }
  }

module.exports = StartFunc;