import { jFShowFoldersInMenu } from "./Header/FromFolder.js";
import { ReturnFolderName as urlSearchParamsReturnFolderName  } from "./ForFiles/urlSearchParams.js";
import { FetchFiles } from "./ForFiles/FetchFuncs.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../Js/KeshavSoft/CommonFuncs/ToLocalStorage/ForHeader.js";
import { StartFunc as StartFuncFromLocalStorage } from "./Header/FromLocalStorage.js";

StartFuncToLocalStorage().then(PromiseData => {
    StartFuncFromLocalStorage();
});

// jFShowFoldersInMenu({
//     inProjectName: jVarGlobalProject,
//     inSubRoute: jVarGlobalSubRoute
// });

let jVarLocalFromReturnFolderName = urlSearchParamsReturnFolderName();

let jFShowFolderInBreadcrumb = ({ inFolderName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    //jVarLocalBreadcrumbFolderNameId.href = `?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;
};

if ("FolderName" in jVarLocalFromReturnFolderName) {
    jFShowFolderInBreadcrumb({ inFolderName: jVarLocalFromReturnFolderName.FolderName });

    FetchFiles({
        inProjectName: jVarGlobalProject,
        inSubRoute: jVarGlobalSubRoute,
        inFolderName: jVarLocalFromReturnFolderName.FolderName
    });
};