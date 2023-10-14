import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalInputPkId = document.getElementById("InputPkId");

    if (jVarLocalInputPkId === null === false) {
        jVarLocalInputPkId.addEventListener("keypress", () => {
            StartFuncButtonClickFunc({ inEvent: event });
        });
    };
};
export { StartFunc };
