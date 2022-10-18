let dal = require("../../../../../../Dal/Api/Data/FromFolder/FromFile/ItemsDisplayForFile/GetData");

exports.AsArray = async ({ inDataPk, inFolderName, inFileNameWithExtension }) => {
    return await dal.AsArray({ inDataPk, inFolderName, inFileNameWithExtension });
};