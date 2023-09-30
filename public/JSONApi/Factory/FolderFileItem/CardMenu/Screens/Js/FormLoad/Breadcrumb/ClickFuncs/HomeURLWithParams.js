const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbHomeId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    jVarlocalBSTreeId.addEventListener("click", () => {
        jFLocalToURL()
    })

};
let jFLocalToURL = () => {
    let url = new URL(window.location.href);
    let NewURl = new URL("../Folders/Folders.html", url);
    window.location.href = NewURl.href;

};


export { StartFunc };