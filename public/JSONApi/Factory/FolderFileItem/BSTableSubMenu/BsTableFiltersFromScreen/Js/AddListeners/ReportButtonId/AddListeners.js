let jFShowFilterTable = () => {
    let jVarLocalTemplateNewTab = document.getElementById("FilterTableRow");
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    //   let jVarLocalStorageData = localStorage.getItem(inUUID);
    //let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let jVarLocalHTMLContent = Handlebars.compile(jVarLocalTemplateNewTab.innerHTML)({
            Name: element.DisplayName,
            SNo: LoopIndex + 1,
            DataAttribute: element.DataAttribute
        });

        //jVarLocalFilterTableBody.insertAdjacentElement("beforebegin",jVarLocalHTMLContent);
        jVarLocalFilterTableBody.insertAdjacentHTML("beforeend", jVarLocalHTMLContent);
    });
};

let jFShowColumnsTable = () => {
    let jVarLocalTemplateNewTab = document.getElementById("ColumnsTableRow");
    let jVarLocalFilterTableBody = document.getElementById("ColumnsTableBody");
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

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

let jFShowColumnsInDropdown = () => {
    //  let jVarLocalStorageData = localStorage.getItem(inUUID);
    //let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

    let str = '';

    jVarLocalTableColumns.forEach((name) => {
        str += '<option value="' + name.DisplayName + '" />';
    });

    document.getElementById("ColumnsList").innerHTML = str;
};

let jFFillDataListForFilters = () => {
    //let jVarLocalStorageData = localStorage.getItem(inUUID);
    //    let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);

    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;
    let jVarLocalTableData = jVarLocalStorageDataAsJson[0].KData.TableData;

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

let jFPullFromServerInsertToLocalStorage = (inEvent) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let jVarClosestInputGroup = jVarLocalCurrentTarget.closest(".input-group");

    let jVarLocalRoute = jVarGlobalProject;
    let jVarLocalSubRoute = jVarGlobalSubRoute;

    let jVarLocalReportSelected = jVarClosestInputGroup.querySelector(".ReportSelectedClass").value;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Reports/PullData/WithOutFilters/AsTable/DataWithConfig/${jVarLocalReportSelected}`;

    fetch(jVarLocalFetchUrl).then(response => {
        return response.json();
    }).then(FetchData => {
        if (FetchData !== null) {
            if (FetchData.KTF) {
                let jVarLocalJsonToDom = [];

                jVarLocalJsonToDom.push({
                    HTMLControlType: "Table",
                    KData: FetchData.DataFromServer.KData
                });

                jVarGlobalPresentViewData = jVarLocalJsonToDom;

                jFShowFilterTable();
                jFShowColumnsTable();
                jFShowColumnsInDropdown();
                jFFillDataListForFilters();
            };
        };
    });
};

let StartFunc = () => {
    let jVarLocalReportButtonId = document.getElementById("ReportButtonId");
    jVarLocalReportButtonId.addEventListener("click", jFPullFromServerInsertToLocalStorage);
};

export { StartFunc }