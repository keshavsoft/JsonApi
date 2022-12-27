//let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/Pull");
let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromFolderFileItemName");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName }) => {
    let LocalReturnObject = await CommonDataSupply.ReturnAsArrayWithPK({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName
    });
    
    return await LocalReturnObject;
};
