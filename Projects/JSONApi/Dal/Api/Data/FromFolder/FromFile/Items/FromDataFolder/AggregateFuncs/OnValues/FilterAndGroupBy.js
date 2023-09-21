let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/AggregateFuncs/OnValues/FilterAndGroupBy");

exports.PostFunc = async ({ inDataPk, inFolderName, inFileNameOnly, inItemName, inMapString, inFilterString }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        DataPk: inDataPk,
        FolderName: inFolderName,
        FileNameOnly: inFileNameOnly,
        ItemName: inItemName,
        MapString: inMapString,
        FilterString: inFilterString
    });
    return await LocalReturnObject;
};