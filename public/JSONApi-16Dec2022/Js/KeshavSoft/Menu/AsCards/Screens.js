import { jFShowFoldersInMenu } from "./Header/FromFolder.js";
import { ReturnFolderAndFileNameAndItemName } from "./ForScreens/urlSearchParams.js";
import { StartFunc as BuildCardsFuncsStartFunc } from "./ForScreens/BuildCardsFuncs.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

let jVarLocalFromReturnFolderAndFileNameAndItemName = ReturnFolderAndFileNameAndItemName();

let jFShowFolderInBreadcrumb = ({ inFolderName, inFileNameWithExtension, inItemName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.href = `Files.html?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;

    let jVarLocalBreadcrumbFileNameId = document.getElementById("BreadcrumbFileNameId");
    jVarLocalBreadcrumbFileNameId.href = `Items.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}`;
    jVarLocalBreadcrumbFileNameId.innerHTML = inFileNameWithExtension;

    let jVarLocalBreadcrumbItemNameId = document.getElementById("BreadcrumbItemNameId");
    jVarLocalBreadcrumbItemNameId.innerHTML = inItemName;

};

BuildCardsFuncsStartFunc();
// if ("FolderName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
//     if ("FileName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
//         if ("ItemName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
//             if ("RowCount" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
                
//                 // jFShowFolderInBreadcrumb({
//                 //     inFolderName: jVarLocalFromReturnFolderAndFileNameAndItemName.FolderName,
//                 //     inFileNameWithExtension: jVarLocalFromReturnFolderAndFileNameAndItemName.FileName,
//                 //     inItemName: jVarLocalFromReturnFolderAndFileNameAndItemName.ItemName
//                 // });

//                 // ScreensFetchAsPost({
//                 //     inProjectName: jVarGlobalProject,
//                 //     inSubRoute: jVarGlobalSubRoute,
//                 //     inFolderName: jVarLocalFromReturnFolderAndFileNameAndItemName.FolderName,
//                 //     inFileNameWithExtension: jVarLocalFromReturnFolderAndFileNameAndItemName.FileName,
//                 //     inItemName: jVarLocalFromReturnFolderAndFileNameAndItemName.ItemName,
//                 //     inRowCount: jVarLocalFromReturnFolderAndFileNameAndItemName.RowCount
//                 // });

//             };
//         };
//     };
// };