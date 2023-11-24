let CommonFromDataSupply = require("../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromFolderFileItemName");

let StartFunc = ({ inVerifyToken, inItemName }) => {
  let LocalFolderName = "ForChat";
  let LocalFileName = "ChatHistory";

  let LocalItemName = inItemName;

  let LocalDataNeeded = CommonFromDataSupply.StartFunc({
    inFolderName: LocalFolderName,
    inFileNameOnly: LocalFileName,
    inItemName: LocalItemName,
    inDataPK: inVerifyToken.DataPk,
  });

  

  return LocalDataNeeded;
};

module.exports = StartFunc;