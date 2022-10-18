let Dal = require("../../../../../../../Dal/Api/Data/FromFolder/FromFile/Insert/Bulk/WithCors")

exports.ToFolderAndFile = async ({ LocalDataPk, LocalFolderName }) => {
    return Dal.ToFolderAndFile({ LocalDataPk, LocalFolderName });
}

