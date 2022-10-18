let dal = require("../../../Dal/Users/Api/Create");

exports.Create = async ({ inUserPK, inUserName, inPassword, inEmail }) => {
    let LocalReturnData = await dal.Create({ inUserPK, inUserName, inPassword, inEmail });

    return await LocalReturnData;
};

exports.Admin = async ({ inUserName, inPassword, inEmail }) => {
    let LocalReturnData = await dal.Admin({ inUserName, inPassword, inEmail });

    return await LocalReturnData;
};

exports.Insert = async ({ inUserName, inPassword, inEmail }) => {
    let LocalReturnData = await dal.Insert({ inUserName, inPassword, inEmail });

    return await LocalReturnData;
};

