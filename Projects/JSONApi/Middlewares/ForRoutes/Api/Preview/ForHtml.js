let dal = require("../../../Dal/Api/Preview/ForHtml");

exports.ShowData = async ({ inDataPK }) => {
    return await dal.ShowData({ inDataPK });
};

exports.Bulk = ({ inJsonConfig, inItemConfig, inUserName, callback }) => {
    dal.Bulk(inJsonConfig, inItemConfig, inUserName, (data, err) => {
        callback(data, err);
    });
};
