import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/PrepareHeader.js";
import ProjectKeys from "../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async() => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `/${ProjectKeys.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let responseJsonData = await response.json();
    jVarGlobalPresentViewData=responseJsonData;
    return await responseJsonData;
};

export { StartFunc }