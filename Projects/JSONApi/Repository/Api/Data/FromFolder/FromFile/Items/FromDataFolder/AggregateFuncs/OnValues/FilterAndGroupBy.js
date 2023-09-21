let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnValues/FilterAndGroupBy");

exports.PostFunc = async ({ inDataPk, inFolderName, inFileNameOnly, inItemName, inMapString, inFilterString }) => {
    return await dal.PostFunc({ inDataPk, inFolderName, inFileNameOnly, inItemName, inMapString, inFilterString });
};