const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbFolderNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let FolderName = getUrlQueryParams({ inGetKey: "inFolderName" });
    jVarlocalBSTreeId.innerHTML = FolderName;

    jVarlocalBSTreeId.addEventListener("click", (event) => {
        jFLocalToURL({ FolderName });

    });
};
let jFLocalToURL = ({ FolderName }) => {
    let url = new URL(window.location.href);
    let NewURl = new URL("../Files/Files.html", url);
    const new_url = new URL(`${NewURl.href}?inFolderName=${FolderName}`);
    window.location.href = new_url.href;

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };