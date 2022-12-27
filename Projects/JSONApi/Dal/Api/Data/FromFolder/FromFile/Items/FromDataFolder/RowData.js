//let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/Pull");
//let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromFolderFileItemName");
let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromPK");

exports.PostFunc = async ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inJsonPk }) => {
    let LocalReturnObject = await CommonDataSupply.StartFunc({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName,
        inJsonPk
    });
    console.log("LocalReturnObject : ", LocalReturnObject);
    return await LocalReturnObject;
};
