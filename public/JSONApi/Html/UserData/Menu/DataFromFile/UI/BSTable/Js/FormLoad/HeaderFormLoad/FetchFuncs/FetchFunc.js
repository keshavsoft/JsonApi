import ConfigJson from "../../../../../../../../../../Config.json" assert {type: 'json'};
import { StartFunc as StartFuncAfterFetch} from "./AfterFetch.js";

let StartFunc = () => {
    let jVarLocalRoute = ConfigJson.Project
    let jVarLocalSubRoute = ConfigJson.SubRoute

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
                    StartFuncAfterFetch({
                        inFileName: value.FolderName,
                        inMenuClass: value.MenuClass,
                        inIconClass: value.IconClass
                    });
                });
            };
        };
    });
};

export { StartFunc }