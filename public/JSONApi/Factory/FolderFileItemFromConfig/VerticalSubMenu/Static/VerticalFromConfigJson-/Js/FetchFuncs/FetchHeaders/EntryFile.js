import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};
import ConfigKeys from '../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};


let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys = {
        ...ConfigKeys,
        ...BodyKeysJson

    };
    
    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

export { StartFunc }