//let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/Pull");
//let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromFolderFileItemName");
let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/ToSubTable/PushData/WithChecking");
let CommonDataSupplyDelete = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/DeleteData/FromPK");
let CommonDataSupplyUpdateData = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/UpdateData/FromFolderFileItemName");

exports.InsertFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inSubTableKey, inDataToInsert }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName,
        inScreenName,
        inMainRowPK: inJsonPk,
        inSubTableKey,
        inDataToInsert
    });

    return await LocalReturnObject;
};

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk, inSubTableKey }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName,
        inJsonPk
    });

    return await LocalReturnObject;
};

exports.DeleteFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk }) => {
    let LocalReturnObject = await CommonDataSupplyDelete.StartFunc({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName,
        inJsonPk
    });

    return await LocalReturnObject;
};

exports.PatchFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inDataToUpdate }) => {
    let LocalReturnObject = await CommonDataSupplyUpdateData.StartFunc({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName,
        inJsonPk,
        inScreenName,
        inDataToUpdate
    });

    return await LocalReturnObject;
};


