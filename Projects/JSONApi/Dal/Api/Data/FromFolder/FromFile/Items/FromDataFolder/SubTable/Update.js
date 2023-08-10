let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/SubTable/Row/UpdateWithOutScreen");

exports.WithPK = async ({ inDataPK, inJsonConfig, inItemConfig, inPostData, inRowPK, inSubTableKey, inSubTableRowPK }) => {
    let LocalDataToReturn = await CommonDataSupply.WithTransformBeforeSave({
        UserPK: inDataPK,
        JsonConfig: inJsonConfig,
        ItemConfig: inItemConfig, 
        inDataToUpdate: inPostData, 
        MainRowPK: inRowPK, 
        InsertKey: inSubTableKey, 
        SubTableRowPK: inSubTableRowPK
    });

    return await LocalDataToReturn;
};
