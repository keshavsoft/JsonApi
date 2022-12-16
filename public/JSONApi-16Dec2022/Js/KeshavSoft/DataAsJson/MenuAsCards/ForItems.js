import { ScreensFetchAsPost } from "./ForScreens.js";

let LocalBreadcrumbItemClick = ({ inFolderName, inFileNameWithExtension, inItemName }) => {
    this.ForScreens.FetchAsPost(inFolderName, inFileNameWithExtension, inItemName);
};

let ForItemsFetchAsPost = ({ inFolderName, inFileNameWithExtension }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;

    let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
    let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/Items/GetData/AsArray`;

    fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inFolderName: jVarLocalFolderName,
            inFileNameWithExtension: jVarLocalFileNameWithExtension
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
            LocalStartFunc({
                inFilesObjects: dataFromApi,
                inFolderName: jVarLocalFolderName,
                inFileNameWithExtension: jVarLocalFileNameWithExtension
            });

            // this.ForItems.CommonFuncs.BuildBreadcrumb({
            //     inFolderName: jVarLocalFolderName,
            //     inFileNameWithExtension: jVarLocalFileNameWithExtension
            // });
        };
    });
};

// CommonFuncs: {
//     BuildBreadcrumb: ({ inFolderName, inFileNameWithExtension }) => {
//         let jVarLocalFolderName = inFolderName;
//         let jVarLocalFileNameWithExtension = inFileNameWithExtension;

//         let jVarLocalbreadcrumbObject = {};
//         jVarLocalbreadcrumbObject.Home = {};
//         jVarLocalbreadcrumbObject[jVarLocalFolderName] = {
//             onClick: `jGlobalClassForCardMenu.ForFolders.Breadcrumb.ItemClick({inFolderName:'${jVarLocalFolderName}'})`
//         };

//         jVarLocalbreadcrumbObject[jVarLocalFileNameWithExtension] = {
//             onClick: `jGlobalClassForCardMenu.ForFiles.Breadcrumb.ItemClick(
//                                 {inFolderName:'${jVarLocalFolderName}',
//                                 inFileNameWithExtension:'${jVarLocalFileNameWithExtension}'})`
//         };

//         jFBuildBreadcrumb(jVarLocalbreadcrumbObject);
//     }
// };

let LocalStartFunc = ({ inFolderName, inFileNameWithExtension, inFilesObjects }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalFilesObjects = inFilesObjects;

    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalNewRow = document.createElement("div");
    jVarLocalNewRow.setAttribute("class", "row");

    Object.entries(jVarLocalFilesObjects).forEach(
        ([key, value]) => {
            let jVarLocalFromLoop = LocalLoopFunc({
                inFolderName: jVarLocalFolderName,
                inFileNameWithExtension: jVarLocalFileNameWithExtension,
                inItemName: value.ItemName,
                inRowCount: value.RowCount,
                inScreenCount: value.ScreenCount
            });

            jVarLocalNewRow.appendChild(jVarLocalFromLoop);
        }
    );

    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);

    Handlebars.registerPartial("aaaaaaaaaaaaa", "kkkkkkkkkkk");

    let jVarLocalkeshavsoftItemClick = document.getElementsByClassName("keshavsoftItemclick");
    console.log("kkkkkkkkkkkkkkkkkkkkk:", jVarLocalkeshavsoftItemClick);
    Array.from(jVarLocalkeshavsoftItemClick).forEach((spanElement) => {
        spanElement.addEventListener("click", (event) => {
            let jVarInsideCurrentTarget = event.currentTarget;
            let jVarLocalKeshavsoftGetItemName = jVarInsideCurrentTarget.getAttribute("keshavsoftItemName");

            ScreensFetchAsPost({
                inFolderName: jVarLocalFolderName,
                inFileNameWithExtension:jVarLocalFileNameWithExtension,
                inItemName: jVarLocalKeshavsoftGetItemName
            })
        });
    });
};

let LocalLoopFunc = ({ inFolderName, inFileNameWithExtension, inItemName, inRowCount, inScreenCount }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalItemName = inItemName;
    let jVarLocalAnchor;

    let jVarLocalTemplate = document.getElementById("TemplateForItemCard");
    var jVarLocalTemplateClone = jVarLocalTemplate.cloneNode(true);

    // jVarLocalTemplateClone.content.querySelector("a").setAttribute("onclick", `jGlobalClassForCardMenu.ForScreens.FetchAsPost('${jVarLocalFolderName}','${inFileNameWithExtension}','${jVarLocalItemName}','${inRowCount}')`);

    // jVarLocalTemplateClone.content.querySelector("a").setAttribute("onclick", (event) => {
    //     let jVarLocalCurrentTarget = event.currentTarget;
    //     console.log("jVarLocalCurrentTarget : ", jVarLocalCurrentTarget);
    // });
    jVarLocalAnchor = jVarLocalTemplateClone.content.querySelector("a");
    jVarLocalAnchor.setAttribute("keshavsoftItemName", jVarLocalItemName);
    
    console.log("jVarLocalAnchor : ", jVarLocalAnchor);
    jVarLocalTemplateClone.content.querySelector(".ItemNameClass").innerHTML = jVarLocalItemName;
    jVarLocalTemplateClone.content.querySelector(".RowCountClass").innerHTML = inRowCount;
    jVarLocalTemplateClone.content.querySelector(".ScreenCountClass").innerHTML = inScreenCount;

    // jVarLocalAnchor.addEventListener("click", (event) => {
    //     let jVarInsideCurrentTarget = event.currentTarget;
    //     let jVarLocalKeshavsoftGetItemName = jVarInsideCurrentTarget.getAttribute("keshavsoftItemName");

    //     ScreensFetchAsPost({
    //         inFolderName: jVarLocalFolderName,
    //         inFileNameWithExtension:jVarLocalFileNameWithExtension,
    //         inItemName: jVarLocalKeshavsoftGetItemName
    //     })
    // });

    return document.importNode(jVarLocalTemplateClone.content, true);
};

export { ForItemsFetchAsPost }