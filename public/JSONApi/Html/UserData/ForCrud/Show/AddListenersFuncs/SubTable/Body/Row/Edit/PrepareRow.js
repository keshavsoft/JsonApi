import { StartFunc as StartFuncUpdateClicks } from "../UpdateClicks/StartFunc.js";

let StartFunc = ({ inEvent, inProjectName, inSubRoute }) => {
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
            jFLocalRemoveChild({ inEvent });
            jFLocalAddContent({ inEvent });
            jFLocalinnerHTML({ inEvent });

            StartFuncUpdateClicks({ inClosestTd: jVarLocalClosestTd, inProjectName, inSubRoute });
        };
    });
};

let jFLocalRemoveChild = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalClosestTd = jVarLocalCurrentTarget.closest("td");
    jVarLocalClosestTd.classList.remove("ButtonClass");

    let jVarLocalTableBodyRow = jVarLocalCurrentTarget.closest("tr");

    jVarLocalTableBodyRow.querySelectorAll("td.ButtonClass").forEach((element, LoopIndex) => {
        element.parentNode.removeChild(element);
    });
};

let jFLocalAddContent = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
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
};

let jFLocalinnerHTML = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalClosestTd = jVarLocalCurrentTarget.closest("td");
    jVarLocalClosestTd.classList.remove("ButtonClass");

    let jVarLocalKTableId = jVarLocalCurrentTarget.closest("table");

    let jVarLocalTableFooterRow = jVarLocalKTableId.querySelector("tfoot tr");
    let jVarLocalTableFooterUpdate = jVarLocalTableFooterRow.querySelector("td.UpdateSubTableClass");

    jVarLocalClosestTd.innerHTML = jVarLocalTableFooterUpdate.innerHTML;
};

export { StartFunc }