import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
import { StartFunc as StartFuncAddlisteners } from "./AddListenerFuncs/StartFunc.js";
const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncAddlisteners();
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then(() => {
            StartFuncAfterDomLoad();
            // var $table = $('#table');
        });
    };
};

StartFunc();