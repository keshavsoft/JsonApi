let CommonFromDataSupply = require("../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/ItemNameInsert/ItemNameAsArray");

let StartFunc = ({ inVerifyToken, inws, inClients }) => {
    let LocalFolderName = "ForChat";
    let LocalFileName = "ChatHistory";
    const metadata = inClients.get(inws);
    let LocalItemName = metadata.id;

    let LocalFromForExistence = CommonFromDataSupply.StartFuncNoAsync(
        {
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inItemName: LocalItemName,
            inDataPK: inVerifyToken.DataPk,
        });
};

module.exports = StartFunc;
