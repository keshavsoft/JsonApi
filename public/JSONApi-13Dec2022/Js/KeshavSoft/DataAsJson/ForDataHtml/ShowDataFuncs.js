import { ReturnFolderAndFileNameAndItemName } from "./urlSearchParams.js";

let jVarLocalObjectFromUrlSearchParams = ReturnFolderAndFileNameAndItemName();

let jFShowFolderInBreadcrumb = ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.href = `Files.html?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;

    let jVarLocalBreadcrumbFileNameId = document.getElementById("BreadcrumbFileNameId");
    jVarLocalBreadcrumbFileNameId.href = `Items.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}`;
    jVarLocalBreadcrumbFileNameId.innerHTML = inFileNameWithExtension;

    let jVarLocalBreadcrumbItemNameId = document.getElementById("BreadcrumbItemNameId");
    jVarLocalBreadcrumbItemNameId.href = `Screens.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}&ItemName=${inItemName}`;
    jVarLocalBreadcrumbItemNameId.innerHTML = inItemName;

    let jVarLocalBreadcrumbScreenNameId = document.getElementById("BreadcrumbScreenNameId");
    jVarLocalBreadcrumbScreenNameId.innerHTML = inScreenName;
};

console.log("jVarLocalObjectFromUrlSearchParams : ", jVarLocalObjectFromUrlSearchParams);


let jFTableShow = ({ inProjectName, inSubRoute, inFolderName, inFileName, inItemName, inScreenName }) => {
    let jVarCardBody = document.getElementById("KCont1");

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileName = inFileName;
    let jVarLocalItemName = inItemName;
    let jVarLocalScreenName = inScreenName;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/PullData/WithConfig`;

    console.log("jVarLocalFetchUrl : ", jVarLocalFetchUrl);



    fetch(jVarLocalFetchUrl, {
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
    }).then(response => {
        if (!response.ok) { throw new Error(response.statusText) };
        return response.json();
    }).then((FetchData) => {

        console.log("FetchData : ", FetchData);


        if (FetchData.KTF) {
            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
            jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
                inData: jVarGlobalPresentViewData,
                inHtmlParent: jVarCardBody
            });
        };
    });
};


let StartFunc = ({ inProjectName, inSubRoute }) => {
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

                    jFTableShow({
                        inProjectName, inSubRoute,
                        inFolderName: jVarLocalObjectFromUrlSearchParams.FolderName,
                        inFileName: jVarLocalObjectFromUrlSearchParams.FileName,
                        inItemName: jVarLocalObjectFromUrlSearchParams.ItemName,
                        inScreenName: jVarLocalObjectFromUrlSearchParams.ScreenName
                    });

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