let CommonBroadcast = require('../Broadcast');

let StartFunc = ({ inwss, inMessageAsString, inMetadata }) => {
    let LocalMessageAsString = inMessageAsString.toString();
    if (LocalMessageAsString === "keshav") {
        CommonBroadcast({ inwss: inwss, inmessage: JSON.stringify({ FromId: inMetadata.id, FromMessage: LocalMessageAsString }) });
    }

};

module.exports = StartFunc;
