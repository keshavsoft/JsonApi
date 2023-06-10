let StartFunc = async ({ inProjectName, inSubRoute }) => {
    let jVarLocalFind = document.querySelectorAll(".SubTableFooterBodyRowUpdateClass");

    console.log("aaaaaaaaaaaa : ", jVarLocalFind);

    //MainTable Body Row Options Print
    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", async (event) => {
            console.log("bbbbbbbb : ", event);

          //  jFLocalButtonClick({ inEvent: event, inProjectName, inSubRoute });
        });
    });
};

let jFLocalButtonClick = ({ inEvent, inProjectName, inSubRoute }) => {
    inEvent.preventDefault();
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    console.log("SubTableFooterBodyRowUpdateClass : ", jVarLocalCurrentTarget);
};

// ButtonClick: ({ inEvent }) => {
//     let jVarLocalCurrentTarget = inEvent.currentTarget;
//     let jVarLocalClosestTd = jVarLocalCurrentTarget.closest("td");
//     jVarLocalClosestTd.classList.remove("ButtonClass");

//     let jVarLocalKTableId = jVarLocalCurrentTarget.closest("table");

//     let jVarLocalTableBodyRow = jVarLocalCurrentTarget.closest("tr");
//     let jVarLocalTableFooterRow = jVarLocalKTableId.querySelector("tfoot tr");
//     let jVarLocalTableFooterUpdate = jVarLocalTableFooterRow.querySelector("td.UpdateSubTableClass");

//     jVarLocalTableBodyRow.querySelectorAll("td.ButtonClass").forEach((element, LoopIndex) => {
//         element.parentNode.removeChild(element);
//     });

//     jVarLocalTableBodyRow.querySelectorAll("[class^='KCol']").forEach((element, LoopIndex) => {
//         if (element.querySelector("input") === null) {
//             let jVarLocalOldValue = element.innerHTML.trim();
//             let jVarLoopLocalClassList = element.classList[0];
//             let jVarLoopLocalFind = jVarLocalTableFooterRow.querySelector(`[class*='${jVarLoopLocalClassList}']`);
//             element.innerHTML = jVarLoopLocalFind.innerHTML;

//             switch (element.querySelector("input").type) {
//                 case "number":
//                     element.querySelector("input").value = jVarLocalOldValue.replace(/,/g, "");
//                     break;
//                 default:
//                     element.querySelector("input").value = jVarLocalOldValue;
//                     break;
//             };
//         };
//     });

//     jVarLocalClosestTd.innerHTML = jVarLocalTableFooterUpdate.innerHTML;
// }


export { StartFunc }