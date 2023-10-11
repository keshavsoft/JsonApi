let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/SaveRow/WithPkTimeStamp");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inItemName, inDataPK, inDataToInsert }) => {
    return dal.PostFunc({ inFolderName, inFileNameOnly, inItemName, inDataPK, inDataToInsert });
};