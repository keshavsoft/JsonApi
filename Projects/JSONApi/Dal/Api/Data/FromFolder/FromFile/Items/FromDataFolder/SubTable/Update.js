let CommonDataSupply = require("../../../../../../../../../../../DataSupply/CommonTableFuncs/SubTable/Update");

exports.WithPK = async ({ inDataPK, inJsonConfig, inItemConfig, inPostData, inRowPK, inSubTableKey, inSubTableRowPK }) => {
    return "this From Dal";
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
