let StartFunc = () => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Delete";
    jVarLocalNewTh.setAttribute("data-formatter", "operateFormatter");
    jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
};

export { StartFunc };