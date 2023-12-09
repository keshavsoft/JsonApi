let CommonFromDataSupply = require("../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ValueAsArray/Filter/IsEqual");

let StartFunc = ({ inVerifyToken, inItemName }) => {
  let LocalFolderName = "ForChat";
  // let LocalFileName = "ChatHistory";
  let LocalFileName = process.env.UUID;

  let LocalItemName = inItemName;
  let LocalColumnName = "Chat";
  let LocalInValueToCheck = "LoopItem.Type === 'OneToOneMessage'";

  let LocalDataNeeded = CommonFromDataSupply.StartFunc({
    inFolderName: LocalFolderName,
    inFileNameOnly: LocalFileName,
    inItemName: LocalItemName,
    inColumnName: LocalColumnName,
    inValueToCheck: LocalInValueToCheck,
    inDataPK: inVerifyToken.DataPk,
  });

  return LocalDataNeeded;
};

module.exports = StartFunc;