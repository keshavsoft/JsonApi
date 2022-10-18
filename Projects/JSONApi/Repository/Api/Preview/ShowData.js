let dal = require("../../../Dal/Api/Preview/ShowData");

exports.ShowData = async ({ inJsonConfig, inItemConfig, inPK, inDataPK }) => {
    return await dal.ShowData({ inJsonConfig, inItemConfig, inPK, inDataPK });
};

exports.FromDataFolder = async ({ inJsonConfig, inItemConfig, inPK, inDataPK }) => {
    return await dal.FromDataFolder({ inJsonConfig, inItemConfig, inPK, inDataPK });
};

exports.Bulk = ({ inJsonConfig, inItemConfig, inUserName, callback }) => {
    dal.Bulk(inJsonConfig, inItemConfig, inUserName, (data, err) => {
        callback(data, err);
    });
};
