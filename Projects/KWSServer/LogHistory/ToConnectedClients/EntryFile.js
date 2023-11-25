//let CommonFromDataSupply = require("../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/AsArray/EntryFile");
let CommonWithContent = require("../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/UserJsonFile/ItemName/PushData/ItemNameInsert/WithContent");

let StartFunc = ({ inVerifyToken, inws, inClients, inRequest }) => {
    let LocalFolderName = "ForChat";
    // let LocalFileName = "ConnectedClients";

    let LocalFileName = process.env.UUID;

    //let LocalItemName = "MetadataAsArray";
    //let LocalItemName = process.env.UUID;
    const metadata = inClients.get(inws);

    let LocalItemName = metadata.id;

    let LocalFromForExistence;

    if (inVerifyToken === undefined === false) {
        const ip = inRequest.socket.remoteAddress;
        metadata.UserInfo = {};
        metadata.UserInfo.remoteAddress = ip;
        metadata.UserInfo.UserPk = inVerifyToken.UserName;

        LocalFromForExistence = CommonWithContent.StartFunc({
            inFolderName: LocalFolderName,
            inFileNameOnly: LocalFileName,
            inItemName: LocalItemName,
            inDataPK: inVerifyToken.DataPk,
            inItemNameContent: {
                metadata,
                Chat: []
            }
        });
    };

    return LocalFromForExistence;
};

module.exports = StartFunc;
