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



export { StartFunc };