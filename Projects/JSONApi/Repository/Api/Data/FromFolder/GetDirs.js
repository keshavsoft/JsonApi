let dal = require("../../../../Dal/Api/Data/FromFolder/GetDirs");

exports.AsArray = async ({ inDataPk }) => {
    return await dal.AsArray({ inDataPk });
};

exports.AsTree = async ({ inDataPk }) => {
    return await dal.AsTree({ inDataPk });
};

exports.MenuWithDesign = async ({ inDataPK }) => {
    return await dal.MenuWithDesign({ inDataPK });
};

