let StartFunc = () => {
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = Object.keys(jVarLocalStorageDataAsJson[0]);

    let str = '';

    jVarLocalTableColumns.forEach((name) => {
        str += '<option value="' + name + '" />';
    });

    document.getElementById("ColumnsList").innerHTML = str;
};

export { StartFunc }