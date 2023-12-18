import ConfigJson from "../../../../../../../../../Config.json" assert {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async ({ inFolderName, inFileNameOnly, inItemName,inScreenName }) => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inFolderName, inFileNameOnly, inItemName,inScreenName });
    let jVarLocalFetchUrl = `/${ConfigJson.Project}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/WithSelectedColumns`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    jVarLocalPresentViewData = await response.json();

};

export { StartFunc };