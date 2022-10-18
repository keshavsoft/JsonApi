let dal = require("../../../Dal/Users/Api/Setup");

exports.Basic = async ({ inUserPK }) => {
    return await dal.Basic({ inUserPK });
};
