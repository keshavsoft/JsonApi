let ScreensFetchAsPost = ({ inFolderName, inFileNameWithExtension, inItemName, inRowCount }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalItemName = inItemName;
    let jVarLocalRowCount = inRowCount;

    let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
    let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/Items/Screens/GetData/AsArrayOfObjects`;

    fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inFolderName: jVarLocalFolderName,
            inFileNameWithExtension: jVarLocalFileNameWithExtension,
            inItemName: jVarLocalItemName
        })
    }).then(response => {
        if (response.status === 403) {
            let jVarLocalModalId = this.Config.Ht.HtmlIds.Modals.LoginModalId;
            let jVarLocalLoginFormPopUpId = document.getElementById(jVarLocalModalId);

            if (jVarLocalLoginFormPopUpId !== null) {
                var myModal = new bootstrap.Modal(jVarLocalLoginFormPopUpId, { keyboard: false, focus: true });
                myModal.show();
            };
            return null;
        };

        return response.json();
    }).then(dataFromApi => {
        if (dataFromApi !== null) {
            if (dataFromApi.KTF) {
                LocalStartFunc({
                    inFilesObjects: dataFromApi.ScreensWithColumnCount,
                    inFolderName: jVarLocalFolderName,
                    inFileNameWithExtension: jVarLocalFileNameWithExtension,
                    inItemName: jVarLocalItemName,
                    inRowCount: jVarLocalRowCount
                });

                // this.ForScreens.CommonFuncs.BuildBreadcrumb({
                //     inFolderName: jVarLocalFolderName,
                //     inFileNameWithExtension: jVarLocalFileNameWithExtension,
                //     inItemName: jVarLocalItemName
                // });

            };
        };
    });
};

// CommonFuncs: {
//     BuildBreadcrumb: ({ inFolderName, inFileNameWithExtension, inItemName }) => {
//         let jVarLocalFolderName = inFolderName;
//         let jVarLocalFileNameWithExtension = inFileNameWithExtension;
//         let jVarLocalItemName = inItemName;

//         let jVarLocalbreadcrumbObject = {};
//         jVarLocalbreadcrumbObject.Home = {};

//         jVarLocalbreadcrumbObject[jVarLocalFolderName] = {
//             onClick: `jGlobalClassForCardMenu.ForFolders.Breadcrumb.ItemClick({inFolderName:'${jVarLocalFolderName}'})`
//         };

//         jVarLocalbreadcrumbObject[jVarLocalFileNameWithExtension] = {
//             onClick: `jGlobalClassForCardMenu.ForFiles.Breadcrumb.ItemClick(
//                         {inFolderName:'${jVarLocalFolderName}',
//                         inFileNameWithExtension:'${jVarLocalFileNameWithExtension}'})`
//         };

//         jVarLocalbreadcrumbObject[jVarLocalItemName] = {
//             onClick: `jGlobalClassForCardMenu.ForItems.Breadcrumb.ItemClick(
//                         {inFolderName:'${jVarLocalFolderName}',
//                         inFileNameWithExtension:'${jVarLocalFileNameWithExtension}',
//                         inItemName:'${jVarLocalItemName}'})`
//         };

//         jFBuildBreadcrumb(jVarLocalbreadcrumbObject);
//     }
// },


let LocalStartFunc = ({ inFilesObjects, inFolderName, inFileNameWithExtension, inItemName, inRowCount }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalFilesObjects = inFilesObjects;
    let jVarLocalItemName = inItemName;
    let jVarLocalRowCount = inRowCount;

    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalNewRow = document.createElement("div");

    jVarLocalNewRow.setAttribute("class", "row");

    Object.entries(jVarLocalFilesObjects).forEach(
        ([key, value]) => {
            let jVarLocalFromLoop = LocalLoopFunc({
                inFolderName: jVarLocalFolderName,
                inFileNameWithExtension: jVarLocalFileNameWithExtension,
                inItemName: jVarLocalItemName,
                inScreenName: value.ScreenName,
                inColumnCount: value.ColumnCount,
                inRowCount: jVarLocalRowCount
            });
            jVarLocalNewRow.appendChild(jVarLocalFromLoop);
        });
    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);

};

let LocalLoopFunc = ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName, inColumnCount, inRowCount }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalItemName = inItemName;
    let jVarLocalColumnCount = inColumnCount;
    let jVarLocalRowCount = inRowCount;
    let jVarLocalScreenName = inScreenName;

    let jVarLocalTemplate = document.getElementById("TemplateForScreens");
    var jVarLocalTemplateClone = jVarLocalTemplate.cloneNode(true);

    jVarLocalTemplateClone.content.querySelector("a").setAttribute("onclick", `
                    jGlobalClassForCardMenu.ForJsonData.FetchAsPost({
                        inFolderName: "${jVarLocalFolderName}",
                        inFileName: "${jVarLocalFileNameWithExtension}",
                        inItemName: "${jVarLocalItemName}",
                        inScreenName: "${jVarLocalScreenName}"
                        })`);

    jVarLocalTemplateClone.content.querySelector(".ScreenNameClass").innerHTML = inScreenName;
    jVarLocalTemplateClone.content.querySelector(".ColumnCountClass").innerHTML = jVarLocalColumnCount;
    jVarLocalTemplateClone.content.querySelector(".RowCountClass").innerHTML = jVarLocalRowCount;


    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{ItemName}}/g, inItemName);
    // jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace("{{ItemCount}}", inItemCount);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace("{{FolderName}}", jVarLocalFolderName);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace("{{FileNameWithExtension}}", jVarLocalFileNameWithExtension);
    //jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace("{{ColumnCount}}", inColumnCount);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace("{{ScreenName}}", inScreenName);

    return document.importNode(jVarLocalTemplateClone.content, true);
};

export { ScreensFetchAsPost };


