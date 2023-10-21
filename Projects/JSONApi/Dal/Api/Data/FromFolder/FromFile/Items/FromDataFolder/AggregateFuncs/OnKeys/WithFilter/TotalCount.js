let CommonDataSupply = require("../../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/AggregateFuncs/OnKeys/WithFilter/TotalCount");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inFilterString }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        inDataPK,
        FolderName: inFolderName,
        FileNameOnly: inFileNameOnly,
        ItemName: inItemName,
        FilterString: inFilterString
    });
    
    return await LocalReturnObject;
};