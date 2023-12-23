let dal = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK");

exports.PostFunc = ({ inDataPK, inFolderName, inFileNameOnly, inItemName }) => {
    return dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName });
};