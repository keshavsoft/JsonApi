let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/AggregateFuncs/OnKeys/Max");
let CommonDataSupplyForMaxWithFilterInCount = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/AggregateFuncs/OnKeys/MaxWithFilterInCount");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        inDataPK,
        FolderName: inFolderName,
        FileNameOnly: inFileNameOnly,
        ItemName: inItemName
    });

    return await LocalReturnObject;
};

exports.paramsFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inFilterString, inCount }) => {
    let LocalReturnObject = await CommonDataSupplyForMaxWithFilterInCount.StartFunc({
        inDataPK,
        FolderName: inFolderName,
        FileNameOnly: inFileNameOnly,
        ItemName: inItemName,
        FilterString: inFilterString,
        inCount
    });

    return await LocalReturnObject;
};