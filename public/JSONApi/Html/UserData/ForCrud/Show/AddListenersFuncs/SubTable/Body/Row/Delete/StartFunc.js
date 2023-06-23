import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalClass = "SubTableBodyRowDeleteClass";

    let jVarLocalFind = document.querySelectorAll(`.${jVarLocalClass}`);

    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", StartFuncButtonClickFunc);
    });
};

export { StartFunc }