import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {

    let jVarLocalBSTableFromParamsId = document.getElementById("BSTableFromParamsId");

    if (jVarLocalBSTableFromParamsId === null === false) {
        jVarLocalBSTableFromParamsId.addEventListener("click", StartFuncButtonClickFunc);
    };

};

export {StartFunc};