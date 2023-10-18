import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = () => {

    let jVarLocalInputPkId = jFLocalFromDomInputPkId();
    let jVarLocalEval = "{{KS}}.split(\"/\")[0].search(\"-\") === -1 ? {{KS}}.split(\"/\")[0] : {{KS}}.split(\"/\")[0].split(\"-\")[1]";
    let jVarLocalId = eval(jVarLocalEval.replaceAll("{{KS}}", `"${jVarLocalInputPkId}"`));
    // let jVarLocalId = jVarLocalInputPkId.split("/")[0].search("-") === -1 ? jVarLocalInputPkId.split("~\")[0] : {{KS}}.split(\"~\")[0].split(\"-\")[1]
   
    // M-267/NIGHTHY/NEG-3-5-60/650
   
    BodyKeysJson.inRowPk = jVarLocalId;

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