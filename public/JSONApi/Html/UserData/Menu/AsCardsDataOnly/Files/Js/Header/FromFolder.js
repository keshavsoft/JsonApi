let jFPrepareMenuItem = ({ inFileName, inMenuClass, inIconClass }) => {
    let jVarLocalFileName = inFileName;
    let jVarLocalMenuClass = inMenuClass;
    let jVarLocalIconClass = inIconClass;

    let jVarLocalMenuNavContainerId = document.getElementById("MenuNavContainerId");
    let jVarLocalTemplate = document.getElementById("TemplateForMenuItem");

    var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

    let jVarLocalToShowHtml = template({
        MenuName: jVarLocalFileName, MenuClass: jVarLocalMenuClass,
        IconClass: jVarLocalIconClass
    });

    jVarLocalMenuNavContainerId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
};

let jFShowFoldersInMenu = ({ inProjectName, inSubRoute }) => {
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
                Object.entries(dataFromApi.Folders).forEach(([key, value]) => {
                    jFPrepareMenuItem({
                        inFileName: value.FolderName,
                        inMenuClass: value.MenuClass,
                        inIconClass: value.IconClass
                    });
                });
            };
        };
    });
};

export { jFShowFoldersInMenu }