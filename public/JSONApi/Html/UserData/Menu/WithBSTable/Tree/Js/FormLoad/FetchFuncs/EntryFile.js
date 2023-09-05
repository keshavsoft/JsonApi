import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
// import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalFolderName = getUrlQueryParams({ inGetKey: "FolderName" });
    let jVarLocalFileNameOnly = getUrlQueryParams({ inGetKey: "FileName" });
    let jVarLocalItemName = getUrlQueryParams({ inGetKey: "ItemName" });
    let jVarLocalScreenName = getUrlQueryParams({ inGetKey: "ScreenName" });


    await StartFuncFetchFunc({
        inFolderName: jVarLocalFolderName,
        inFileName: `${jVarLocalFileNameOnly}.json`,
        inItemName: jVarLocalItemName,
        inScreenName: jVarLocalScreenName
    });
    jFLocalPrepareHeader();
    var $table = $('#table');

    $table.bootstrapTable({ data: jVarLocalPresentViewData.DataFromServer[0].KData.TableData });
    // StartFuncAfterFetch();
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalPrepareHeaderForDataOnly = () =>{
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
        let jVarLocalColumns = Object.keys(Object.values(jVarLocalPresentViewData.JsonData)[0]);
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element;
        jVarLocalNewTh.dataset.field = element;
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
} 

let jFLocalPrepareHeader = () =>{
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    let jVarLocalColumns = jVarLocalPresentViewData.DataFromServer[0].KData.TableColumns;
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element.DataAttribute;
        jVarLocalNewTh.dataset.field = element.DataAttribute;
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
}  

export { StartFunc };