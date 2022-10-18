let dal = require("../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensDisplayForFile/GetData");

exports.AsArray = async ({ inDataPk, inFolderName, inFileNameWithExtension }) => {
    return await dal.AsArray({ inDataPk, inFolderName, inFileNameWithExtension });
};