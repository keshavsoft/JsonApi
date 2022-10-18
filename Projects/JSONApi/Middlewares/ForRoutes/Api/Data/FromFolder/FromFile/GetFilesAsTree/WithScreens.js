let dal = require("../../../../../../Dal/Api/Data/FromFolder/FromFile/GetFilesAsTree/WithScreens");

exports.FileItemOnly = async ({ inDataPK, inFolderName }) => {
    return await dal.FileItemOnly({ inDataPK, inFolderName });
};

exports.FileItemAndScreen = async ({ inDataPK, inFolderName }) => {
    return await dal.FileItemAndScreen({ inDataPK, inFolderName });
};