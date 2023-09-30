import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalHtmlId = "ImmuteShowButtonId";
    let jVarLocalFilerButton = document.getElementById(jVarLocalHtmlId);
    
    jVarLocalFilerButton.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }