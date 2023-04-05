let dal = require("../../../../../../../../../Dal/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Images/Delete/DeleteFuncs")

exports.DeleteFunc = ({ inFolderName, inFileNameOnly, inItemName, inRowPk, inDataPK }) => {
    return dal.DeleteFunc({ inFolderName, inFileNameOnly, inItemName, inRowPk, inDataPK });
};