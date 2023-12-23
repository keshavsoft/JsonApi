import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = ({ inFolderName, inFileNameOnly, inItemName,inScreenName }) => {
    BodyKeysJson.inFolderName = inFolderName;
    BodyKeysJson.inFileNameOnly = `${inFileNameOnly}`;
    BodyKeysJson.inItemName = inItemName;
    BodyKeysJson.inScreenName = inScreenName;

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }