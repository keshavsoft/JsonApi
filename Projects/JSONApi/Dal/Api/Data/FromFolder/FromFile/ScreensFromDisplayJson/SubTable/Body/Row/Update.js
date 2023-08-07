let CommonDataSupply = require("../../../../../../../../../../../DataSupply/CommonTableFuncs/SubTable/Update");

exports.WithPK = async ({ inDataPK, inJsonConfig, inItemConfig, inPostData, inRowPK, inSubTableKey, inSubTableRowPK }) => {
    let LocalDataToReturn = await CommonDataSupply.WithTransformBeforeSave({
        UserPK: inDataPK,
        JsonConfig: inJsonConfig,
        ItemConfig: inItemConfig, 
        DataToUpdate: inPostData, 
        MainRowPK: inRowPK, 
        InsertKey: inSubTableKey, 
        SubTableRowPK: inSubTableRowPK
    });

    return await LocalDataToReturn;
};
