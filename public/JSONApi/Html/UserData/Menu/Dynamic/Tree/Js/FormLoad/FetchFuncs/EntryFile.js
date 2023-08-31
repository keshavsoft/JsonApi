import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalFolderName = getUrlQueryParams({ inGetKey: "FolderName" });
    let jVarLocalFileNameOnly = getUrlQueryParams({ inGetKey: "FileName" });
    let jVarLocalItemName = getUrlQueryParams({ inGetKey: "ItemName" });

    await StartFuncFetchFunc({
        inFolderName: jVarLocalFolderName,
        inFileNameOnly: jVarLocalFileNameOnly,
        inItemName: jVarLocalItemName
    });

    StartFuncAfterFetch();
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };