import { StartFunc as StartFuncUpdateClicks } from "../UpdateClicks/StartFunc.js";

let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalClosestTd = jVarLocalCurrentTarget.closest("td");

    Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Yes, delete it!',
        confirmButtonText: 'Show'
    }).then((result) => {
        if (result.isConfirmed) {
            jFLocalRemoveChild({ inCurrentTarget: jVarLocalCurrentTarget });
            jFLocalAddContent({ inCurrentTarget: jVarLocalCurrentTarget });
            jFLocalinnerHTML({ inCurrentTarget: jVarLocalCurrentTarget });

            StartFuncUpdateClicks({
                inClosestTd: jVarLocalClosestTd
            });
        };
    });
};

let jFLocalRemoveChild = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;

    let jVarLocalClosestTd = jVarLocalCurrentTarget.closest("td");
    jVarLocalClosestTd.classList.remove("ButtonClass");

    let jVarLocalTableBodyRow = jVarLocalCurrentTarget.closest("tr");

    jVarLocalTableBodyRow.querySelectorAll("td.ButtonClass").forEach((element, LoopIndex) => {
        element.parentNode.removeChild(element);
    });
};

let jFLocalAddContent = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalClosestTd = jVarLocalCurrentTarget.closest("td");
    jVarLocalClosestTd.classList.remove("ButtonClass");

    let jVarLocalKTableId = jVarLocalCurrentTarget.closest("table");

    let jVarLocalTableBodyRow = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalTableFooterRow = jVarLocalKTableId.querySelector("tfoot tr");

    jVarLocalTableBodyRow.querySelectorAll("[class^='KCol']").forEach((element, LoopIndex) => {
        if (element.querySelector("input") === null) {
            let jVarLocalOldValue = element.innerHTML.trim();
            let jVarLoopLocalClassList = element.classList[0];
            let jVarLoopLocalFind = jVarLocalTableFooterRow.querySelector(`[class*='${jVarLoopLocalClassList}']`);
            element.innerHTML = jVarLoopLocalFind.innerHTML;

            console.log("jVarLoopLocalFind : ", jVarLoopLocalFind, element.querySelector("input"));

            if (element.querySelector("input") === null === false) {


                switch (element.querySelector("input").type) {
                    case "number":
                        element.querySelector("input").value = jVarLocalOldValue.replace(/,/g, "");
                        break;
                    default:
                        element.querySelector("input").value = jVarLocalOldValue;
                        break;
                };

            };
        };
    });
};

let jFLocalinnerHTML = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalClosestTd = jVarLocalCurrentTarget.closest("td");
    jVarLocalClosestTd.classList.remove("ButtonClass");

    let jVarLocalKTableId = jVarLocalCurrentTarget.closest("table");

    let jVarLocalTableFooterRow = jVarLocalKTableId.querySelector("tfoot tr");
    let jVarLocalTableFooterUpdate = jVarLocalTableFooterRow.querySelector("td.UpdateClass");

    jVarLocalClosestTd.innerHTML = jVarLocalTableFooterUpdate.innerHTML;
};

export { StartFunc }