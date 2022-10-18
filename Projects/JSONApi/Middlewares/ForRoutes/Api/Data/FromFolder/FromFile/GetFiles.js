let dal = require("../../../../../Dal/Api/Data/FromFolder/FromFile/GetFiles");

exports.AsArray = async ({ inDataPk, inFolderName }) => {
    return await dal.AsArray({ inDataPk, inFolderName });
};

exports.AsTreeFilesWithItemsAndRowCount = async ({ inDataPk, inFolderName }) => {
    return await dal.AsTreeFilesWithItemsAndRowCount({ inDataPk, inFolderName });
};