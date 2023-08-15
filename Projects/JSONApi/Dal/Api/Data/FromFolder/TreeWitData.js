let CommonFromDataSupply = require("../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/getDirectoriesWithDataAsTree");

exports.GetFunc = ({ inDataPK }) => {
    let LocalFromDataSupply = CommonFromDataSupply.StartFunc({ inDataPK });
    
    return LocalFromDataSupply;
};
