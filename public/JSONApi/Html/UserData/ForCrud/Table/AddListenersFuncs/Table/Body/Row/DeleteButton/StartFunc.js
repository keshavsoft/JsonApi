import ConfigJson from "../../../../../../../../../Config.json" assert{type: "json"};
import { StartFunc as StartFuncFromCard } from "../../../../../../CommonFuncs/FromCard/FromDataSetAsSingleObject.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = () => {
    let jVarLocalCardHeaderButtons = document.querySelectorAll(".KMainTableBodyRowDeleteButtonClass");

    for (let i = 0; i < jVarLocalCardHeaderButtons.length; i++) {
        jVarLocalCardHeaderButtons[i].addEventListener("click", LocalButtonClick);
    };
};

let LocalButtonClick = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    let jVarClosestCard = jVarLocalCurrentTarget.closest(".KTableDivClass");
    let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");

    let jVarLocalRoute = ConfigJson.Project;
    let jVarLocalSubRoute = ConfigJson.SubRoute;
    let JsonPK = jVarClosestTr.dataset.pk;

    let jVarLocalBody = StartFuncFromCard({ inHtmlCard: jVarClosestCard });
    jVarLocalBody.RowPK = JsonPK;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Row/Delete/FromRowPK`;

    let jVarLocalFetchHeaderObject = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBody)
    };

    fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject).then(response => {
        if (!response.ok) { throw new Error(response.statusText) };

        return response.json();
    }).then((FetchData) => {
        StartFuncAfterFetch({ inFetchData: FetchData });
        // if (FetchData.KTF) {
        //     jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);

        //     jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        //         inData: jVarGlobalPresentViewData,
        //         inHtmlParent: jVarLocalKCont1
        //     });

        //     Swal.fire("Deleted!");
        // };

    });
};

export { StartFunc }