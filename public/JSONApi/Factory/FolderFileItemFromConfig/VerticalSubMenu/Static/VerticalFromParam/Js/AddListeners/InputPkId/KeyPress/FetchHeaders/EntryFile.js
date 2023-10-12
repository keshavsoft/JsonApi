import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = () => {

    let jVarLocalInputPkId = jFLocalFromDomInputPkId();

    BodyKeysJson.inRowPk = jVarLocalInputPkId;

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'InputPkId';
   let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
   let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
   return jVarHtmlInputPkIdValue;
};

export { StartFunc }