import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = async ({ inCurrentTarget }) => {
    let jVarLocalJsonPk = inCurrentTarget.dataset.pk;

    BodyKeysJson.inJsonPK = jVarLocalJsonPk;

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }