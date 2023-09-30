let StartFunc = () => {
    let jVarLocalTemplateNewTab = document.getElementById("ColumnsTableRow");
    let jVarLocalFilterTableBody = document.getElementById("ColumnsTableBody");
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = Object.keys(jVarLocalStorageDataAsJson[0]);

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let jVarLocalHTMLContent = Handlebars.compile(jVarLocalTemplateNewTab.innerHTML)({
            Name: element,
            SNo: LoopIndex + 1,
            DataAttribute: element,
            ShowInTable: true
        });
        jVarLocalFilterTableBody.insertAdjacentHTML("beforeend", jVarLocalHTMLContent);
    });
};


export { StartFunc }