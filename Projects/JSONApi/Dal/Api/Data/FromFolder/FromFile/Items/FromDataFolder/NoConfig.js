let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/Pull");

exports.GetFunc = async ({ inDataPk, inFolderName, inFileNameWithExtension, inItemName }) => {
    let LocalReturnObject = {
        KTF: true,
        DataFromServer: ""
    };

    LocalReturnObject.DataFromServer = await CommonDataSupply.FromItemNameAsArray({ inDataPk, inFolderName, inFileNameWithExtension, inItemName });
    return await LocalReturnObject;
};
