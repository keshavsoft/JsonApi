let StartFunc = ({ inTableColumns }) => {
    console.log("inTableColumns:",inTableColumns);
    let jVarLocalTemplateNewTab = document.getElementById("FilterTableRow");
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    // let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;
    // let jVarLocalTableColumns = jVarLocalStorageDataAsJson.KData.TableColumns;
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