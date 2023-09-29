const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbFileNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let FileName = getUrlQueryParams({ inGetKey: "inFileName" });
    jVarlocalBSTreeId.innerHTML = FileName;

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };