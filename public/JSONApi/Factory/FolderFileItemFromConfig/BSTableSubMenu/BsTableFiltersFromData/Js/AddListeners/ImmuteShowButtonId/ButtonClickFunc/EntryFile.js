import { StartFunc as StartFuncShowColumnsArray } from "./ShowColumnsArray.js";
import { StartFunc as StartFuncTableColumns } from "./BsTableFuncs/TableColumns.js";

let StartFunc = async () => {
    jFLocalShowFilters();
    let jVarLocalData = jVarGlobalPresentViewData.JsonData;
    let jVarLocalDataToShow = jFLocalToArray({ jVarLocalData });

    let jVarLocalTableColumns = Object.keys(jVarLocalDataToShow[0]).map(element => {
        return element
    });
    let jVarLocalShowColumnsArray = StartFuncShowColumnsArray();

    let localColumnsData = LocalInsertFunc({ jVarLocalTableColumns, jVarLocalShowColumnsArray });
    
    var $table = $('#ImmuteDataTable');

    $table.bootstrapTable('destroy').bootstrapTable({
        data: jVarLocalDataToShow,
        columns: StartFuncTableColumns({ data: localColumnsData })
    });
};

let jFLocalToArray = ({ jVarLocalData }) => {
    let jVarLocalArray = [];
    Object.entries(jVarLocalData).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

let jFLocalShowFilters = () => {

    let jVarLocalHtmlId = 'FilterFormId';
    let jVarLocalFilterFormId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalFromData = serializeObject(jVarLocalFilterFormId);

    let jVarLocalShowFiltersIdHtmlId = 'ShowFiltersId';
    let jVarLocalShowFiltersId = document.getElementById(jVarLocalShowFiltersIdHtmlId);
    jVarLocalShowFiltersId.innerHTML = JSON.stringify(_.omitBy(jVarLocalFromData, _.isEmpty));
};

let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    }

    // Return the object
    return pairs;
};

let LocalInsertFunc = ({ jVarLocalTableColumns, jVarLocalShowColumnsArray }) => {

    let jVarLocalNewArray = jVarLocalShowColumnsArray.map(element => {
        let jVarLoopInsideFilter = jVarLocalTableColumns.filter(e => e === element);
        element = jVarLoopInsideFilter;
        return element;
    });

    return [...jVarLocalNewArray];
};

export { StartFunc }