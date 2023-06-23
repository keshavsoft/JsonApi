import { StartFunc as StartFuncFromDataSet } from "../../../../../../CommonFuncs/FromCard/FromDataSetAsSingleObject.js";

const StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;

    let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarClosestCard = jVarLocalCurrentTarget.closest(".card");

    let JsonPK = jVarClosestTr.dataset.pk;

    let jVarLocalBody = StartFuncFromDataSet({ inHtmlCard: jVarClosestCard });
    jVarLocalBody.RowPK = JsonPK;

    return jVarLocalBody;
};



// DeleteNew: ({ inEvent }) => {
//     let jVarLocalCurrentTarget = inEvent.currentTarget;
//     let jVarLocalKCont1 = document.getElementById("KCont1");

//     let jVarClosestCard = jVarLocalCurrentTarget.closest(".CardForItems");
//     let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");

//     let jVarLocalRoute = this.Config.RouteStart.Start;
//     let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
//     let JsonPK = jVarClosestTr.dataset.pk;

//     let jVarLocalBody = this.ApiFuncs.Table.CommonFuncs.PrepareJsonAndItemConfigInsertKey({ inCurrentTarget: jVarLocalCurrentTarget });
//     jVarLocalBody.RowPK = JsonPK;

//     let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Row/Delete/FromRowPK`;

//     let jVarLocalFetchHeaderObject = {
//         method: "post",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jVarLocalBody)
//     };

//     fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject).then(response => {
//         if (!response.ok) { throw new Error(response.statusText) };

//         return response.json();
//     }).then((FetchData) => {
//         if (FetchData.KTF) {
//             jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);

//             jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
//                 inData: jVarGlobalPresentViewData,
//                 inHtmlParent: jVarLocalKCont1
//             });

//             Swal.fire("Deleted!");
//         };
//     });
// },

export { StartFunc };