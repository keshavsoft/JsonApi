import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalJsonPk = inCurrentTarget.dataset.pk;

    let jVarLocalFolderValue = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFileValue = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalItemValue = getUrlQueryParams({ inGetKey: "inItemName" });
    let jVarLocalScreenValue = getUrlQueryParams({ inGetKey: "inScreenName" });
    if (jVarLocalFolderValue === null ) {
        Swal.fire({
            title: 'inFolderName Not Found',
            text: "inFolderName Not Found in Params",
            icon: 'error',
        });
        return;
    };
    if (jVarLocalFileValue === null ) {
        Swal.fire({
            title: 'inFileName Not Found',
            text: "inFileName Not Found in Params",
            icon: 'error',
        });
        return;
    }
    if (jVarLocalItemValue === null ) {
        Swal.fire({
            title: 'inItemName Not Found',
            text: "inItemName Not Found in Params",
            icon: 'error',
        });
        return;
    }
    if (jVarLocalScreenValue === null ) {
        Swal.fire({
            title: 'inScreenName Not Found',
            text: "inScreenName Not Found in Params",
            icon: 'error',
        });
        return;
    }

    BodyKeysJson.inJsonConfig.inFolderName = jVarLocalFolderValue;
    BodyKeysJson.inJsonConfig.inJsonFileName = jVarLocalFileValue;
    BodyKeysJson.inItemConfig.inItemName = jVarLocalItemValue;
    BodyKeysJson.inItemConfig.inScreenName = jVarLocalScreenValue;
    BodyKeysJson.inJsonPK = jVarLocalJsonPk;
    
    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc }