let StartFunc = ({ inFetchData }) => {
    if (inFetchData.KTF) {

        let jVarLocalFetchData = inFetchData.JsonData ;
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
   jVarLocalInputProductNameId.value = inInputProductNameId;
};

let jFLocalToInputInputSalePriceId = ({ inInputSalePriceId }) => {
    let jVarLocalHtmlId = 'InputSalePriceId';
   let jVarLocalInputSalePriceId = document.getElementById(jVarLocalHtmlId);
   jVarLocalInputSalePriceId.value = inInputSalePriceId;
};


export { StartFunc };