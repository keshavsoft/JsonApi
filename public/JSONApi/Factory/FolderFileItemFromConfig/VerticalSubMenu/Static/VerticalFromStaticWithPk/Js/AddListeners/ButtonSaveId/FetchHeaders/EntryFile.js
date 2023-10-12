import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = () => {

    BodyKeysJson.inDataToInsert = {};

    BodyKeysJson.inDataToInsert.pk = jFLocalFromDomInputPkId();
    BodyKeysJson.inDataToInsert.ProductName = jFLocalFromDomInputProductNameId();
    BodyKeysJson.inDataToInsert.SalePrice = jFLocalFromDomInputSalePriceId();
    BodyKeysJson.inDataToInsert.VoucherRef = jFLocalFromDomInputVoucherRefId();

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'InputPkId';
   let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
   let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
   return jVarHtmlInputPkIdValue;
};

let jFLocalFromDomInputProductNameId = () => {
    let jVarLocalHtmlInputProductNameId = 'InputProductNameId';
   let jVarHtmlInputProductNameId = document.getElementById(jVarLocalHtmlInputProductNameId);
   let jVarHtmlInputProductNameIdValue = jVarHtmlInputProductNameId.value.trim();
   return jVarHtmlInputProductNameIdValue;
};

let jFLocalFromDomInputSalePriceId = () => {
    let jVarLocalHtmlInputSalePriceId = 'InputSalePriceId';
   let jVarHtmlInputSalePriceId = document.getElementById(jVarLocalHtmlInputSalePriceId);
   let jVarHtmlInputSalePriceIdValue = jVarHtmlInputSalePriceId.value.trim();
   return jVarHtmlInputSalePriceIdValue;
};

let jFLocalFromDomInputVoucherRefId = () => {
    let jVarLocalHtmlInputVoucherRefId = 'InputVoucherRefId';
   let jVarHtmlInputVoucherRefId = document.getElementById(jVarLocalHtmlInputVoucherRefId);
   let jVarHtmlInputVoucherRefIdValue = jVarHtmlInputVoucherRefId.value.trim();
   return jVarHtmlInputVoucherRefIdValue;
};

export { StartFunc }