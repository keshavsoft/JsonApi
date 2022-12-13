// import { ForItemsFetchAsPost } from "./ForItems.js";

let FetchFiles = ({ inProjectName, inSubRoute, inFolderName }) => {
    let jVarLocalFolderName = inFolderName;

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;

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

            // let jVarLocalkeshavsoftfilesclick = document.getElementsByClassName("keshavsoftfilesclick");

            // Array.from(jVarLocalkeshavsoftfilesclick).forEach((spanElement) => {
            //     spanElement.addEventListener("click", (event) => {
            //         let jVarInsideCurrentTarget = event.currentTarget;
            //         let jVarLocalKeshavsoftGetFileName = jVarInsideCurrentTarget.getAttribute("keshavsoftfilename");
            //         console.log("jVarLocalKeshavsoftGetFileName:", jVarLocalKeshavsoftGetFileName);


            //         ForItemsFetchAsPost({
            //             inFolderName: jVarLocalFolderName,
            //             inFileNameWithExtension: jVarLocalKeshavsoftGetFileName
            //         })
            //     });
            // });
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

export {  FetchFiles }