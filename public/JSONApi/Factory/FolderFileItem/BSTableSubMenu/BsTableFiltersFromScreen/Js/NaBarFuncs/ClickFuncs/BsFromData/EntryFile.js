import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {

    let jVarLocalBSTableFromDataId = document.getElementById("BSTableFromDataId");

    if (jVarLocalBSTableFromDataId === null === false) {
        jVarLocalBSTableFromDataId.addEventListener("click", StartFuncButtonClickFunc);
    };

};

export {StartFunc};