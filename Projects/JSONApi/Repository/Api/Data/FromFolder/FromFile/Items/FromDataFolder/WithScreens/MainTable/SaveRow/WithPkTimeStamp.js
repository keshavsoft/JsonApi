let dal = require("../../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/MainTable/SaveRow/WithPkTimeStamp");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inItemName, inScreenname, inDataPK, inDataToInsert, inDatakUserName }) => {
    return dal.PostFunc({ inFolderName, inFileNameOnly, inItemName, inScreenname, inDataPK, inDataToInsert, inDatakUserName });
};