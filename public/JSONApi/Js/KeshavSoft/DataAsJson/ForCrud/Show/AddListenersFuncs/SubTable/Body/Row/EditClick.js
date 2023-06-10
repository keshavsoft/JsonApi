import { StartFunc as StartFuncLoopInputs } from "../../../../../CommonFuncs/Htmlnputs/LoopInputs.js";
import { StartFunc as StartFuncFromDataSet } from "../../../../../CommonFuncs/FromCard/FromDataSet.js";

let StartFunc = async ({ inProjectName, inSubRoute }) => {
    let jVarLocalFind = document.querySelectorAll(".SubTableFooterBodyRowEditClass");

    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", async (event) => {
            jFLocalButtonClick({ inEvent: event, inProjectName, inSubRoute });
        });
    });
};

let jFLocalButtonClick = ({ inEvent, inProjectName, inSubRoute }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalClosestTd = jVarLocalCurrentTarget.closest("td");
    jVarLocalClosestTd.classList.remove("ButtonClass");

    let jVarLocalKTableId = jVarLocalCurrentTarget.closest("table");

    let jVarLocalTableBodyRow = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalTableFooterRow = jVarLocalKTableId.querySelector("tfoot tr");
    let jVarLocalTableFooterUpdate = jVarLocalTableFooterRow.querySelector("td.UpdateSubTableClass");

    jVarLocalTableBodyRow.querySelectorAll("td.ButtonClass").forEach((element, LoopIndex) => {
        element.parentNode.removeChild(element);
    });

    jVarLocalTableBodyRow.querySelectorAll("[class^='KCol']").forEach((element, LoopIndex) => {
        if (element.querySelector("input") === null) {
            let jVarLocalOldValue = element.innerHTML.trim();
            let jVarLoopLocalClassList = element.classList[0];
            let jVarLoopLocalFind = jVarLocalTableFooterRow.querySelector(`[class*='${jVarLoopLocalClassList}']`);
            element.innerHTML = jVarLoopLocalFind.innerHTML;

            switch (element.querySelector("input").type) {
                case "number":
                    element.querySelector("input").value = jVarLocalOldValue.replace(/,/g, "");
                    break;
                default:
                    element.querySelector("input").value = jVarLocalOldValue;
                    break;
            };
        };
    });

    jVarLocalClosestTd.innerHTML = jVarLocalTableFooterUpdate.innerHTML;

    jFLocalUpdateClick({ inClosestTd: jVarLocalClosestTd, inProjectName, inSubRoute });
};

let jFLocalUpdateClick = ({ inClosestTd, inProjectName, inSubRoute }) => {
    let jVarLocalHtmlControlNeeded = inClosestTd.querySelector(".SubTableFooterBodyRowUpdateClass");

    jVarLocalHtmlControlNeeded.addEventListener("click", async (event) => {
        let jVarLocalCurrentTarget = event.currentTarget;
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

        console.log("PromiseData : ", PromiseData);
    });
};


// Update: async ({ inEvent }) => {
//     let jVarLocalCurrentTarget = inEvent.currentTarget;
//     let jVarLocalKCont1 = document.getElementById("KCont1");
//     let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");

//     let jVarLocalRoute = this.Config.RouteStart.Start;
//     let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
//     let JsonPK = jVarClosestTr.dataset.pk;

//     let jVarLocalBody = this.ApiFuncs.Table.CommonFuncs.PrepareAsConfigs({ inCurrentTarget: jVarLocalCurrentTarget });

//     jVarLocalBody.SubTableRowPK = JsonPK;

//     //  let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Update`;
//     let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Body/Row/Update`;

//     //POST  http://localhost:4116/JsonProject/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Body/Row/Update

//     let jVarLocalFetchPostData = this.VerticalCommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarClosestTr });
//     jVarLocalBody.inDataToUpdate = jVarLocalFetchPostData;
//     let jVarLocalFetchHeaderObject = {
//         method: "post",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jVarLocalBody)
//     };

//     let ReponseData = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
//     let PromiseData = await ReponseData.json();

// },


export { StartFunc }