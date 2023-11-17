let CommonAsJson = require('./ReceiveMessage/AsJson');
let CommonAsString = require('./ReceiveMessage/AsString');

let StartFunc = ({ inMessageAsString, inClients, inws, inwss }) => {
    const metadata = inClients.get(inws);
    try {
        let LocalJsonData = JSON.parse(inMessageAsString.toString());
        CommonAsJson({ inMessageAsJson: LocalJsonData, inws: inws, inMetadata: metadata, inClients, inwss });

    } catch (error) {
        CommonAsString({ inwss, inMessageAsString: inMessageAsString, inMetadata: metadata });

    };
};

module.exports = StartFunc;