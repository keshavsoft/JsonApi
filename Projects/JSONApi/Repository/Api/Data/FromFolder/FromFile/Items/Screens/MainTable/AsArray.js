let dal = require("../../../../../../../../Dal/Api/Data/FromFolder/FromFile/Items/Screens/MainTable/AsArray");

exports.PostFunc = ({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName }) => {
    return dal.PostFunc({ inDataPK, inFolderName, inFileNameOnly, inItemName, inScreenName });
};