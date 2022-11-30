let dal = require("../../../Dal/Users/Api/Update");

exports.Update = ({ inUserPK, inUserName }) => {
    return new Promise((resolve, reject) => {
        dal.Update({ inUserPK, inUserName }).then(resolve).catch(reject);
    });
};