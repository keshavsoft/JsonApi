let DataSupply = require("../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/ConfigFolder/GetDirectoriesGroup/FoldersAndFiles");

let getFunc = ({ inDataPk }) => {

    return DataSupply.StartFunc({ inDataPK: inDataPk });
};

module.exports = { getFunc }

