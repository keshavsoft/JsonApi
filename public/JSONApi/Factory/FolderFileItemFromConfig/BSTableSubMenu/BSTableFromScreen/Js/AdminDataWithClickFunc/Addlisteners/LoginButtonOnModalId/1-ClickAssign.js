import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = ({ inFormLoadFuncToRun }) => {
    let jVarLocalHtmlId = "LoginButtonOnModalId";
    let jVarLocalCreateFolderButtonId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCreateFolderButtonId === null === false) {
        jVarLocalCreateFolderButtonId.addEventListener("click", () => {
            StartFuncButtonClickFunc({ inFormLoadFuncToRun });
        });
    };
};

export { StartFunc };
