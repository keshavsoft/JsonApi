import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};
import PostBodyKeysJson from '../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};

let StartFunc = () => {

    // BodyKeysJson.inJsonConfig.inFolderName = PostBodyKeysJson.inFolderName;
    // BodyKeysJson.inJsonConfig.inJsonFileName = `${PostBodyKeysJson.inFileName}.json`;
    // BodyKeysJson.inItemConfig.inItemName = PostBodyKeysJson.inItemName;
    // BodyKeysJson.inItemConfig.inScreenName = PostBodyKeysJson.inScreenName;

    BodyKeysJson.inDataToInsert = {};

    BodyKeysJson.inDataToInsert.pk = jFLocalFromDomInputPkId();
    BodyKeysJson.inDataToInsert.ItemName = jFLocalFromDomInputItemNameId();
    BodyKeysJson.inDataToInsert.VoucherRef = jFLocalFromDomInputVoucherNumberId();

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'InputPkId';
   let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
   let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
   return jVarHtmlInputPkIdValue;
};

let jFLocalFromDomInputItemNameId = () => {
    let jVarLocalHtmlInputItemNameId = 'InputItemNameId';
   let jVarHtmlInputItemNameId = document.getElementById(jVarLocalHtmlInputItemNameId);
   let jVarHtmlInputItemNameIdValue = jVarHtmlInputItemNameId.value.trim();
   return jVarHtmlInputItemNameIdValue;
};

let jFLocalFromDomInputVoucherNumberId = () => {
    let jVarLocalHtmlInputVoucherNumberId = 'InputVoucherNumberId';
   let jVarHtmlInputVoucherNumberId = document.getElementById(jVarLocalHtmlInputVoucherNumberId);
   let jVarHtmlInputVoucherNumberIdValue = jVarHtmlInputVoucherNumberId.value.trim();
   return jVarHtmlInputVoucherNumberIdValue;
};

export { StartFunc }