let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/SubTable/Row/UpdateAsObject");

exports.WithPK = async ({ inDataPK, inJsonConfig, inItemConfig, inPostData, inRowPK, inSubTableKey, inSubTableRowPK }) => {
    let LocalDataToReturn = await CommonDataSupply.WithTransformBeforeSave({
        UserPK: inDataPK,
        JsonConfig: inJsonConfig,
        ItemConfig: inItemConfig, 
        inDataToUpdate: inPostData, 
        MainRowPK: inRowPK, 
        InsertKey: inSubTableKey
    });
    return await LocalDataToReturn;
};
