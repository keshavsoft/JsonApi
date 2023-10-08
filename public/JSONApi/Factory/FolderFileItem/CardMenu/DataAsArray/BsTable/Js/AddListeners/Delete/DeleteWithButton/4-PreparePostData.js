import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = async ({ inCurrentTarget }) => {
    console.log("inCurrentTarget", inCurrentTarget);
    let jVarLocalJsonPk = inCurrentTarget.dataset.pk;
    let jVarLocalFolderValue = inCurrentTarget.dataset.foldername;
    let jVarLocalFileValue = inCurrentTarget.dataset.filename;
    let jVarLocalItemValue = inCurrentTarget.dataset.itemname;

    console.log("jVarLocalJsonPk", jVarLocalJsonPk);

    // let jVarLocalFolderValue = getUrlQueryParams({ inGetKey: "inFolderName" });
    // let jVarLocalFileValue = getUrlQueryParams({ inGetKey: "inFileName" });
    // let jVarLocalItemValue = getUrlQueryParams({ inGetKey: "inItemName" });
    let jVarLocalScreenValue = getUrlQueryParams({ inGetKey: "inScreenName" });
   
    BodyKeysJson.inJsonConfig.inFolderName = jVarLocalFolderValue;
    BodyKeysJson.inJsonConfig.inJsonFileName = jVarLocalFileValue;
    BodyKeysJson.inItemConfig.inItemName = jVarLocalItemValue;
    BodyKeysJson.inItemConfig.inScreenName = jVarLocalScreenValue;
    BodyKeysJson.inJsonPK = jVarLocalJsonPk;

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }