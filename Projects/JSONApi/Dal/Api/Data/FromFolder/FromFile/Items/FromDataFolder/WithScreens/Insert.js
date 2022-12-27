//let CommonDataSupply = require("../../../../../../../../../../DataSupply/CommonTableFuncs/MainTable/PushFuncs/Save");
//let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/FromFolderFileItemName");
let CommonDataSupply = require("../../../../../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/ConsiderDisplayJson/PushData/WithChecking");

exports.PostFunc = async ({ inFolderName, inFileNameOnly, inItemName, inScreenName, inDataPK, inDataToInsert }) => {

    return await CommonDataSupply.StartFunc({ inFolderName, inFileNameOnly, inItemName, inScreenName, inDataPK, inDataToInsert });
    //return await LocalReturnObject;
};
