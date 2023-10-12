import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalKeshavSoftEnterToServer = document.querySelectorAll(".KeshavSoftEnterToServer");
    jVarLocalKeshavSoftEnterToServer.forEach((spanElement) => {
        spanElement.addEventListener("keypress", () => {
            StartFuncButtonClickFunc({ inEvent: event });
        });
    });
};

export { StartFunc };
