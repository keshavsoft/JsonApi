import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

const StartFunc = async () => {
    let jVarLocalCurrentTarget = event.currentTarget;
    console.log("aaaaaaaaa : ", jVarLocalCurrentTarget);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Yes, delete it!',
        confirmButtonText: 'Cancel'
    }).then((result) => {
        if (result.isDismissed && result.dismiss === "cancel") {
            let jVarLocalPostData = StartFuncPreparePostData({ inCurrentTarget: jVarLocalCurrentTarget });
            StartFuncFetchFunc({ inPostData: jVarLocalPostData }).then(PromiseData => {
                StartFuncAfterFetch({ inFetchData: PromiseData });
            });
        };
    });
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