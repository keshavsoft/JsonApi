let StartFunc = ({ inTableColumns, inTableData }) => {

    // let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    // let jVarLocalTableColumns = jVarLocalStorageDataAsJson.KData.TableColumns;
    // let jVarLocalTableData = jVarLocalStorageDataAsJson.KData.TableData;

    let jVarLocalTableColumns = inTableColumns;
    let jVarLocalTableData = inTableData;
    console.log("jVarLocalTableData::",jVarLocalTableData);

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let LoopInsideDataListId = document.getElementById(`DataListForFilter-${LoopIndex + 1}`);
        let LoopInsideFilter = _.keys(_.groupBy(jVarLocalTableData, element.DataAttribute));

        let str = '';

        LoopInsideFilter.forEach((name) => {
            str += '<option value="' + name + '" />';
        });

        LoopInsideDataListId.innerHTML = str;
    });
};

export { StartFunc }