let dal = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowData");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk }) => {
    return await dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk });
};

exports.DeleteFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk }) => {
    return await dal.DeleteFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk });
};

exports.PatchFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk, inDataToUpdate }) => {
    return await dal.PatchFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk, inDataToUpdate });
};

