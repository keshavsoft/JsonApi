import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ProjectKeys from "../../../../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let     StartFunc = async ({ inCurrentTarget }) => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inCurrentTarget });
    let jVarLocalFetchUrl = `/${ProjectKeys.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/Delete`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };