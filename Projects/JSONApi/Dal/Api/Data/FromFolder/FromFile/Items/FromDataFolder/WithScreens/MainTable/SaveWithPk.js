let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/WithChecking/CheckForPk");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inItemName, inDataPK, inDataToInsert }) => {
    let LocalReturnObject = CommonDataSupply.StartFunc({
        inFolderName: inFolderName,
        inFileNameOnly: inFileNameOnly,
        inItemName: inItemName,
        inDataPK: inDataPK,
        inDataToInsert: inDataToInsert
    });

    return LocalReturnObject;
};


