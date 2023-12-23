let CommonDataSupply = require("../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/PullDataFromFile/FromFolderAndFile");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inDataPK }) => {
    let LocalDataToReturn = CommonDataSupply.StartFunc({ inFolderName, inFileNameOnly, inDataPK });

    return LocalDataToReturn;
};
