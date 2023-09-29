const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbItemNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let FolderName = getUrlQueryParams({ inGetKey: "inFolderName" });
    let FileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let ItemName = getUrlQueryParams({ inGetKey: "inItemName" });

    jVarlocalBSTreeId.innerHTML = ItemName;

    jVarlocalBSTreeId.addEventListener("click", () => {
        jFLocalToURL({ FolderName, FileName, ItemName });

    });
};
let jFLocalToURL = ({ FolderName, FileName, ItemName }) => {

    let url = new URL(window.location.href);
    let NewURl = new URL("../Screens/Screens.html", url);
    const new_url = new URL(`${NewURl.href}?inFolderName=${FolderName}&inFileName=${FileName}&inItemName=${ItemName}`);
    window.location.href = new_url.href;

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };