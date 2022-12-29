let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/SubTable/WithChecking");

exports.InsertFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inSubTableKey, inDataToInsert }) => {
    return await dal.InsertFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inSubTableKey, inDataToInsert });
};

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk, inSubTableKey }) => {
    return await dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk, inSubTableKey });
};

exports.DeleteFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk }) => {
    return await dal.DeleteFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk });
};

exports.PatchFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inDataToUpdate }) => {
    return await dal.PatchFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inDataToUpdate });
};

