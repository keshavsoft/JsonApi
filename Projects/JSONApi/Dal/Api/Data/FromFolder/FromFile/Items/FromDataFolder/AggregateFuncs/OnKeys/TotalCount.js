let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/AggregateFuncs/OnKeys/TotalCount");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        inDataPK,
        FolderName: inFolderName,
        FileNameOnly: inFileNameOnly,
        ItemName: inItemName
    });
    
    return await LocalReturnObject;
};