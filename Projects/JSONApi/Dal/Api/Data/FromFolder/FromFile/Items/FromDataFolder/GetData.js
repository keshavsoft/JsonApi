let CommonDataSupply = require("../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/PullFuncs/AsArray");

exports.UsingFolderAndFile = async ({ inDataPK, inFolderName, inFileNameWithExtension }) => {
    let LocalReturnObject = {
        KTF: true,
        DataFromServer: ""
    };

    LocalReturnObject.DataFromServer = await CommonDataSupply.FromFolderFile({ inDataPK, inFolderName, inFileNameWithExtension  });
    return await LocalReturnObject;
};
