let CommonFromDataSupply = require("../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/AsArray/EntryFile");

let StartFunc = ({ inVerifyToken, inws, inClients, inRequest }) => {
    let LocalFolderName = "ForChat";
    let LocalFileName = "ConnectedClients";
    let LocalItemName = "MetadataAsArray";
    const metadata = inClients.get(inws);
    let LocalFromForExistence;

    if (inVerifyToken === undefined === false) {


        const ip = inRequest.socket.remoteAddress;
        metadata.UserInfo = {};
        metadata.UserInfo.remoteAddress = ip;
        metadata.UserInfo.UserPk = inVerifyToken.UserName;

        LocalFromForExistence = CommonFromDataSupply.StartFunc(
            {
                inFolderName: LocalFolderName,
                inFileNameOnly: LocalFileName,
                inItemName: LocalItemName,
                inDataPK: inVerifyToken.DataPk,
                inDataToInsert: metadata
            });
    };

    return LocalFromForExistence;
};

module.exports = StartFunc;
