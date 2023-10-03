let jFConditionsShowData = ({ inData }) => {
    let jVarLocalStorageDataAsJson = inData;

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

    let jVarLocalReturnData;

    if (jVarLocalFromCondition === ">=" && jVarLocalToCondition === "<=" && jVarLocalColumnSelected === "Date") {
        jVarLocalReturnData = jVarLocalStorageDataAsJson.filter(l1 => {
            return l1.Date >= jVarLocalFromValue && l1.Date <= jVarLocalToValue
        });
    };

    return jVarLocalReturnData;
};

let jFLocalFiterData = ({ inData }) => {
    let jVarLocalFilterObject = {};
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    let jVarCheckBoxes = jVarLocalFilterTableBody.querySelectorAll('input[type="checkbox"]:checked');

    for (let i = 0; i < jVarCheckBoxes.length; i++) {
        let jVarLoopInsideClosestTr = jVarCheckBoxes[i].closest("tr");
        let jVarLoopInsideSearchInput = jVarLoopInsideClosestTr.querySelector(".SearchInput");
        let jVarLocalFilterKey = jVarLoopInsideSearchInput.dataset.dataattribute;
        jVarLocalFilterObject[jVarLocalFilterKey] = jVarLoopInsideSearchInput.value;
    };

    let jVarLocalNewData = inData;

    let jVarLocalFilteredData = _.filter(jVarLocalNewData, jVarLocalFilterObject);
    // let jVarLocalPickData = _.map(jVarLocalNewData, "Credit");

    return jVarLocalFilteredData;
};

let StartFunc = () => {
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");

    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData));

    let jVarLocalFilteredData = jFLocalFiterData({ inData: jVarLocalNewData });
    let jVarLocalShowColumnsArray = jFLocalShowColumnsArray();
    console.log("jVarLocalShowColumnsArray",jVarLocalShowColumnsArray);
    let jVarLocalPickData = _.map(jVarLocalFilteredData, function (object) {
        // return _.pick(object, ['AccountName', 'Credit']);
        return _.pick(object, jVarLocalShowColumnsArray);

    });

    let jVarLocalToShowData = [];

    jVarLocalToShowData.push({
        HTMLControlType: "TableFromData",
        KData: {
            TableData: jVarLocalPickData
        }
    });

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

let jFLocalShowColumnsArray = () => {
    let jVarLocalReturnArray = [];
    let jVarLocalHtmlId = "ColumnsTableBody";
    let jVarLocalColumnsTableBody = document.getElementById(jVarLocalHtmlId);
    let jVarLocalCheckBoxes = jVarLocalColumnsTableBody.querySelectorAll("input[type=checkbox]");
    console.log("jVarLocalCheckBoxes:", jVarLocalCheckBoxes);
    for (let i = 0; i < jVarLocalCheckBoxes.length; i++) {
        if (jVarLocalCheckBoxes[i].checked) {
            jVarLocalReturnArray.push(jVarLocalCheckBoxes[i].dataset.dataattribute);
        };
    }
    return jVarLocalReturnArray;

};

export { StartFunc }