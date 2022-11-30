let dal = require("../../../Dal/Users/Api/Save");

exports.Save = async ({ inUserName, inPassword }) => {
    return await dal.Save({ inUserName, inPassword });
};

exports.WithDataPk = async ({ inDataPk, inUserName, inPassword }) => {
    return await dal.WithDataPk({ inDataPk, inUserName, inPassword });
};