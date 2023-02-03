import { ReturnFolderAndFileNameAndItemName } from "./urlSearchParams.js";
import { jFShowFolderInBreadcrumb } from "../CommonFuncs/BreadcrumbFuncs.js";

let jVarLocalObjectFromUrlSearchParams = ReturnFolderAndFileNameAndItemName();

let jFShowFolderInBreadcrumb_Local = ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.href = `Menu/AsCards/Files.html?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;

    let jVarLocalBreadcrumbFileNameId = document.getElementById("BreadcrumbFileNameId");
    jVarLocalBreadcrumbFileNameId.href = `Menu/AsCards/Items.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}`;
    jVarLocalBreadcrumbFileNameId.innerHTML = inFileNameWithExtension;

    let jVarLocalBreadcrumbItemNameId = document.getElementById("BreadcrumbItemNameId");
    jVarLocalBreadcrumbItemNameId.href = `Menu/AsCards/Screens.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}&ItemName=${inItemName}`;
    jVarLocalBreadcrumbItemNameId.innerHTML = inItemName;

    let jVarLocalBreadcrumbScreenNameId = document.getElementById("BreadcrumbScreenNameId");
    jVarLocalBreadcrumbScreenNameId.innerHTML = inScreenName;
};

let jFPrintFunc = async ({ inProjectName, inSubRoute, inFolderName, inFileName, inItemName, inScreenName, inRowPK }) => {
    let jVarCardBody = document.getElementById("KCont1");

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileName = inFileName;
    let jVarLocalItemName = inItemName;
    let jVarLocalScreenName = inScreenName;
    let jVarLocalRowPK = inRowPK;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Preview/ShowData/FromDataFolder`;

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inFolderName: jVarLocalFolderName,
            inJsonFileName: jVarLocalFileName,
            inItemName: jVarLocalItemName,
            inScreenName: jVarLocalScreenName,
            inRowPK: jVarLocalRowPK
        })
    });

    let FetchData = await response.json();

    if (FetchData.KTF) {
        await jFPullPrintFiles({
            inProjectName, inSubRoute, inFolderName, inFileName, inItemName,
            inScreenName: jVarLocalScreenName,
            inJsonData: FetchData.JsonData
        });

        return await true;
    };
};

let jFPullPrintFiles = async ({ inProjectName, inSubRoute, inFolderName, inFileName, inItemName, inScreenName, inJsonData }) => {
    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileName = inFileName;
    let jVarLocalItemName = inItemName;
    let jVarLocalScreenName = inScreenName;

    //let jVarLocalFetchForHtmlFiles = `${window.location.origin}/${jVarLocalRoute}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/FromPrintFilesJson/GetData/AsArray`;
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/FromPrintFilesJson/GetData/AsArray`;
    console.log("bbbbbbbbbbbb : ", jVarLocalFetchUrl);
    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inFolderName: jVarLocalFolderName,
            inJsonFileName: jVarLocalFileName,
            inItemName: jVarLocalItemName,
            inScreenName: jVarLocalScreenName
        })
    });

    let FetchData = await response.json();

    if (FetchData.KTF) {
        // Object.entries(FetchData.HtmlData).forEach(
        //     ([key, value]) => {
        //         console.log("jVarLocalLoopValue : ", value);
        //         var template = Handlebars.compile(value);
        //         jVarLocalToShowHtml = template(inJsonData);
        //         document.getElementById("KCont1").insertAdjacentHTML("beforeend", jVarLocalToShowHtml);
        //     }
        // );

        for (let LoopIndex = 0; LoopIndex < FetchData.HtmlData.length; LoopIndex++) {
            const jVarLocalLoopValue = Object.values(FetchData.HtmlData[LoopIndex])[0];
            console.log("jVarLocalLoopValue : ", jVarLocalLoopValue, inJsonData);
            var template = Handlebars.compile(jVarLocalLoopValue);
            let jVarLocalToShowHtml = template(inJsonData);
            document.getElementById("KCont1").insertAdjacentHTML("beforeend", jVarLocalToShowHtml);
        };


        let k1 = document.getElementById("KCont1");
        //        k1.innerHTML = "";

        // console.log("ssssssss : ", Object.values(FetchData.HtmlData[0]));
        // k1.innerHTML = Object.values(FetchData.HtmlData[0])[0];

        return await true;
    };
};

let StartFunc = async ({ inProjectName, inSubRoute }) => {
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

                    if ("RowPK" in jVarLocalObjectFromUrlSearchParams) {
                        if (jVarLocalObjectFromUrlSearchParams.RowPK === "") {
                            alert("Please select Screen Name!");
                        };

                        jFShowFolderInBreadcrumb({
                            inFolderName: jVarLocalObjectFromUrlSearchParams.FolderName,
                            inFileNameWithExtension: jVarLocalObjectFromUrlSearchParams.FileName,
                            inItemName: jVarLocalObjectFromUrlSearchParams.ItemName,
                            inScreenName: jVarLocalObjectFromUrlSearchParams.ScreenName
                        });

                        return await jFPrintFunc({
                            inProjectName, inSubRoute,
                            inFolderName: jVarLocalObjectFromUrlSearchParams.FolderName,
                            inFileName: jVarLocalObjectFromUrlSearchParams.FileName,
                            inItemName: jVarLocalObjectFromUrlSearchParams.ItemName,
                            inScreenName: jVarLocalObjectFromUrlSearchParams.ScreenName,
                            inRowPK: jVarLocalObjectFromUrlSearchParams.RowPK
                        });
                    };
                };
            };
        };

    };
};

let jFPullPrintFiles1 = ({ inPrintFilesArray, inJsonData, inHtmlPath }) => {
    let jVarLocalPrintFilesArray = inPrintFilesArray;
    let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
    let jVarLocalCookieFirmDetails = localStorage.getItem("FirmDetails");
    let jVarLocalDataPk = JSON.parse(jVarLocalCookieFirmDetails);

    PromiseArray = jVarLocalPrintFilesArray.map(element => {
        return fetch(`${window.location.origin}/${jVarLocalRoute}/Html/UserData/JSON/${jVarLocalDataPk.kPK}/${inHtmlPath}/${element}`);
    });

    Promise.all(PromiseArray)
        .then(responses => {
            return Promise.all(responses.map((LoopItem, LoopIndex) => {
                return LoopItem.text();
            }));
        }).then(responses => {
            for (let LoopIndex = 0; LoopIndex < responses.length; LoopIndex++) {
                const jVarLocalLoopValue = responses[LoopIndex];

                var template = Handlebars.compile(jVarLocalLoopValue);
                jVarLocalToShowHtml = template(inJsonData);
                document.getElementById("KCont1").insertAdjacentHTML("beforeend", jVarLocalToShowHtml);
            };

            window.print();
        });
};

let jFPullPrintFiles2 = ({ inEvent, inProjectName }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalBodyObject = LocalPrepareBodyObject({ inDataSetObject: jVarLocalCurrentTarget.dataset });


    let jVarLocalRoute = inProjectName;

    let jVarLocalFetchForHtmlFiles = `${window.location.origin}/${jVarLocalRoute}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/FromPrintFilesJson/GetData/AsArray`;
    let jVarLocalFetchJsonData = `${window.location.origin}/${jVarLocalRoute}/Api/Preview/ShowData/FromDataFolder`;
    let jVarLocalFetchForHtmlFilesHeaders = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyObject)
    };

    fetch(jVarLocalFetchForHtmlFiles, jVarLocalFetchForHtmlFilesHeaders).then(p => p.json()).then(p => {
        let k1 = document.getElementById("KCont1");
        //        k1.innerHTML = "";

        console.log("ssssssss : ", Object.values(p.HtmlData[0]));
        k1.innerHTML = Object.values(p.HtmlData[0])[0];

    });


    //    this.CommonFuncs.ForPrint({ inPromiseArray: PromiseArray, inCurrentTarget: jVarLocalCurrentTarget });
};



export { StartFunc }