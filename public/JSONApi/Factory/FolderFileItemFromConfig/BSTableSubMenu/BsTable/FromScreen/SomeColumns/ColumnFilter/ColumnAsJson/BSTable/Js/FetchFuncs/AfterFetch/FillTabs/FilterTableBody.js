let StartFunc = ({ inTableColumns }) => {
    let jVarLocalTemplateNewTab = document.getElementById("FilterTableRow");
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    let jVarLocalTableColumns = inTableColumns;

    jVarLocalTableColumns.forEach((element, LoopIndex) => {

        let jVarLocalHTMLContent = Handlebars.compile(jVarLocalTemplateNewTab.innerHTML)({
            Name: element.DisplayName,
            SNo: LoopIndex + 1,
            DataAttribute: element.DataAttribute
        });

        jVarLocalFilterTableBody.insertAdjacentHTML("beforeend", jVarLocalHTMLContent);
    });
};

export { StartFunc }