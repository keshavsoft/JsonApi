import ApiConfigJson from "../../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

const StartFunc = async () => {

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/GetFilesAsTree/WithItemAndScreenCount`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };