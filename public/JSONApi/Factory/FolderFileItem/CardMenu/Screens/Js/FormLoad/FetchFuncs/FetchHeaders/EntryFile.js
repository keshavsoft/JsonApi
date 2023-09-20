import KeysJson from './Keys.json' assert {type: 'json'};
// import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};
// import ConfigKeys from '../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};
    
    let jVarLocalFolderValue = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFileValue = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalItemValue = getUrlQueryParams({ inGetKey: "inItemName" });

    jVarLocalBodyKeysJson.inFolderName = jVarLocalFolderValue;
    jVarLocalBodyKeysJson.inFileNameWithExtension = jVarLocalFileValue;
    jVarLocalBodyKeysJson.inItemName = jVarLocalItemValue;
    if (jVarLocalBodyKeysJson.inFolderName === null ) {
        Swal.fire({
            title: 'inFolderName Not Found',
            text: "inFolderName Not Found in Params",
            icon: 'error',
        });
    }
    else if (jVarLocalBodyKeysJson.inFileNameWithExtension === null ) {
        Swal.fire({
            title: 'inFileName Not Found',
            text: "inFileName Not Found in Params",
            icon: 'error',
        });
    }
    else if (jVarLocalBodyKeysJson.inItemName === null ) {
        Swal.fire({
            title: 'inItemName Not Found',
            text: "inItemName Not Found in Params",
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