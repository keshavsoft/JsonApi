import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "./KSMainTableRowDeleteClass/1-ClickAssign.js";
import { StartFunc as StartFuncPrepareColumns } from "./PrepareColumns.js";
let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: StartFuncPrepareColumns({ data: jVarLocalDataToShow[0] })
    });

    StartFuncKSMainTableRowDeleteClass();
};

let jFLocalToArray = ({ inDataToShow }) => {
    let jVarLocalArray = [];
    Object.entries(inDataToShow).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

export { StartFunc }