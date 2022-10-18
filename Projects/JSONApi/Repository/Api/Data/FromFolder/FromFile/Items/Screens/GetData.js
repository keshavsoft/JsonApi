let dal = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/Screens/GetData");

exports.AsArray = async ({ inDataPk, inFolderName, inFileNameWithExtension, inItemName }) => {
    return await dal.AsArray({ inDataPk, inFolderName, inFileNameWithExtension, inItemName });
};

exports.AsArrayOfObjects = async ({ inFolderName, inFileNameWithExtension, inItemName, inDataPK }) => {
    return await dal.AsArrayOfObjects({ inFolderName, inFileNameWithExtension, inItemName, inDataPK });
};