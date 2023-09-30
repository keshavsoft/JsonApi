const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbScreenNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let FolderName = getUrlQueryParams({ inGetKey: "inFolderName" });
    let FileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let ItemName = getUrlQueryParams({ inGetKey: "inItemName" });
    let ScreenName = getUrlQueryParams({ inGetKey: "inScreenName" });


    jVarlocalBSTreeId.innerHTML = ScreenName;

    jVarlocalBSTreeId.addEventListener("click", () => {
        jFLocalToURL({ FolderName, FileName, ItemName,ScreenName });

    });
};
let jFLocalToURL = ({ FolderName, FileName, ItemName ,ScreenName}) => {

    let url = new URL(window.location.href);
    let NewURl = new URL("../../CardMenu/ScreenMenu/ScreenMenu.html", url);
    const new_url = new URL(`${NewURl.href}?inFolderName=${FolderName}&inFileName=${FileName}&inItemName=${ItemName}&inScreenName=${ScreenName}`);
    window.location.href = new_url.href;

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };