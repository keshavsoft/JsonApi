import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = ({ inFolderName, inFileName, inItemName, inScreenName }) => {
    BodyKeysJson.inFolderName = inFolderName;
    BodyKeysJson.inFileName = inFileName;
    BodyKeysJson.inItemName = inItemName;
    BodyKeysJson.inScreenName = inScreenName;

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }