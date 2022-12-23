import { ReturnFolderAndFileNameAndItemName } from "./urlSearchParams.js";

let jVarLocalObjectFromUrlSearchParams = ReturnFolderAndFileNameAndItemName();

let jFShowFolderInBreadcrumb = ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.href = `../Menu/AsCards/Files.html?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;

    let jVarLocalBreadcrumbFileNameId = document.getElementById("BreadcrumbFileNameId");
    jVarLocalBreadcrumbFileNameId.href = `../Menu/AsCards/Items.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}`;
    jVarLocalBreadcrumbFileNameId.innerHTML = inFileNameWithExtension;

    let jVarLocalBreadcrumbItemNameId = document.getElementById("BreadcrumbItemNameId");
    jVarLocalBreadcrumbItemNameId.href = `../Menu/AsCards/Screens.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}&ItemName=${inItemName}`;
    jVarLocalBreadcrumbItemNameId.innerHTML = inItemName;

    let jVarLocalBreadcrumbScreenNameId = document.getElementById("BreadcrumbScreenNameId");
    jVarLocalBreadcrumbScreenNameId.innerHTML = inScreenName;
};

let jFTableShow = async ({ inProjectName, inSubRoute, inFolderName, inFileName, inItemName, inScreenName }) => {
    let jVarCardBody = document.getElementById("KCont1");

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileName = inFileName;
    let jVarLocalItemName = inItemName;
    let jVarLocalScreenName = inScreenName;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/PullData/WithConfig`;

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inFolderName: jVarLocalFolderName,
            inFileName: jVarLocalFileName,
            inItemName: jVarLocalItemName,
            inScreenName: jVarLocalScreenName
        })
    });

    let FetchData = await response.json();

    if (FetchData.KTF) {
        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
        jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
            inData: jVarGlobalPresentViewData,
            inHtmlParent: jVarCardBody
        });

        return await true;
        // let jVarLocalPrintButtons = document.querySelectorAll(".Options.Print");
        // //MainTable Body Row Options Print
        // jVarLocalPrintButtons.forEach((spanElement) => {
        //     spanElement.addEventListener("click", (event) => {
        //         jFPrintFromData({
        //             inEvent: event,
        //             inProjectName: jVarLocalRoute
        //         })
        //     });
        // });

    };
};

let StartFunc = async ({ inProjectName, inSubRoute }) => {
    let LocalRowCount = 0;

    if ("FolderName" in jVarLocalObjectFromUrlSearchParams) {

        if (jVarLocalObjectFromUrlSearchParams.FolderName === "") {
            alert("Please select Folder Name!");
        };

        if ("FileName" in jVarLocalObjectFromUrlSearchParams) {
            if (jVarLocalObjectFromUrlSearchParams.FileName === "") {
                alert("Please select File Name!");
            };

            if ("ItemName" in jVarLocalObjectFromUrlSearchParams) {
                if (jVarLocalObjectFromUrlSearchParams.ItemName === "") {
                    alert("Please select Item Name!");
                };

                if ("ScreenName" in jVarLocalObjectFromUrlSearchParams) {
                    if (jVarLocalObjectFromUrlSearchParams.ScreenName === "") {
                        alert("Please select Screen Name!");
                    };

                    jFShowFolderInBreadcrumb({
                        inFolderName: jVarLocalObjectFromUrlSearchParams.FolderName,
                        inFileNameWithExtension: jVarLocalObjectFromUrlSearchParams.FileName,
                        inItemName: jVarLocalObjectFromUrlSearchParams.ItemName,
                        inScreenName: jVarLocalObjectFromUrlSearchParams.ScreenName
                    });

                    return await jFTableShow({
                        inProjectName, inSubRoute,
                        inFolderName: jVarLocalObjectFromUrlSearchParams.FolderName,
                        inFileName: jVarLocalObjectFromUrlSearchParams.FileName,
                        inItemName: jVarLocalObjectFromUrlSearchParams.ItemName,
                        inScreenName: jVarLocalObjectFromUrlSearchParams.ScreenName
                    })

                    // if ("RowCount" in jVarLocalFromReturnFolderAndFileNameAndItemName) {
                    //     LocalRowCount = jVarLocalFromReturnFolderAndFileNameAndItemName.RowCount;
                    // };

                    // ScreensFetchAsPost({
                    //     inProjectName: jVarGlobalProject,
                    //     inSubRoute: jVarGlobalSubRoute,
                    //     inFolderName: jVarLocalFromReturnFolderAndFileNameAndItemName.FolderName,
                    //     inFileNameWithExtension: jVarLocalFromReturnFolderAndFileNameAndItemName.FileName,
                    //     inItemName: jVarLocalFromReturnFolderAndFileNameAndItemName.ItemName,
                    //     inRowCount: LocalRowCount
                    // });
                };
            };
        };

    };
};


export { StartFunc }