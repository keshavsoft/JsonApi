import { StartFunc as StartFuncLocalKeyPress } from "./StartFunc.js";

const StartFunc = () => {
    let jVarLocalFind = document.querySelectorAll(".KeshavSoftonkeypress");
    
    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("keypress", StartFuncLocalKeyPress);
    });
};

export { StartFunc };
