let DataSupply = require("../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/GetDirectoriesGroup/FoldersAndFiles");

let getFunc = ({ inDataPk }) => {

    return DataSupply.StartFunc({ inDataPK: inDataPk });
};

module.exports = { getFunc }

