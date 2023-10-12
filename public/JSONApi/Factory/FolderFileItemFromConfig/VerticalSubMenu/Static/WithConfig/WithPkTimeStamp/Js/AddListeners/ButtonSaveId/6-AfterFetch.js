let StartFunc = ({ inFromFetch }) => {
    let jVarLocalFetchData = inFromFetch;
    if (jVarLocalFetchData.KTF === true) {
        jFLocalForSuccess();
    } else {
        console.log("Error",inFromFetch.KReason);
    };
};

let jFLocalForSuccess = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../../../../BSTableSubMenu/BSTableFromData/BSTableFromData.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};

let jFLocalForFailure = ({ inFetchPostData }) => {
    switch (inFetchPostData.ColumnDataAttribute) {
        case "VoucherRef":
            inHtmlCard.classList.remove("border-success");
            inHtmlCard.classList.add("border-danger");
            let jVarLocalVoucherInput = document.getElementById("VoucherRef");
            let jVarLocalParentElement = jVarLocalVoucherInput.parentElement;
            let jVarLocalErrorVoucher = jVarLocalParentElement.querySelector(".invalid-feedback");
            jVarLocalErrorVoucher.innerHTML = `Invalid DC`
            jVarLocalVoucherInput.classList.add("is-invalid");
            jVarLocalVoucherInput.focus();

            break;
        case "pk":
            inHtmlCard.classList.remove("border-success");
            inHtmlCard.classList.add("border-danger");
            let jVarLocalpkInput = document.getElementById("pk");
            let jVarLocalParent = jVarLocalpkInput.parentElement;
            let jVarLocalError = jVarLocalParent.querySelector(".invalid-feedback");
            jVarLocalError.innerHTML = `Invalid QrCode`
            jVarLocalpkInput.classList.add("is-invalid");
            jVarLocalpkInput.focus();
            break;
        default:
            break;
    }
};

export { StartFunc };