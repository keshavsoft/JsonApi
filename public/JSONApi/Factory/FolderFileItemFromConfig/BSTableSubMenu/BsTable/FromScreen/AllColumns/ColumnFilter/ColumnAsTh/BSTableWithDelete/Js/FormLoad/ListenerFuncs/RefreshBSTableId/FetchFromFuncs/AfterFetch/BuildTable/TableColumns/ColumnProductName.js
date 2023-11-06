let StartFunc = () => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "ProductName";
    jVarLocalNewTh.dataset.field = "ProductName";
    jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
};

export { StartFunc };