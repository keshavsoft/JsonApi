let CommonUserFuncs = require("../../../../../DataSupply/Fs/Users/PullData");

let Delete = ({ inUserPK, inUserName }) => {
    return new Promise((resolve, reject) => {
        if (inUserPK > 0) {
            CommonUserFuncs.Delete({ inUserPK, inUserName });
        };
    });
};

module.exports = { Delete };