const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbFolderNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let FolderName = getUrlQueryParams({ inGetKey: "inFolderName" });
    jVarlocalBSTreeId.innerHTML = FolderName;

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };