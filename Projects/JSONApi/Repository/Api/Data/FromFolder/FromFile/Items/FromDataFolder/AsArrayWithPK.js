let dal = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName }) => {
    return await dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName });
};