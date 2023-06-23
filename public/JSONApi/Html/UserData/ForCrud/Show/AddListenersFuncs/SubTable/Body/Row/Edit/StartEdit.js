import { StartFunc as StartFuncPrepareRow } from "./PrepareRow.js";

let StartFunc = async ({ inProjectName, inSubRoute }) => {
    let jVarLocalFind = document.querySelectorAll(".SubTableFooterBodyRowEditClass");

    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", async (event) => {
            StartFuncPrepareRow({ inEvent: event, inProjectName, inSubRoute });
        });
    });
};

export { StartFunc }