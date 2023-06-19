import { ReturnFolderAndFileNameAndItemName } from "./urlSearchParams.js";
import { jFShowFolderInBreadcrumb } from "../CommonFuncs/BreadcrumbFuncs.js";

let jVarLocalObjectFromUrlSearchParams = ReturnFolderAndFileNameAndItemName();

let jVLocalVerticalShow = async ({ inProjectName, inSubRoute, inFolderName, inFileName, inItemName, inScreenName, inJsonPk }) => {
    let jVarCardBody = document.getElementById("KCont1");

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileName = inFileName;
    let jVarLocalItemName = inItemName;
    let jVarLocalScreenName = inScreenName;
    let jVarLocalJsonPk = inJsonPk;

    //   let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/PullData/WithConfig`;
    //   let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Fromjson`;
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Show/ForInsert`;

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            FolderName: jVarLocalFolderName,
            FileNameWithExtension: jVarLocalFileName,
            ItemName: jVarLocalItemName,
            Screenname: jVarLocalScreenName,
            JsonPk: jVarLocalJsonPk
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

                    if ("JsonPk" in jVarLocalObjectFromUrlSearchParams) {
                        if ((jVarLocalObjectFromUrlSearchParams.JsonPk > 0) === false) {
                            alert("Please send JsonPk also!");
                        };

                        jFShowFolderInBreadcrumb({
                            inFolderName: jVarLocalObjectFromUrlSearchParams.FolderName,
                            inFileNameWithExtension: jVarLocalObjectFromUrlSearchParams.FileName,
                            inItemName: jVarLocalObjectFromUrlSearchParams.ItemName,
                            inScreenName: jVarLocalObjectFromUrlSearchParams.ScreenName
                        });

                        return await jVLocalVerticalShow({
                            inProjectName, inSubRoute,
                            inFolderName: jVarLocalObjectFromUrlSearchParams.FolderName,
                            inFileName: jVarLocalObjectFromUrlSearchParams.FileName,
                            inItemName: jVarLocalObjectFromUrlSearchParams.ItemName,
                            inScreenName: jVarLocalObjectFromUrlSearchParams.ScreenName,
                            inJsonPk: jVarLocalObjectFromUrlSearchParams.JsonPk
                        });
                    };
                };
            };
        };

    };
};

export { StartFunc }