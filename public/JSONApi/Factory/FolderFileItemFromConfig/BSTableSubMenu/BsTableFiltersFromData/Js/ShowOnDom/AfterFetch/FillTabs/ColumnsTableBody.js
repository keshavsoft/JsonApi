let StartFunc = ({ inTableColumns }) => {
    let jVarLocalTemplateNewTab = document.getElementById("ColumnsTableRow");
    let jVarLocalFilterTableBody = document.getElementById("ColumnsTableBody");

    let jVarLocalTableColumns = inTableColumns;

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let jVarLocalHTMLContent = Handlebars.compile(jVarLocalTemplateNewTab.innerHTML)({
            Name: element.DisplayName,
            SNo: LoopIndex + 1,
            DataAttribute: element.DataAttribute,
            ShowInTable: element.ShowInTable
        });
        jVarLocalFilterTableBody.insertAdjacentHTML("beforeend", jVarLocalHTMLContent);
    });
};


export { StartFunc }