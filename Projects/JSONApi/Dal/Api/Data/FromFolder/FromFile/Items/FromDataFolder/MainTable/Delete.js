let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/MainTable/Row/Delete");

exports.PostFunc = async ({ inJsonConfig, inItemConfig, inDataPK, inPostData, inRowPK }) => {
    let LocalReturnObject = await CommonDataSupply.FromRowPK({
        inFolderName: inJsonConfig.inFolderName,
        inFileNameWithExtension: inJsonConfig.inJsonFileName,
        inItemName: inItemConfig.inItemName,
        inDataPK: inDataPK,
        inJsonPK: inRowPK
    });

    return await LocalReturnObject;
};


