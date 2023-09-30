let jFConditionsShowData = ({ inData }) => {
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");

    let jVarLocalColumnSelectedId = document.getElementById("ColumnSelectedId");
    let jVarLocalFromValueId = document.getElementById("FromValueId");
    let jVarLocalFromConditionId = document.getElementById("FromConditionId");
    let jVarLocalToValueId = document.getElementById("ToValueId");
    let jVarLocalToConditionId = document.getElementById("ToConditionId");

    let jVarLocalColumnSelected = jVarLocalColumnSelectedId.value;
    let jVarLocalFromValue = jVarLocalFromValueId.value;
    let jVarLocalFromCondition = jVarLocalFromConditionId.value;
    let jVarLocalToValue = jVarLocalToValueId.value;
    let jVarLocalToCondition = jVarLocalToConditionId.value;

    let jVarLocalStorageDataAsJson = inData;

    let jVarLocalTableData = jVarLocalStorageDataAsJson[0].KData.TableData;

    if (jVarLocalFromCondition === ">=" && jVarLocalToCondition === "<=" && jVarLocalColumnSelected === "Date") {
        jVarLocalStorageDataAsJson[0].KData.TableData = jVarLocalTableData.filter(l1 => {
            return l1.Date >= jVarLocalFromValue && l1.Date <= jVarLocalToValue
        });
    };

    return jVarLocalStorageDataAsJson;
};

let StartFunc = () => {
    let jVarLocalFilterObject = {};

    let jVarLocalHtmlId = "ImmuteTableId";
    let jVarLocalFilteredTableId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    let jVarCheckBoxes = jVarLocalFilterTableBody.querySelectorAll('input[type="checkbox"]:checked');

    for (let i = 0; i < jVarCheckBoxes.length; i++) {
        let jVarLoopInsideClosestTr = jVarCheckBoxes[i].closest("tr");
        let jVarLoopInsideSearchInput = jVarLoopInsideClosestTr.querySelector(".SearchInput");
        let jVarLocalFilterKey = jVarLoopInsideSearchInput.dataset.dataattribute;
        jVarLocalFilterObject[jVarLocalFilterKey] = jVarLoopInsideSearchInput.value;
    };

    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData));

    // let jVarlocalTableData = jVarLocalNewData[0].KData.TableData;

    let jVarLocalFilteredData = _.filter(jVarLocalNewData, jVarLocalFilterObject);
    // let jVarLocalPickData = _.map(jVarLocalNewData, "Credit");

    let jVarLocalPickData = _.map(jVarGlobalPresentViewData, function (object) {
        return _.pick(object, ['AccountName', 'Credit']);
    });

    // let jVarLocalSortedData = _.sortBy(jVarLocalFilteredData, "Date");

    // jVarLocalNewData[0].KData.TableData = jVarLocalSortedData;



    // LocalChangeTableColumns({ inTableColumns: jVarLocalNewData[0].KData.TableColumns });

    // let jVarLocalFromCondition = jFConditionsShowData({ inData: jVarLocalNewData });

    // let jVarLocalToShowData = KeshavSoftCrud.BuildFromArray(jVarLocalNewData);

    let jVarLocalToShowData = [];

    jVarLocalToShowData.push({
        HTMLControlType: "TableFromData",
        KData: {
            TableData: jVarLocalPickData
        }
    });
    console.log("jVarLocalNewData : ", jVarLocalFilteredData);
    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        inData: jVarLocalToShowData,
        inHtmlParent: jVarLocalFilteredTableId
    });
};

let LocalChangeTableColumns = ({ inTableColumns }) => {
    let jVarLocalHtmlId = "ColumnsTableBody";
    let jVarLocalColumnsTableBody = document.getElementById(jVarLocalHtmlId);
    let jVarLocalChecks = jVarLocalColumnsTableBody.querySelectorAll("input[type=checkbox]");

    for (let i = 0; i < jVarLocalChecks.length; i++) {
        let LocalFind = inTableColumns.find(element => {
            return element.DataAttribute === jVarLocalChecks[i].dataset.dataattribute;
        });

        LocalFind.ShowInTable = jVarLocalChecks[i].checked;
    }
};

export { StartFunc }