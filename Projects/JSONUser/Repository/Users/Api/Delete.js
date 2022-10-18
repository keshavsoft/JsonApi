let dal = require("../../../Dal/Users/Api/Delete");

exports.Delete = ({ inUserPK, inUserName }) => {
    return new Promise((resolve, reject) => {
        dal.Delete({ inUserPK, inUserName }).then(resolve).catch(reject);
    });
};