let dal = require("../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/GetData");

exports.AsArray = async ({ inDataPk, inJsonConfig }) => {
    return await dal.AsArray({ inDataPk, inJsonConfig });
};

exports.UsingFolderAndFile = async ({inFolderName, inFileNameWithExtension, inDataPK }) => {
    return await dal.UsingFolderAndFile({ inFolderName, inFileNameWithExtension, inDataPK });
};
