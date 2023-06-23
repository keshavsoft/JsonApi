import ConfigJson from "../../../../../../../../../Config.json" assert{type: "json"};

const StartFunc = async ({ inPostData }) => {
    let jVarLocalRoute = ConfigJson.Project;
    let jVarLocalSubRoute = ConfigJson.SubRoute;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Row/Delete/FromRowPK`;

    let jVarLocalFetchHeaderObject = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inPostData)
    };

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalFetchJson = await jVarLocalFromFetch.json();

    return jVarLocalFetchJson;
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