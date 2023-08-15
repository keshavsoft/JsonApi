let dal = require("../../../../Dal/Api/Data/FromFolder/TreeWitData");

exports.GetFunc = async ({ inDataPK }) => {
    return await dal.GetFunc({ inDataPK });
};
