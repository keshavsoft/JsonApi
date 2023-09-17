let isStringified = (jsonValue) => { // use this function to check
    try {
        console.log("need to parse");
        return JSON.parse(jsonValue);
    } catch (err) {
        console.log("not need to parse");

        return jsonValue;
    }
};

let insertToClientsInfo = ({ inComingMessage, inClientsInfo, inClientId }) => {
    const json = isStringified(inComingMessage);

    if (typeof json == "object") {
        console.log("string is a valid json")
    } else {
        console.log("string is not a valid json")
    }

    try {

        // console.log("inComingMessage : ", inComingMessage);

        // let LocalIncomingMessageAsJson = JSON.parse(inComingMessage, (key, value) => {

        //     console.log("key, value : ", key, value);

        // });

        // if ("inMessageType" in LocalIncomingMessageAsJson) {
        //     inClientsInfo.set(LocalIncomingMessageAsJson.inDataAsObject.inUserName, {
        //         FirmName: LocalIncomingMessageAsJson.inDataAsObject.inFirmName,
        //         ClientId: inClientId
        //     });
        // };
    } catch (error) {
        console.log("error : ", error);
    };
};

let SwitchOnIncomingMessage = ({ inComingMessage, inWs, inClientsInfo, inUserName }) => {
    switch (inComingMessage) {
        case "Back":
            inWs.send("------------");
            break;
        case "GiveDesktopClients":
            //      inWs.send("------------GiveDesktopClients", inUserName);
            let LocalFoundClientInfo = inClientsInfo.get(inUserName);
            let LocalJsonToSend = {};

            if (LocalFoundClientInfo !== undefined) {
                if ("FirmName" in LocalFoundClientInfo) {
                    LocalJsonToSend.FirmName = LocalFoundClientInfo.FirmName;

                    //  inWs.send(`FirmName : ${LocalFoundClientInfo.FirmName}`);
                    inWs.send(JSON.stringify(LocalJsonToSend));

                };
            };

            break;

        default:
            break;
    };
};

module.exports = { insertToClientsInfo, SwitchOnIncomingMessage }
