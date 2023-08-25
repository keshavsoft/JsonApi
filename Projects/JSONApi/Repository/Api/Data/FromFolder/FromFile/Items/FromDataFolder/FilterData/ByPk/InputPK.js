let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByPk/InputPK");

exports.PostFunc = async ({ inFolderName, inFileNameOnly, inItemName, inRowPk, inDataPK }) => {
    return await dal.PostFunc({ inFolderName, inFileNameOnly, inItemName, inRowPk, inDataPK });
};