import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = ({ inClosestTd }) => {
    let jVarLocalHtmlControlNeeded = inClosestTd.querySelector(".MainTableFooterBodyRowUpdateClass");

    jVarLocalHtmlControlNeeded.addEventListener("click", (event) => {
        StartFuncClickFunc({ inEvent: event });
    });
};

export { StartFunc }