import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";
import { StartFunc as StartFuncAdminDataWithClickFunc } from "./AdminDataWithClickFunc/StartFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = StartFuncAdminDataWithClickFunc({ inFormLoadFuncToRun: () => { } });
    console.log("jVarLocalFromAdmin : ", jVarLocalFromAdmin);
    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then(() => {
            StartFuncAfterDomLoad();
        });
    };
};

StartFunc();