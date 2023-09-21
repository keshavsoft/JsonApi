let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/AggregateFuncs/OnValues/FilterAsArray");

exports.PostFunc = async ({ inDataPk, inFolderName, inFileNameOnly, inItemName, inFilterString }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        DataPk: inDataPk,
        FolderName: inFolderName,
        FileNameOnly: inFileNameOnly,
        ItemName: inItemName,
        FilterString: inFilterString
    });
    return await LocalReturnObject;
};