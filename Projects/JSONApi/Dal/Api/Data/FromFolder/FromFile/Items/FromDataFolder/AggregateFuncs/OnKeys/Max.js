let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/AggregateFuncs/OnKeys/Max");
let CommonDataSupplyForMaxInCount = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/AggregateFuncs/OnKeys/MaxInCount");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        inDataPK,
        FolderName: inFolderName,
        FileNameOnly: inFileNameOnly,
        ItemName: inItemName
    });

    return await LocalReturnObject;
};

exports.paramsFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName,inCount }) => {
    let LocalReturnObject = await CommonDataSupplyForMaxInCount.StartFunc({
        inDataPK,
        FolderName: inFolderName,
        FileNameOnly: inFileNameOnly,
        ItemName: inItemName,
        inCount
    });

    return await LocalReturnObject;
};