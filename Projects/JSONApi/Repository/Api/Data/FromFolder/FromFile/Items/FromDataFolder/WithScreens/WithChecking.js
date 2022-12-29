let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking");

exports.CreateNewFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName }) => {
    return await dal.CreateNewFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName });
};

exports.InsertFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inDataToInsert }) => {
    return await dal.InsertFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inDataToInsert });
};

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk }) => {
    return await dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk });
};

exports.DeleteFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk }) => {
    return await dal.DeleteFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk });
};

exports.PatchFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inDataToUpdate }) => {
    return await dal.PatchFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName, inJsonPk, inDataToUpdate });
};

