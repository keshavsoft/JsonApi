const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbFileNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let FolderName = getUrlQueryParams({ inGetKey: "inFolderName" });
    let FileName = getUrlQueryParams({ inGetKey: "inFileName" });

    jVarlocalBSTreeId.innerHTML = FileName;

    jVarlocalBSTreeId.addEventListener("click", () => {
        jFLocalToURL({ FolderName, FileName });

    });
};
let jFLocalToURL = ({ FolderName, FileName }) => {

    let url = new URL(window.location.href);
    let NewURl = new URL("../../CardMenu/Items/Items.html", url);
    const new_url = new URL(`${NewURl.href}?inFolderName=${FolderName}&inFileName=${FileName}`);
    window.location.href = new_url.href;

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };