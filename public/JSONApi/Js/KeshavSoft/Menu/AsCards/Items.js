import { jFShowFoldersInMenu } from "./Header/FromFolder.js";
import { ReturnFolderAndFileName } from "./ForItems/urlSearchParams.js";
import { ForItemsFetchAsPost } from "./ForItems/FetchFuncs.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

let jVarLocalFromReturnFolderAndFileName = ReturnFolderAndFileName();

let jFShowFolderInBreadcrumb = ({ inFolderName, inFileNameWithExtension }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.href = `Files.html?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;

    let jVarLocalBreadcrumbFileNameId = document.getElementById("BreadcrumbFileNameId");
    jVarLocalBreadcrumbFileNameId.innerHTML = inFileNameWithExtension;
};

if ("FolderName" in jVarLocalFromReturnFolderAndFileName) {
    if ("FileName" in jVarLocalFromReturnFolderAndFileName) {
        jFShowFolderInBreadcrumb({
            inFolderName: jVarLocalFromReturnFolderAndFileName.FolderName,
            inFileNameWithExtension: jVarLocalFromReturnFolderAndFileName.FileName
        });

        ForItemsFetchAsPost({
            inProjectName: jVarGlobalProject,
            inSubRoute: jVarGlobalSubRoute,
            inFolderName: jVarLocalFromReturnFolderAndFileName.FolderName,
            inFileNameWithExtension: jVarLocalFromReturnFolderAndFileName.FileName
        })
    };
};