let CommonDataSupply = require("../../../../../../DataSupply/Fs/Config/Folders/PullData/getDirectories");
let CommonAsTree = require("../../../../../../DataSupply/Fs/Config/Folders/PullData/AsTree");

exports.AsArray = async ({ inDataPk }) => {
    let LocalDataToReturn = await CommonDataSupply.StartFunc({ inDataPk });
    //console.log('LocalDataToReturn :', LocalDataToReturn);
    return await LocalDataToReturn;
};

exports.AsTree = async ({ inDataPk }) => {
    let LocalDataToReturn = await CommonAsTree.TillItems({ inDataPk });
    //console.log('LocalDataToReturn :', LocalDataToReturn);
    return await LocalDataToReturn;
};

exports.MenuWithDesign = async ({ inDataPK }) => {
    let LocalDataToReturn = await CommonDataSupply.AsArrayOfObjectsWithDesign({ inDataPK });
    //console.log('LocalDataToReturn :', LocalDataToReturn);
    return await LocalDataToReturn;
};