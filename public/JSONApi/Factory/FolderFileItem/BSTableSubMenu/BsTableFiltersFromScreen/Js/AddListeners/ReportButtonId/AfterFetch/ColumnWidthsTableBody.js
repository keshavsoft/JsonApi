let StartFunc = () => {
    let jVarLocalTemplateNewTab = document.getElementById("ColumnWidthsTableRow");
    let jVarLocalFilterTableBody = document.getElementById("ColumnWidthsTableBody");

    let jVarLocalTableColumns = Object.keys(jVarGlobalPresentViewData[0]);

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let jVarLocalHTMLContent = Handlebars.compile(jVarLocalTemplateNewTab.innerHTML)({
            Name: element,
            SNo: LoopIndex + 1,
            // DataAttribute: element
        });

        jVarLocalFilterTableBody.insertAdjacentHTML("beforeend", jVarLocalHTMLContent);
    });
};

export { StartFunc }