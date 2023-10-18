import ApiConfigJson from "../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByPk/InputPK`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let jVarLocalResponse = await response.json();
    return jVarLocalResponse;

};

export { StartFunc };