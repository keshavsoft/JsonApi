let CommonBroadcast = require('../Broadcast');
let CommonBroadcastOnly = require('../BroadcastOnly');
let CommonPrivateMessage = require('../PrivateMessage');
let CommonOnlineClients = require('../OnlineClients');
let CommonRefreshOnlineClients = require('../RefreshOnlineClients');
// let CommonSaveToJsonOnMessage = require("../LogHistory/OnMessage/EntryFile");
let CommonOneToOneMessage = require("./AsJson/OneToOneMessage");
let CommonOldMessages = require("./AsJson/OldMessages");
let CommonSaveToJsonOnMessage = require("../LogHistory/OnMessage/EntryFile");

let StartFunc = ({ inMessageAsJson, inws, inMetadata, inClients, inwss, inVerifyToken }) => {
    let LocalJsonData = inMessageAsJson;
    let LocalItemName = inMetadata.id;
    LocalJsonData.InwardMessage = true;

    CommonSaveToJsonOnMessage({
        inDataPK: inVerifyToken.DataPk,
        inItemName: LocalItemName,
        inMessage: LocalJsonData
    });

    if (LocalJsonData.From === "Service" && LocalJsonData.Type === "SysInfo") {
        inMetadata.SysMAC = LocalJsonData.SysMac;

        if (inMetadata.SysMAC==="0C9A3CEB5BC7") {
            inws.close();
        };
    };


    if (LocalJsonData.Type === "AlterClient") {
        process.env.UID = "keshav";

        LocalFuncForAlterClient({ LocalJsonData, inMetadata, inws, inClients, inwss });
    }
    if (LocalJsonData.Type === "BroadcastOnly") {

        LocalFuncForBroadcastOnly({ inws, inwss, inMetadata, LocalJsonData });
    }
    if (LocalJsonData.Type === "BroadcastAll") {

        LocalFuncForBroadcastAll({ inwss, inMetadata, LocalJsonData });
    }
    if (LocalJsonData.Type === "OneToOneMessage") {
        // process.env.UID = "OneToOne";

        CommonOneToOneMessage({ inwss, inMetadata, LocalJsonData, inClients });
    };

    if (LocalJsonData.Type === "OldMessages") {
        CommonOldMessages({ inws, inMetadata, LocalJsonData, inClients, inVerifyToken });
    };

    if (LocalJsonData.Type === "PrivateMessage") {

        LocalFuncForPrivateMessage({ inwss, inMetadata, LocalJsonData, inClients });
    }
    if (LocalJsonData.Type === "Terminate") {
        LocalFuncForTerminate({ inws, inMetadata });
    }
    if (LocalJsonData.Type === "RefreshOnlineClients") {
        LocalFuncForRefreshOnlineClients({ inClients, inwss });
    }
    if (LocalJsonData.Type === "PrivateTab") {
        LocalFuncForPrivateTab({ LocalJsonData, inws });
    }
    if (LocalJsonData.Type === "PrivateTabMessage") {
        LocalFuncForPrivateTabMessage({ LocalJsonData, inws, inMetadata });
    }

};

let LocalFuncForAlterClient = ({ LocalJsonData, inMetadata, inws, inClients, inwss }) => {

    LocalFuncForSendUserName({ LocalJsonData, inMetadata, inws });

    LocalFuncForSendClients({ inClients, inwss });

}

let LocalFuncForSendUserName = ({ LocalJsonData, inMetadata, inws }) => {
    inMetadata.Name = LocalJsonData.UserName;
    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "WSServer";
    LocalObjectToSend.JsonData = {};
    LocalObjectToSend.JsonData.Type = "UserName";
    LocalObjectToSend.JsonData.UserName = LocalJsonData.UserName;

    inws.send(JSON.stringify(LocalObjectToSend));
}

let LocalFuncForSendClients = ({ inClients, inwss }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "OnlineClients";
    LocalObjectToSend.JsonData = CommonOnlineClients({ inClients });

    CommonBroadcast({ inwss: inwss, inmessage: JSON.stringify(LocalObjectToSend) });

}

let LocalFuncForBroadcastOnly = ({ inws, inwss, inMetadata, LocalJsonData }) => {
    let LocalMessageAsString = LocalJsonData.Message;
    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "BroadcastOnly";
    LocalObjectToSend.JsonData = {};
    LocalObjectToSend.JsonData.FromName = inMetadata.Name;
    LocalObjectToSend.JsonData.FromId = inMetadata.id;
    LocalObjectToSend.JsonData.FromMessage = LocalMessageAsString;
    console.log("LocalObjectToSend", LocalObjectToSend);

    CommonBroadcastOnly({ inws, inwss: inwss, inmessage: JSON.stringify(LocalObjectToSend) });
}

let LocalFuncForBroadcastAll = ({ inwss, inMetadata, LocalJsonData }) => {
    let LocalMessageAsString = LocalJsonData.Message;
    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "BroadcastAll";
    LocalObjectToSend.JsonData = {};
    LocalObjectToSend.JsonData.FromName = inMetadata.Name;
    LocalObjectToSend.JsonData.FromId = inMetadata.id;
    LocalObjectToSend.JsonData.FromMessage = LocalMessageAsString;

    CommonBroadcast({ inwss: inwss, inmessage: JSON.stringify(LocalObjectToSend) });
}

let LocalFuncForPrivateMessage = ({ inwss, inMetadata, LocalJsonData, inClients }) => {
    let LocalMessageAsString = LocalJsonData.Message;
    let LocalReceiverName = LocalJsonData.Receiver;
    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "PrivateMessage";
    LocalObjectToSend.JsonData = {};
    LocalObjectToSend.JsonData.FromName = inMetadata.Name;
    LocalObjectToSend.JsonData.FromId = inMetadata.id;
    LocalObjectToSend.JsonData.FromMessage = LocalMessageAsString;
    LocalObjectToSend.JsonData.Receiver = LocalReceiverName;

    CommonPrivateMessage({ inwss, inmessage: JSON.stringify(LocalObjectToSend), inReceiver: LocalReceiverName, inClients });
}

let LocalFuncForTerminate = ({ inws }) => {

    inws.close();
}

let LocalFuncForRefreshOnlineClients = ({ inClients, inwss }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "RefreshOnlineClients";
    LocalObjectToSend.JsonData = CommonRefreshOnlineClients({ inClients });
    CommonBroadcast({ inwss: inwss, inmessage: JSON.stringify(LocalObjectToSend) });

}

let LocalFuncForPrivateTab = ({ LocalJsonData, inws }) => {
    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "PrivateTab";
    LocalObjectToSend.JsonData = {};
    LocalObjectToSend.JsonData.TabName = LocalJsonData.TabName;

    inws.send(JSON.stringify(LocalObjectToSend));
}

let LocalFuncForPrivateTabMessage = ({ LocalJsonData, inws, inMetadata }) => {
    let LocalMessageAsString = LocalJsonData.Message;
    let LocalReceiverName = LocalJsonData.Receiver;
    let LocalObjectToSend = {};
    LocalObjectToSend.MessageType = "PrivateTabMessage";
    LocalObjectToSend.JsonData = {};
    LocalObjectToSend.JsonData.FromName = inMetadata.Name;
    LocalObjectToSend.JsonData.FromId = inMetadata.id;
    LocalObjectToSend.JsonData.FromMessage = LocalMessageAsString;
    LocalObjectToSend.JsonData.Receiver = LocalReceiverName;

    inws.send(JSON.stringify(LocalObjectToSend));
}

module.exports = StartFunc;
