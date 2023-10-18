import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalSaveButton = document.getElementById("ButtonSaveId");

    if (jVarLocalSaveButton === null === false) {
        jVarLocalSaveButton.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFunc };
