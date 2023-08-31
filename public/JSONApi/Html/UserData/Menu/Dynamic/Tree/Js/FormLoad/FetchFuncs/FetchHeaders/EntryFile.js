import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = ({ inFolderName, inFileNameOnly, inItemName }) => {
    BodyKeysJson.inFolderName = inFolderName;
    BodyKeysJson.inFileNameOnly = inFileNameOnly;
    BodyKeysJson.inItemName = inItemName;

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }