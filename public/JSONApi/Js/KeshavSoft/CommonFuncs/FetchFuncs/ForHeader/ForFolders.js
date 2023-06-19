import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/ForHeader.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "HeaderMenuId";
    let jVarLocalHeaderMenuId = document.getElementById(jVarLocalHtmlId);

    jVarLocalHeaderMenuId.addEventListener("click", StartFuncToLocalStorage);
};

StartFunc();