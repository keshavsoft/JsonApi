import { StartFunc as StartFuncFetchHeaders } from "../FetchHeaders/EntryFile.js";
import ProjectKeys from "../../../../../../../Config.json" assert {type: 'json'};

let StartFunc = async() => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `/${ProjectKeys.Project}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/WithSelectedColumns`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let responseJsonData = await response.json();

    return await responseJsonData;
};

export { StartFunc }