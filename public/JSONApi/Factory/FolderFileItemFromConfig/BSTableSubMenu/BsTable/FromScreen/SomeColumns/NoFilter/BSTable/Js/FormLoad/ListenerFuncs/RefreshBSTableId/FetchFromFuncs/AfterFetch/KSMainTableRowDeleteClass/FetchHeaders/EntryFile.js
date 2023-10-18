import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};
import PostBodyKeysJson from '../../../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};

let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalJsonPk = inCurrentTarget.dataset.pk;

    BodyKeysJson.inJsonConfig.inFolderName = PostBodyKeysJson.inFolderName;
    BodyKeysJson.inJsonConfig.inJsonFileName = `${PostBodyKeysJson.inFileName}.json`;
    BodyKeysJson.inItemConfig.inItemName = PostBodyKeysJson.inItemName;
    BodyKeysJson.inItemConfig.inScreenName = PostBodyKeysJson.inScreenName;
    BodyKeysJson.inJsonPK = jVarLocalJsonPk;
    
    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }