let CommonFromDataSupply = require("../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/AsArray/EntryFile");

let StartFunc = ({ inVerifyToken , inws, inClients, inMessage }) => {
    let LocalFolderName = "ForChat";
    let LocalFileName = "ChatHistory";
    
    const metadata = inClients.get(inws);

    let LocalItemName = metadata.id;

    let LocalFromForExistence = CommonFromDataSupply.StartFunc(
        {
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inItemName: LocalItemName,
            inDataPK: inVerifyToken.DataPk,
            inDataToInsert: metadata
        });
};

module.exports = StartFunc;

