let CommonBroadcast = require('../Broadcast');
let CommonSaveToStringOnMessage = require("../LogHistory/OnMessage/EntryFile")

let StartFunc = ({ inwss, inMessageAsString, inMetadata, inVerifyToken }) => {
    let LocalItemName = inMetadata.id;

    let LocalMessageAsString = inMessageAsString;
    let LocalMessageAsObject = {};
    LocalMessageAsObject.MessageAsString = LocalMessageAsString;
    LocalMessageAsObject.InwardMessage = true;

    CommonSaveToStringOnMessage({ 
        inVerifyToken, 
        inItemName: LocalItemName,
        inMessage: LocalMessageAsObject 
    })


    if (LocalMessageAsString === "keshav") {
        CommonBroadcast({ inwss: inwss, inmessage: JSON.stringify({ FromId: inMetadata.id, FromMessage: LocalMessageAsString }) });
    }

};

module.exports = StartFunc;
