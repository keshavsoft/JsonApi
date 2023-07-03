import { StartFunc as StartFuncUpdateClicks } from "../UpdateClicks/StartFunc.js";

let StartFunc = ({ inEvent, inProjectName, inSubRoute }) => {
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

    // jFLocalUpdateClick({ inClosestTd: jVarLocalClosestTd, inProjectName, inSubRoute });

    StartFuncUpdateClicks({ inClosestTd: jVarLocalClosestTd, inProjectName, inSubRoute });
};

export { StartFunc }