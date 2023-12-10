let StartFunc = ({ inDataAsJson }) => {
    let LocalDataAsJson = inDataAsJson;

    if ("Type" in LocalDataAsJson) {
        if (LocalDataAsJson.Type === "FromPeer") {
            console.log("LocalDataAsJson : ", LocalDataAsJson.Message);
            return;
        };

        if (LocalDataAsJson.Type === "ClientMetaData") {
            console.log("ClientMetaData : ", LocalDataAsJson.ClientMetaData);
        };
    };
};

module.exports = StartFunc;