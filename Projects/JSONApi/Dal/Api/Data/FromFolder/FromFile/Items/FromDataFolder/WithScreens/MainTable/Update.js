let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/MainTable/Row/Update");

exports.PostFunc = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData, inRowPK }) => {
    let LocalReturnObject = await CommonDataSupply.KeysOnly({
        inJsonConfig,
        inItemConfig,
        inUserPK: inDataPK,
        inPostData,
        inJsonPK: inRowPK
    });

    return await LocalReturnObject;
};


