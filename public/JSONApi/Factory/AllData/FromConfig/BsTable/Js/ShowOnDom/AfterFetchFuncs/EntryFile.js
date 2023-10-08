import { StartFunc as jFLocalPrepareHeaderForDataOnly } from "./TableColumns.js";

let StartFunc = async ({ inDataToShow }) => {
    let localmapData = inDataToShow.map((ele) => {
        return { ...ele.DataConfig, ...ele.Data }
    });

    let jVarLocalDataToShow = localmapData;
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    });

};

export { StartFunc };