import { ForItemsFetchAsPost } from "./ForItems.js";

let FetchAsPost = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    let jVarLocalClosestNavbar = jVarLocalCurrentTarget.closest("ul");

    let jVarLocalFolderName = jVarLocalCurrentTarget.getAttribute("keshavsoftfoldername");

    let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
    let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/GetFilesAsTree/WithItemAndScreenCount`;

    fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inFolderName: jVarLocalFolderName })
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
                inFolderName: jVarLocalFolderName
            });

            jVarLocalClosestNavbar.querySelectorAll("li a").forEach(element => {
                element.classList.remove("text-info");
                element.classList.add("text-white");
            });

            jVarLocalCurrentTarget.classList.remove("text-white");
            jVarLocalCurrentTarget.classList.add("text-info");

            BuildBreadcrumb({ inFolderName: jVarLocalFolderName });


            let jVarLocalkeshavsoftfilesclick = document.getElementsByClassName("keshavsoftfilesclick");

            Array.from(jVarLocalkeshavsoftfilesclick).forEach((spanElement) => {
                spanElement.addEventListener("click", (event) => {
                    let jVarInsideCurrentTarget = event.currentTarget;
                    let jVarLocalKeshavsoftGetFileName = jVarInsideCurrentTarget.getAttribute("keshavsoftfilename");
                    console.log("jVarLocalKeshavsoftGetFileName:", jVarLocalKeshavsoftGetFileName);


                    ForItemsFetchAsPost({
                        inFolderName: jVarLocalFolderName,
                        inFileNameWithExtension: jVarLocalKeshavsoftGetFileName
                    })
                });
            });
        };
    });
};

let FetchAsPostFromFolderName = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    //let jVarLocalFolderName = inFolderName;
    let jVarClosestInputGroup = jVarLocalCurrentTarget.closest(".input-group");
    let jVarLocalinput = jVarClosestInputGroup.querySelector("input");

    let jVarLocalFolderName = jVarLocalinput.value;

    let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
    let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/GetFilesAsTree/WithItemAndScreenCount`;

    fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inFolderName: jVarLocalFolderName })
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
                inFolderName: jVarLocalFolderName
            });

            let jVarLocalkeshavsoftfilesclick = document.getElementsByClassName("keshavsoftfilesclick");

            Array.from(jVarLocalkeshavsoftfilesclick).forEach((spanElement) => {
                spanElement.addEventListener("click", (event) => {
                    let jVarInsideCurrentTarget = event.currentTarget;
                    let jVarLocalKeshavsoftGetFileName = jVarInsideCurrentTarget.getAttribute("keshavsoftfilename");

                    ForItemsFetchAsPost({
                        inFolderName: jVarLocalFolderName,
                        inFileNameWithExtension: jVarLocalKeshavsoftGetFileName
                    })
                });
            });
        };
    });
};

let LocalStartFunc = ({ inFolderName, inFilesObjects }) => {
    let jVarLocalFilesObjects = inFilesObjects;
    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalNewRow = document.createElement("div");
    jVarLocalNewRow.setAttribute("class", "row");

    Object.entries(jVarLocalFilesObjects).forEach(
        ([key, value]) => {
            let jVarLocalFromLoop = LocalLoopFunc({
                inFolderName: inFolderName,
                inFileName: value.FileName,
                inItemCount: Object.keys(value.Items).length
            });
            jVarLocalNewRow.appendChild(jVarLocalFromLoop);
        });

    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);

};

let LocalLoopFunc = ({ inFolderName, inFileName, inItemCount }) => {
    let jVarLocalTemplate = document.getElementById("TemplateForFiles");
    var jVarLocalTemplateClone = jVarLocalTemplate.cloneNode(true);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{FileName}}/g, inFileName);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace("{{ItemCount}}", inItemCount);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace("{{FolderName}}", inFolderName);

    return document.importNode(jVarLocalTemplateClone.content, true);
};

let BuildBreadcrumb = ({ inFolderName }) => {
    let jVarLocalFolderName = inFolderName;

    let jVarLocalbreadcrumbObject = {};

    jVarLocalbreadcrumbObject.Home = {};

    jVarLocalbreadcrumbObject[jVarLocalFolderName] = {
        onClick: `jGlobalClassForCardMenu.ForFolders.Breadcrumb.ItemClick({inFolderName:'${inFolderName}'})`
    };

    jFBuildBreadcrumb(jVarLocalbreadcrumbObject);
};

let jFBuildBreadcrumb = (inMenuObject) => {
    let jVarLocalMenuObject = inMenuObject;
    let jVarLocalbreadcrumbHtmlId = document.getElementById("breadcrumbHtmlId");

    var jVarGlobalTemplate = Handlebars.compile(document.getElementById("TemplateForBreadcrumb").innerHTML);
    let jVarGlobalHtml = jVarGlobalTemplate(jVarLocalMenuObject);

    jVarLocalbreadcrumbHtmlId.innerHTML = "";
    jVarLocalbreadcrumbHtmlId.insertAdjacentHTML("beforeend", jVarGlobalHtml);
};

export { FetchAsPost, FetchAsPostFromFolderName }