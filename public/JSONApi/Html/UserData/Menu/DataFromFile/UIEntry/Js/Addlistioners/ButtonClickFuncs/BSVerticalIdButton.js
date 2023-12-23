const StartFunc = () => {
    let jVarLocalHtmlId = 'BSVerticalId';
    let jVarlocalBSTableId = document.getElementById(jVarLocalHtmlId);

    jVarlocalBSTableId.addEventListener("click", (event) => {
        jFLocalToURL();

    });
};

let jFLocalToURL = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../UI/VerticalSimple/VerticalSimple.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};

export { StartFunc };