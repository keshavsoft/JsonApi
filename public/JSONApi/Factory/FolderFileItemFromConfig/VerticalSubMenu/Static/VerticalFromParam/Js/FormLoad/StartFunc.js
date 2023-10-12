let StartFunc = () => {

    let jVarLocalVoucherRefValue = getUrlQueryParams({ inGetKey: "VoucherRef" });
    if (jVarLocalVoucherRefValue === null) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "VoucherRef Not Found in Params"

        });
    }
    jFLocalToInputInputVoucherRefId({ inInputVoucherRefId: jVarLocalVoucherRefValue })

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalToInputInputVoucherRefId = ({ inInputVoucherRefId }) => {
    let jVarLocalHtmlId = 'InputVoucherRefId';
    let jVarLocalInputVoucherRefId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputVoucherRefId.value = inInputVoucherRefId;
};

export { StartFunc };