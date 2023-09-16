import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from "../../../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json" assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = BodyKeysJson;
    
    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

export { StartFunc }