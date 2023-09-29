const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbScreenNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let ScreenName = getUrlQueryParams({ inGetKey: "inScreenName" });
    jVarlocalBSTreeId.innerHTML = ScreenName;

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };