let StartFunc = ({ inFromFetch }) => {
    let jVarLocalFetchData = inFromFetch;
    if (jVarLocalFetchData.KTF === true) {
        jFLocalForSuccess(jVarLocalFetchData);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${inFromFetch.KReason}`
        })
        console.log("Error", inFromFetch.KReason);
    };
};

let jFLocalForSuccess1 = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../../../../BSTableSubMenu/BSTableFromData/BSTableFromData.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};


let jFLocalForSuccess = (jVarLocalFetchData) => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    params1.set("NewPk", jVarLocalFetchData.NewPk);
    const new_url = new URL(`${url.href}?${params1}`);
    window.location.href = new_url.href;
};



export { StartFunc };