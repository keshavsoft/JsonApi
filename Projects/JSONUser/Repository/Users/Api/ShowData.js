let dal = require("../../../Dal/Users/Api/ShowData");

exports.ShowData = async () => {
    return await dal.ShowData();
};