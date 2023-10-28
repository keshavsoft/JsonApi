let CommonDataSupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/PushData/GeneratePkWithTimeStamp/SubTableCheck");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inItemName, inScreenname, inDataPK, inDataToInsert }) => {

    let LocalReturnObject = CommonDataSupply.StartFunc({
        inFolderName: inFolderName,
        inFileNameOnly: inFileNameOnly,
        inItemName: inItemName,
        inScreenName: inScreenname,
        inDataPK: inDataPK,
        inDataToInsert: inDataToInsert
    });

    return LocalReturnObject;
};


