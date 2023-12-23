let dal = require("../../../../../Dal/Api/Data/FromFolder/FromFile/GetData");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inDataPK }) => {
    return dal.PostFunc({ inFolderName, inFileNameOnly, inDataPK });
};