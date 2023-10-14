let StartFunc = ({ inFetchData }) => {
    if (inFetchData.KTF) {

        let jVarLocalFetchData = inFetchData.JsonData;

        jFLocalToInputInputPkId({ inInputPkId: jVarLocalFetchData.pk });
        jFLocalToInputInputProductNameId({ inInputProductNameId: jVarLocalFetchData.ProductName });
        jFLocalToInputInputSalePriceId({ inInputSalePriceId: jVarLocalFetchData.SalePrice });

    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: `${inFetchData.KReason}`
        });
    }
};

let jFLocalToInputInputProductNameId = ({ inInputProductNameId }) => {
    let jVarLocalHtmlId = 'InputProductNameId';
    let jVarLocalInputProductNameId = document.getElementById(jVarLocalHtmlId);
    
    if (jVarLocalInputProductNameId === null === false) {
        jVarLocalInputProductNameId.value = inInputProductNameId;
    };
};

let jFLocalToInputInputSalePriceId = ({ inInputSalePriceId }) => {
    let jVarLocalHtmlId = 'InputSalePriceId';
    let jVarLocalInputSalePriceId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputSalePriceId.value = inInputSalePriceId;
};

let jFLocalToInputInputPkId = ({ inInputPkId }) => {
    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputPkId;
};

export { StartFunc };