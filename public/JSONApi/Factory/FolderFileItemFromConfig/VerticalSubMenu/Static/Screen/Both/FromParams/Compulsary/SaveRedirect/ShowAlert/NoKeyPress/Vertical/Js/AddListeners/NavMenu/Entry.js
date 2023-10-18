const StartFunc = () => {
    let jVarLocalHtmlId = 'NoAlertIdId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    jVarlocalBSTreeId.addEventListener("click", (event) => {
        jFLocalToURL();

    });
};
let jFLocalToURL = () => {

    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../NoAlert/NoAlert.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};

export { StartFunc };