let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnValues/FilterAsArray");

exports.PostFunc = async ({ inDataPk, inFolderName, inFileNameOnly, inItemName, inFilterString }) => {
    return await dal.PostFunc({ inDataPk, inFolderName, inFileNameOnly, inItemName, inFilterString });
};