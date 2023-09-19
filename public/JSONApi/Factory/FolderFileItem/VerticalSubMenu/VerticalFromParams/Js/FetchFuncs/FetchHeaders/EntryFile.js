import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys = {};

    let jVarLocalBodyKeysJson = jVarLocalBodyKeys;

    let jVarLocalFolderValue = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFileValue = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalItemValue = getUrlQueryParams({ inGetKey: "inItemName" });
    let jVarLocalScreenValue = getUrlQueryParams({ inGetKey: "inScreenName" });

    jVarLocalBodyKeysJson.inFolderName = jVarLocalFolderValue;
    jVarLocalBodyKeysJson.inFileName = jVarLocalFileValue;
    jVarLocalBodyKeysJson.inItemName = jVarLocalItemValue;
    jVarLocalBodyKeysJson.inScreenName = jVarLocalScreenValue;

    if (jVarLocalBodyKeysJson.inFolderName === null ) {
        Swal.fire({
            title: 'inFolderName Not Found',
            text: "inFolderName Not Found in Params",
            icon: 'error',
        });
    }
    else if (jVarLocalBodyKeysJson.inFileName === null ) {
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
    }
    else if (jVarLocalBodyKeysJson.inScreenName === null ) {
        Swal.fire({
            title: 'inScreenName Not Found',
            text: "inScreenName Not Found in Params",
            icon: 'error',
        });
    }
    
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