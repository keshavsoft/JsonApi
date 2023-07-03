import { StartFunc as StartFuncPrepareFetchData } from "./PrepareFetchData.js";
import ConfigJson from "../../../../../../../../../Config.json"  assert {type: 'json'};
// import ApiConfigJson from '../../../../ApiConfig.json' assert {type: 'json'};

let StartFunc = async ({ inFetchBody }) => {
    let jVarLocalRoute = ConfigJson.Project;
    let jVarLocalSubRoute = ConfigJson.SubRoute;

    //    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Body/Row/Update`;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Update`;

    let jVarLocalFetchHeaderObject = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    };

    let ReponseData = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let PromiseData = await ReponseData.json();

    return await PromiseData;
};

export { StartFunc }