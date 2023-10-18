let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;

    jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    var $table = $('#table');
    $table.bootstrapTable({ data: jVarLocalDataToShow.DataFromServer[0].KData.TableData });

};

let jFLocalPrepareHeaderForDataOnly = ({ data }) => {
    console.log("data", data);
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    let jVarLocalColumns = data.DataFromServer[0].KData.TableColumns;
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element.DisplayName;
        jVarLocalNewTh.dataset.field = element.DataAttribute;
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
}

export { StartFunc }