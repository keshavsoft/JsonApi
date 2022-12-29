//let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/Pull");
//let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromFolderFileItemName");
let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromPK");
let CommonDataSupplyDelete = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/DeleteData/FromPK");
let CommonDataSupplyUpdateData = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/UpdateData/FromFolderFileItemName");
//let CommonDataSupplyInsertNew = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/PushData/InsertNew");
let CommonDataSupplyInsertNew = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/PushData/InsertNewWithChecking");
let CommonFromColumnsObject = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/UserFolder/UserFileAsFolder/DisplayJsonFile/ItemName/ScreenName/TableColumns/PullData/ForCreateNew/ColumnsObject");

exports.CreateNewFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName }) => {
    let LocalReturnObject = await CommonFromColumnsObject.StartFunc({
        inDataPK,
        inFolderName,
        inFileNameWithExtension: `${inFileNameOnly}.json`,
        inItemName,
        inScreenName
    });

    return await LocalReturnObject;
};

exports.InsertFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inDataToInsert }) => {
    let LocalReturnObject = await CommonDataSupplyInsertNew.StartFunc({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName,
        inScreenName,
        inJsonPk,
        inDataToInsert
    });

    return await LocalReturnObject;
};

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk }) => {
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


