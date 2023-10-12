import { StartFunc as RowAndColumnsStartFunc } from "./ApplyClasses.js";

let jFCreateFoldersToDom = async () => {
    let jVarLocalRoute = window.location.pathname.split("/")[1];
    // let jVarLocalFetchUrl = `/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Toggles`;
    // let jVarLocalFetchUrl = `/JSONApi/Api/Data/FromFolder/GetDirs/AsTree`;
    let jVarLocalFetchUrl = `/JSONApi/Api/Data/FromFolder/TreeWitData`;
    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();
    console.log("dataFromApi:",dataFromApi);

    if (dataFromApi !== null) {
        RowAndColumnsStartFunc({ inDataFromApi: dataFromApi });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }