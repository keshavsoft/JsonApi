import { FetchAsPostFromFolderName } from "../MenuAsCards/ForFiles.js";

let jFShowFoldersInMenu = ({ inProjectName, inSubRoute }) => {
    // let jVarLocalRoute = jVarGlobalProjectConfig.RouteStart.Start;

    // let jVarLocalSubRoute = jVarGlobalSubRoute;

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;


    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/GetDirs/MenuWithDesign`;

    fetch(jVarLocalFetchUrl).then(response => {
        if (response.status === 403) {
            return null;
        };

        switch (response.headers.get("content-type")) {
            case "text/html":
                return response.text();
                break;
            case "application/json":
                return response.json();
                break;
            default:
                return response.json();
                break;
        };
    }).then(dataFromApi => {
        if (dataFromApi !== null) {
            if (dataFromApi.KTF) {
                let jVarLocalFoldersDataListId = document.getElementById("FoldersDataListId");
                jVarLocalFoldersDataListId.innerHTML = "";
                let jVarLocalFoldersButtonShowId = document.getElementById("FoldersButtonShowId");

                console.log("jVarLocalFoldersDataListId-------- : ", jVarLocalFoldersDataListId, dataFromApi);

                Object.keys(dataFromApi.Folders).forEach(function (item) {
                    var option = document.createElement('option');
                    option.value = item;
                    jVarLocalFoldersDataListId.appendChild(option);
                });

                jVarLocalFoldersButtonShowId.addEventListener("click", FetchAsPostFromFolderName);
                // let k1 = document.querySelectorAll('[keshavsoftfoldername]');

                // k1.forEach((spanElement) => {

                // });

            };
        };
    });
};

export { jFShowFoldersInMenu }