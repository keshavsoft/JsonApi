import { ReturnFolderAndFileNameAndItemName } from "./urlSearchParams.js";
import { ScreensFetchAsPost } from "./FetchFuncs.js";

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

let StartFunc = () => {
    let LocalRowCount = 0;

    if ("FolderName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {

        if (jVarLocalFromReturnFolderAndFileNameAndItemName.FolderName === "") {
            alert("Please select Folder Name!");
        };

        if ("FileName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
            if (jVarLocalFromReturnFolderAndFileNameAndItemName.FileName === "") {
                alert("Please select File Name!");
            };

            if ("ItemName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
                if (jVarLocalFromReturnFolderAndFileNameAndItemName.ItemName === "") {
                    alert("Please select Item Name!");
                };

                jFShowFolderInBreadcrumb({
                    inFolderName: jVarLocalFromReturnFolderAndFileNameAndItemName.FolderName,
                    inFileNameWithExtension: jVarLocalFromReturnFolderAndFileNameAndItemName.FileName,
                    inItemName: jVarLocalFromReturnFolderAndFileNameAndItemName.ItemName
                });

                if ("RowCount" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
                    LocalRowCount = jVarLocalFromReturnFolderAndFileNameAndItemName.RowCount;
                };

                ScreensFetchAsPost({
                    inProjectName: jVarGlobalProject,
                    inSubRoute: jVarGlobalSubRoute,
                    inFolderName: jVarLocalFromReturnFolderAndFileNameAndItemName.FolderName,
                    inFileNameWithExtension: jVarLocalFromReturnFolderAndFileNameAndItemName.FileName,
                    inItemName: jVarLocalFromReturnFolderAndFileNameAndItemName.ItemName,
                    inRowCount: LocalRowCount
                });
            };
        };

    };
};


export { StartFunc }