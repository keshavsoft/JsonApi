import { ReturnFolderName as urlSearchParamsReturnFolderName  } from "./urlSearchParams.js";
import { FetchFiles } from "./FetchFuncs.js";
import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/ForHeader.js";
import { StartFunc as StartFuncFromLocalStorage } from "./Header/FromLocalStorage.js";

StartFuncToLocalStorage().then(PromiseData => {
    StartFuncFromLocalStorage();
});

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