let dal = require("../../../../../../Dal/Api/Data/FromFolder/FromFile/Keys/GetData");

exports.PostFunc = ({ inFolderName, inFileNameOnly, inDataPK }) => {
    return dal.PostFunc({ inFolderName, inFileNameOnly, inDataPK });
};
