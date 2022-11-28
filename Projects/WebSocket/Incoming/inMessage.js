let insertToClientsInfo = ({ inComingMessage, inClientsInfo, inClientId }) => {
    try {

        let LocalIncomingMessageAsJson = JSON.parse(inComingMessage);

        //console.log("inComingMessage : ", inComingMessage, JSON.parse(inComingMessage));
        if ("inMessageType" in LocalIncomingMessageAsJson) {

            console.log("kkkkk : ", LocalIncomingMessageAsJson);

            //inClientsInfo.set(inClientId, LocalIncomingMessageAsJson.inDataAsObject);

            inClientsInfo.set(LocalIncomingMessageAsJson.inDataAsObject.inUserName, {
                FirmName: LocalIncomingMessageAsJson.inDataAsObject.inFirmName,
                ClientId: inClientId
            });

        };
        console.log("inClientsInfo : ", inClientsInfo);

    } catch (error) {

    };
};

let SwitchOnIncomingMessage = ({ inComingMessage, inWs, inClientsInfo, inUserName }) => {

    console.log("switch : ", inUserName, inClientsInfo);


    switch (inComingMessage) {
        case "Back":
            inWs.send("------------");
            break;
        case "GiveDesktopClients":
            //    inWs.send("------------GiveDesktopClients", inUserName);
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
