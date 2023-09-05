import { StartFunc as StartFuncFilterTableBody } from "./FillTabs/FilterTableBody.js";
import { StartFunc as StartFuncFillDataListForFilters } from "./FillTabs/FillDataListForFilters.js";

let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalResponseAsJson = inResponseAsJson;

    if (jVarLocalResponseAsJson !== null) {

        let jVarGlobalPresentViewData = Object.values(jVarLocalResponseAsJson);

        let jVarLocalTableColumns = Object.keys(jVarGlobalPresentViewData[0]).map(LoopItem => {
            return {
                DisplayName: LoopItem,
                DataAttribute: LoopItem
            };
        })

        StartFuncFilterTableBody({ inTableColumns: jVarLocalTableColumns });
        StartFuncFillDataListForFilters({
            inTableColumns: jVarLocalTableColumns,
            inTableData: inResponseAsJson
        });
    };
};

export { StartFunc }