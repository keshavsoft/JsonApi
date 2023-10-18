let StartFunc = () => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "#";
    jVarLocalNewTh.dataset.field = "#";
    jVarLocalNewTh.setAttribute("data-formatter", "jFLocalSerialColumn");
    jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
};

function jFLocalSerialColumn(value, row, index){
    return index + 1;
};

export { StartFunc };