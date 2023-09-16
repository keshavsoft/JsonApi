import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/DataFolder/FileInFolder/ItemName/InsertNew/InsertNew"
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();
    return await data;
};

export { StartFunc };