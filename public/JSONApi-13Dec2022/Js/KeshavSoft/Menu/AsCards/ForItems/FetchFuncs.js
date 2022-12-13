let ForItemsFetchAsPost = ({ inProjectName, inSubRoute, inFolderName, inFileNameWithExtension }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;

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
        };
    });
};

let LocalStartFunc = ({ inFolderName, inFileNameWithExtension, inFilesObjects }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalFilesObjects = inFilesObjects;

    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalNewRow = document.createElement("div");
    jVarLocalNewRow.setAttribute("class", "row");

    Object.entries(jVarLocalFilesObjects).forEach(
        ([key, value]) => {
            let jVarLocalTemplate = document.getElementById("TemplateForItemCard");

            console.log("jVarLocalTemplate : ", jVarLocalTemplate);

            var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

            // console.log(template({
            //     inFolderName: jVarLocalFolderName,
            //     inFileNameWithExtension: jVarLocalFileNameWithExtension,
            //     inItemName: value.ItemName,
            //     inRowCount: value.RowCount,
            //     inScreenCount: value.ScreenCount
            // }));

            let jVarLocalFromLoop = template({
                inFolderName: jVarLocalFolderName,
                inFileNameWithExtension: jVarLocalFileNameWithExtension,
                inItemName: value.ItemName,
                inRowCount: value.RowCount,
                inScreenCount: value.ScreenCount
            });

            jVarLocalNewRow.insertAdjacentHTML("beforeend", jVarLocalFromLoop);

            //jVarLocalNewRow.appendChild(jVarLocalFromLoop);
        }
    );

    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);

    // Handlebars.registerPartial("aaaaaaaaaaaaa", "kkkkkkkkkkk");

    // let jVarLocalkeshavsoftItemClick = document.getElementsByClassName("keshavsoftItemclick");
    // console.log("kkkkkkkkkkkkkkkkkkkkk:", jVarLocalkeshavsoftItemClick);
    // Array.from(jVarLocalkeshavsoftItemClick).forEach((spanElement) => {
    //     spanElement.addEventListener("click", (event) => {
    //         let jVarInsideCurrentTarget = event.currentTarget;
    //         let jVarLocalKeshavsoftGetItemName = jVarInsideCurrentTarget.getAttribute("keshavsoftItemName");

    //         ScreensFetchAsPost({
    //             inFolderName: jVarLocalFolderName,
    //             inFileNameWithExtension:jVarLocalFileNameWithExtension,
    //             inItemName: jVarLocalKeshavsoftGetItemName
    //         })
    //     });
    // });

};

export { ForItemsFetchAsPost }