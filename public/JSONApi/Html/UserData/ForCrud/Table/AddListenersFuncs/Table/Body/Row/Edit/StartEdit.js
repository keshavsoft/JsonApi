import { StartFunc as StartFuncPrepareRow } from "./PrepareRow.js";

let StartFunc = () => {
    let jVarLocalFind = document.querySelectorAll(".MainTableFooterBodyRowEditClass");

    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", (event) => {
            StartFuncPrepareRow({ inEvent: event });
        });
    });
};

export { StartFunc }