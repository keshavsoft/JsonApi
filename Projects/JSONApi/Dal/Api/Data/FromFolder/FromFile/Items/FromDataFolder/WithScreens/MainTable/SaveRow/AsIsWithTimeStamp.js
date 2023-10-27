let CommonDataSupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/GeneratePk/EntryFile");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inItemName, inScreenname, inDataPK, inDataToInsert }) => {

    // return "From Dal"

    let LocalReturnObject = CommonDataSupply.StartFunc({
        inFolderName: inFolderName,
        inFileNameOnly: inFileNameOnly,
        inItemName: inItemName,
        inScreenname: inScreenname,
        inDataPK: inDataPK,
        inDataToInsert: inDataToInsert
    });

    return LocalReturnObject;
};


