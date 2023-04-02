let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual");

exports.PostFunc = async ({ inFolderName, inFileNameOnly, inItemName, inColumnName, inValueToCheck, inDataPK }) => {
    return await dal.PostFunc({ inFolderName, inFileNameOnly, inItemName, inColumnName, inValueToCheck, inDataPK });
};