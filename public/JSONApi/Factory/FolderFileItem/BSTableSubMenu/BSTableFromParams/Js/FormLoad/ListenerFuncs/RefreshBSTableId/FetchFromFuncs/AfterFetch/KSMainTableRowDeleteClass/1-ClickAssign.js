import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalQrCodeButtonClass = document.getElementsByClassName("KSMainTableRowDelete");
    
    for (var i = 0; i < jVarLocalQrCodeButtonClass.length; i++) {
        jVarLocalQrCodeButtonClass[i].addEventListener("click", async (event) => StartFuncButtonClickFunc({ inEvent: event }));
    };
};

export { StartFunc };
