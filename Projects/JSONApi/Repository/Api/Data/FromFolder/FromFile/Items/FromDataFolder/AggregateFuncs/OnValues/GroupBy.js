let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnValues/GroupBy");

exports.PostFunc = async ({ inDataPk, inFolderName, inFileNameOnly, inItemName, inMapString }) => {
    return await dal.PostFunc({ inDataPk, inFolderName, inFileNameOnly, inItemName, inMapString });
};