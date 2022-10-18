let dal = require("../../../../Dal/Api/Data/Masters/PreLoad");

exports.PreLoad = async ({ inDataPk }) => {
    return await dal.PreLoad({ inDataPk });
};