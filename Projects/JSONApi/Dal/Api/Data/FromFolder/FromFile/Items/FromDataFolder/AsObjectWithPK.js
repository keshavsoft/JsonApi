//let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/Pull");
let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PullData/FromFolderFileItemName");

exports.PostFunc = ({ inDataPK, inFolderName, inFileNameOnly, inItemName }) => {
    let LocalFromDataSupply = CommonDataSupply.StartFunc({
        inDataPK,
        inFolderName, inFileNameOnly, inItemName
    });

    return LocalFromDataSupply;
};
