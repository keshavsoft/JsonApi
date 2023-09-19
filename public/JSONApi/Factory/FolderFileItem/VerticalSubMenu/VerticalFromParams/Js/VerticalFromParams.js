import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
import { StartFunc as StartFuncAddListenersFuncs } from "./AddListenersFuncs/StartFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then(() => {
            StartFuncAfterDomLoad();
            StartFuncAddListenersFuncs();
            jFLocalSetFocus();
            // var $table = $('#table');
        });
    };
};

let jFLocalSetFocus = () => {
    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalFirstInput = jVarLocalKCont1.querySelector("input");
    jVarLocalFirstInput.focus();
}

StartFunc();