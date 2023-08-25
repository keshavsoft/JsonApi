// let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/FilterData/ByColumn/IsEqual");
let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromPK");

exports.PostFunc = async ({ inFolderName, inFileNameOnly, inItemName, inRowPk, inDataPK }) => {
    return await CommonDataSupply.StartFunc({ inFolderName, inFileNameOnly, inItemName, inJsonPk:inRowPk, inDataPK });
};
