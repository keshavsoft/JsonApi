import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc/EntryFile.js";

let StartFunc = () => {
    let jVarLocalFilerButton = document.getElementById("FilterDataId");
    jVarLocalFilerButton.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }