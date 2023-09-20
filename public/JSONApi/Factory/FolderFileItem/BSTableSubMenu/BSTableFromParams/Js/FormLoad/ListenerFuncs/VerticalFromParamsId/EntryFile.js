import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {

    let jVarLocalVerticalFromParamsId = document.getElementById("VerticalFromParamsId");

    if (jVarLocalVerticalFromParamsId === null === false) {
        jVarLocalVerticalFromParamsId.addEventListener("click", StartFuncButtonClickFunc);
    };

};

export {StartFunc};