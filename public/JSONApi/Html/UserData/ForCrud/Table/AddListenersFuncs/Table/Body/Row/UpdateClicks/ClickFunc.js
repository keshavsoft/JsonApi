import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";
import { StartFunc as StartFuncLoopInputs } from "../../../../../../CommonFuncs/Htmlnputs/LoopInputs.js";
import { StartFunc as StartFuncFromDataSet } from "../../../../../../CommonFuncs/FromCard/FromDataSet.js";
import { StartFunc as StartFuncPrepareFetchData } from "./PrepareFetchData.js";
import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";

let StartFunc = async ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let jVarLocalBody = StartFuncPrepareFetchData({ inCurrentTarget: jVarLocalCurrentTarget });

    let PromiseData = await StartFuncPostFetch({ inFetchBody: jVarLocalBody });

    StartFuncAfterFetch({ inFetchData: PromiseData });
};

let StartFunc1 = async ({ inEvent, inProjectName, inSubRoute }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarClosestCard = jVarLocalCurrentTarget.closest(".card");

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;
    let JsonPK = jVarClosestTr.dataset.pk;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Body/Row/Update`;

    let jVarLocalFetchPostData = StartFuncLoopInputs({ jVarHtmlCardBody: jVarClosestTr });
    let jVarLocalBody = StartFuncFromDataSet({ inHtmlCard: jVarClosestCard });

    jVarLocalBody.MainRowPK = jVarLocalBody.pk;
    jVarLocalBody.SubTableRowPK = JsonPK;
    jVarLocalBody.inDataToUpdate = jVarLocalFetchPostData;

    let jVarLocalFetchHeaderObject = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBody)
    };

    let ReponseData = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let PromiseData = await ReponseData.json();

    StartFuncAfterFetch({ inFetchData: PromiseData });
};

export { StartFunc }