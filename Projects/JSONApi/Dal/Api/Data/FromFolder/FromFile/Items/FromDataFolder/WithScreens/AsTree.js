let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/AsTree/ScreensWithRowCount");

exports.WithRowCount = async ({ inDataPk, inFolderName, inFileNameWithExtension }) => {
    let LocalReturnObject = {
        KTF: true,
        DataFromServer: ""
    };

    LocalReturnObject.DataFromServer = await CommonDataSupply.StartFunc({ inDataPk, inFolderName, inFileNameWithExtension });
    return await LocalReturnObject;
};
