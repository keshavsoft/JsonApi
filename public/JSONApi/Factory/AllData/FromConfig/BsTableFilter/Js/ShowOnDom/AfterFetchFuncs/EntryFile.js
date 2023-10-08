// import { StartFunc as jFLocalPrepareHeaderForDataOnly } from "./TableColumns.js";

let StartFunc = async ({ inDataToShow }) => {
    let localmapData = inDataToShow.map((ele) => {
        return { ...ele.DataConfig, ...ele.Data }
    });

    let jVarLocalDataToShow = localmapData;
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: jFLocalPrepareHeaderForDataOnly({ inDataToShow })

    });

};
let jFLocalPrepareHeaderForDataOnly = (inDataToShow) => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalColumns = Object.keys(inDataToShow.inDataToShow[0].DataConfig);

    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element;
        jVarLocalNewTh.dataset.field = element;
        jVarLocalNewTh.setAttribute("data-filter-control", "select")
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
}

export { StartFunc };