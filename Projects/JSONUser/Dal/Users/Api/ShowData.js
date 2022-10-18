let CommonUserFuncs = require("../../../../../DataSupply/Fs/LoginFolder/UserDataJson/PullData/FromFile");

let ShowData = async () => {
    let LocalReturnData = await CommonUserFuncs.StartFunc();

    if (LocalReturnData.KTF) {
        return await LocalReturnData.JsonData.data;
    }
};

module.exports = { ShowData };