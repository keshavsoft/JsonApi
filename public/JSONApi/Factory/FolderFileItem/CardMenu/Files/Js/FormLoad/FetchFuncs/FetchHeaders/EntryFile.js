import KeysJson from './Keys.json' assert {type: 'json'};
// import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};
// import ConfigKeys from '../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};
    
    let jVarLocalFolderValue = getUrlQueryParams({ inGetKey: "inFolderName" });
    jVarLocalBodyKeysJson.inFolderName = jVarLocalFolderValue;
    if (jVarLocalBodyKeysJson.inFolderName === null ) {
        Swal.fire({
            title: 'inFolderName Not Found',
            text: "inFolderName Not Found in Params",
            icon: 'error',
        });
    };

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }