import { ReturnFolderAndFileNameAndItemName } from "./urlSearchParams.js";

let jVarLocalFromReturnFolderAndFileNameAndItemName = ReturnFolderAndFileNameAndItemName();

let jFShowFolderInBreadcrumb = ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.href = `../Files.html?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;

    let jVarLocalBreadcrumbFileNameId = document.getElementById("BreadcrumbFileNameId");
    jVarLocalBreadcrumbFileNameId.href = `../Items.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}.json`;
    jVarLocalBreadcrumbFileNameId.innerHTML = inFileNameWithExtension;

    let jVarLocalBreadcrumbItemNameId = document.getElementById("BreadcrumbItemNameId");
    jVarLocalBreadcrumbItemNameId.href = `../Screens.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}&ItemName=${inItemName}`;
    jVarLocalBreadcrumbItemNameId.innerHTML = inItemName;

    let jVarLocalBreadcrumbinScreenName = document.getElementById("BreadcrumbScreenNameId");
    jVarLocalBreadcrumbinScreenName.innerHTML = inScreenName;
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
                if ("ScreenName" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
                    if (jVarLocalFromReturnFolderAndFileNameAndItemName.ScreenName === "") {
                        alert("Please select ScreenName Name!");
                    };

                    jFShowFolderInBreadcrumb({
                        inFolderName: jVarLocalFromReturnFolderAndFileNameAndItemName.FolderName,
                        inFileNameWithExtension: jVarLocalFromReturnFolderAndFileNameAndItemName.FileName,
                        inItemName: jVarLocalFromReturnFolderAndFileNameAndItemName.ItemName,
                        inScreenName: jVarLocalFromReturnFolderAndFileNameAndItemName.ScreenName
                    });


                };
            };
        };

    };
};


export { StartFunc }