import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
// import ProjectKeys from "../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/ItemName/CreateNew/CreateItem"
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();
    return await data;
};

export { StartFunc };