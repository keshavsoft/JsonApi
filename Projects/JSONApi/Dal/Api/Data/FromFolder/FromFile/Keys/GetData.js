//let CommonDataSupply = require("../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/AsArray");

let CommonDataSupply = require("../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/PullDataFromFile/KeysAsArray");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inDataPK }) => {
    let LocalDataToReturn = CommonDataSupply.StartFunc({ inFolderName, inFileNameOnly, inDataPK });

    return LocalDataToReturn;
};
