import ConfigJson from "../../../../../../../../Config.json" assert {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async ({ inFolderName, inFileNameOnly, inItemName }) => {
    //let jVarLocalFetchUrl = `/${ConfigJson.Project}/Api/Data/FromFolder/TreeWitData`;
    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inFolderName, inFileNameOnly, inItemName });
    let jVarLocalFetchUrl = `/${ConfigJson.Project}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    jVarLocalPresentViewData = await response.json();
};

export { StartFunc };