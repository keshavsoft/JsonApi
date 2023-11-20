let CommonAsJson = require('./ReceiveMessage/AsJson');
let CommonAsString = require('./ReceiveMessage/AsString');

let StartFunc = ({ inMessageAsString, inClients, inws, inwss, inVerifyToken }) => {
    const metadata = inClients.get(inws);
    let LocalMessageAsString = inMessageAsString.toString();
    try {
        let LocalJsonData = JSON.parse(LocalMessageAsString);
        CommonAsJson({ inMessageAsJson: LocalJsonData, inws: inws, inMetadata: metadata, inClients, inwss, inVerifyToken });

    } catch (error) {
        CommonAsString({ inwss, inMessageAsString: LocalMessageAsString, inMetadata: metadata, inVerifyToken });
    };
};

module.exports = StartFunc;