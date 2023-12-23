let ScreensFetchAsPost = ({ inProjectName, inSubRoute, inFolderName, inFileNameWithExtension, inItemName, inRowCount }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalItemName = inItemName;
    let jVarLocalRowCount = inRowCount;

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;

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
            let jVarLocalTemplate = document.getElementById("TemplateForScreens");
            var template = Handlebars.compile(jVarLocalTemplate.innerHTML);
            let LoopInsideDataObject = {
                inFolderName: jVarLocalFolderName,
                inFileNameWithExtension: jVarLocalFileNameWithExtension,
                inItemName: jVarLocalItemName,
                inScreenName: value.ScreenName,
                inColumnCount: value.ColumnCount,
                inRowCount: jVarLocalRowCount
            };
            let jVarLocalFromLoop = template(LoopInsideDataObject);

            jVarLocalNewRow.insertAdjacentHTML("beforeend", jVarLocalFromLoop);
        });
    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);

};

export { ScreensFetchAsPost };


