let StartFunc = ({ inwss, inMetadata, LocalJsonData, inClients }) => {
    let LocalReceiverId = LocalJsonData.ReceiverId;
    let LocalMessageAsString = LocalJsonData.Message;
    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "OneToOneMessage";
    LocalObjectToSend.JsonData = {};
    LocalObjectToSend.JsonData.FromName = inMetadata.Name;
    LocalObjectToSend.JsonData.FromId = inMetadata.id;
    LocalObjectToSend.JsonData.FromMessage = LocalMessageAsString;
    LocalObjectToSend.JsonData.Receiver = LocalReceiverId;
    let LocalWSToSend = getByValue(inClients,LocalReceiverId);
    LocalWSToSend.send(JSON.stringify(LocalObjectToSend))
}

function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        console.log("value",value);
      if (value.id === searchValue)
        return key;
    }
  }

module.exports = StartFunc;