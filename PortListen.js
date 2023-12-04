// let CommonChatFolder = require("./DataSupply/Fs/Config/JSONFolder/CommonChatFolder/JsonFile/PushDataToFile/CreateFileOnly");

let StartFunc = () => {
    console.log(`Listening in some local port...`);

    // console.log(`Listening in port : ${port}`);
    // console.log(`Click to open : http://localhost:${port}`);
    process.env.UUID = uuidv4();
//    LocalFuncToWebSocketAsFile();
};

// let LocalFuncToWebSocketAsFile = () => {
//     let LocalFolderName = "ForChat";
//     //let LocalFileNameOnly = "ConnectedClients";

//     let LocalFileNameOnly = process.env.UUID;

//     // let LocalItemName = process.env.UUID;

//     CommonChatFolder.StartFunc({
//         inFileNameOnly: LocalFileNameOnly
//     });
// };

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

module.exports = StartFunc;