let StartFunc = () => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "SalePrice";
    jVarLocalNewTh.dataset.field = "SalePrice";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocalNewTh.setAttribute("data-footer-formatter", "priceFormatter");
    jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
};

export { StartFunc };