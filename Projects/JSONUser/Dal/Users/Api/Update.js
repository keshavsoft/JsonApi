let CommonUserFuncs = require("../../../../../DataSupply/Fs/Users/PullData");

let Update = ({ inUserPK, inUserName }) => {
    return new Promise((resolve, reject) => {
        if (inUserPK > 0) {
            CommonUserFuncs.Update({ inUserPK, inUserName });
        };
    });
};

module.exports = { Update };