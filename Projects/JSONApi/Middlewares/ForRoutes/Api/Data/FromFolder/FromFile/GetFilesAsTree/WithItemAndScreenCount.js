let dal = require("../../../../../../Dal/Api/Data/FromFolder/FromFile/GetFilesAsTree/WithItemAndScreenCount");

exports.AsArrayOfObjects = async ({ inDataPK, inFolderName }) => {
    return await dal.AsArrayOfObjects({ inDataPK, inFolderName });
};

