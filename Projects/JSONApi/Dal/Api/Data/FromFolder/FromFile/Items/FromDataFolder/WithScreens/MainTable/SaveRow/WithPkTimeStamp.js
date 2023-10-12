// let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/GeneratePk/EntryFile");
// let CommonDataSupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/PushData/GeneratePkWithTimeStamp/EntryFile");
let CommonDataSupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/PushData/WithChecking/CheckForPk");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inItemName, inScreenname, inDataPK, inDataToInsert }) => {

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


