import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalCreateItemButtonId = document.getElementById("CreateItemButtonId");

    if (jVarLocalCreateItemButtonId === null === false) {
        jVarLocalCreateItemButtonId.addEventListener("click", StartFuncButtonClickFunc);
    };

};

export { StartFunc };