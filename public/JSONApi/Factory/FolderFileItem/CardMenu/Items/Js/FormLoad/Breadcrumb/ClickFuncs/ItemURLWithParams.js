const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbItemNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let ScreenName = getUrlQueryParams({ inGetKey: "inItemName" });
    jVarlocalBSTreeId.innerHTML = ScreenName;

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };