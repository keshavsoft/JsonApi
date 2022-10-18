let CommonDataSupply = require("../../../../../../DataSupply/Fs/PreLoad/FromPreLoadJson");

exports.PreLoad = async ({ inDataPk }) => {
    let LocalDataToReturn = await CommonDataSupply.Masters({ inDataPk });
    return await LocalDataToReturn;
};
