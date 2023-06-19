import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = ({ inClosestTd, inProjectName, inSubRoute }) => {
    let jVarLocalHtmlControlNeeded = inClosestTd.querySelector(".SubTableFooterBodyRowUpdateClass");

    jVarLocalHtmlControlNeeded.addEventListener("click", (event) => {
        StartFuncClickFunc({ inEvent: event, inProjectName, inSubRoute });
    });
};

export { StartFunc }