let DataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/GetDirectoriesGroup/FoldersAndFiles");

let getFunc = ({ inDataPk }) => {

    if (inDataPk > 0) {
        return DataSupply.StartFunc({ inDataPK: inDataPk })
    }

};
module.exports = { getFunc };