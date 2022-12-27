let dal = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowData");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk }) => {
    return await dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk });
};