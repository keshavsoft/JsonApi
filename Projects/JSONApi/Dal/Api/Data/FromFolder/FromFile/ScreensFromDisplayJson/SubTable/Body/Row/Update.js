let CommonDataSupply = require("../../../../../../../../../../../DataSupply/CommonTableFuncs/SubTable/Update");

exports.WithPK = async ({ inDataPK, inJsonConfig, inItemConfig, inPostData, inRowPK, inSubTableKey, inSubTableRowPK }) => {
    let LocalDataToReturn = await CommonDataSupply.WithTransformBeforeSave({
        inUserPK: inDataPK,
        inJsonConfig,
        inItemConfig, inPostData, inRowPK, inSubTableKey, inSubTableRowPK
    });
    
    return await LocalDataToReturn;
};
