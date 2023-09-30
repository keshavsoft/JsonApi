let StartFunc = ({ inTableColumns }) => {
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;
    console.log("jVarLocalStorageDataAsJson::",jVarLocalStorageDataAsJson.KData.TableData);

    // let jVarLocalTableColumns = jVarLocalStorageDataAsJson.KData.TableData;
    let jVarLocalTableColumns = inTableColumns;

    let str = '';

    jVarLocalTableColumns.forEach((name) => {
        str += '<option value="' + name.DisplayName + '" />';
    });

    document.getElementById("ColumnsList").innerHTML = str;
};

export { StartFunc }