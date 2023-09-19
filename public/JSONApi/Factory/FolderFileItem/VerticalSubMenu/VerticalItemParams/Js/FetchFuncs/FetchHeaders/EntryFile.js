import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};
import ConfigKeys from '../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};


let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys = {
        ...ConfigKeys,
        ...BodyKeysJson

    };

    let jVarLocalBodyKeysJson = jVarLocalBodyKeys;
    let jVarLocalParamValue = getUrlQueryParams({ inGetKey: "inItemName" });
    jVarLocalBodyKeysJson.inItemName = jVarLocalParamValue;
    if (jVarLocalBodyKeysJson.inItemName === null) {
        Swal.fire({
            title: 'inItemName Not Found',
            text: "inItemName Not Found in Params",
            icon: 'error',
        });
    }
    
    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc }