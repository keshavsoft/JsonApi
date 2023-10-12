import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ApiConfigJson from "../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Fromjson`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };