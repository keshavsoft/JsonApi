import ConfigJson from "../../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${ConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    jVarLocalPresentViewData = await response.json();
};

export { StartFunc };