import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalButtonClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalButtonClassName.length; i++) {
        jVarLocalButtonClassName[i].addEventListener("click", (event) => {
            StartFuncButtonClickFunc({ inevent: event })
        });
    };
};

export { StartFunc };