let CommonDataSupply = require("../../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/AggregateFuncs/OnValues/GroupBy");

exports.PostFunc = async ({ inDataPk, inFolderName, inFileNameOnly, inItemName, inMapString }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        DataPk: inDataPk,
        FolderName: inFolderName,
        FileNameOnly: inFileNameOnly,
        ItemName: inItemName,
        MapString: inMapString
    });
    return await LocalReturnObject;
};