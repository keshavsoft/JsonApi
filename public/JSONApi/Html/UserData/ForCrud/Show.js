import { jFShowFoldersInMenu } from "../ForDataHtml/Header/FromFolder.js";
import { StartFunc as VerticalStartFunc } from "./Show/FetchFuns.js";
//import { StartFunc as KeyPressStartFunc } from "./Vertical/AddListenersFuncs/KeyPress.js";
import { StartFunc as CardHeaderStartFunc } from "./Show/AddListenersFuncs/Card/CardHeader/ButtonClicks.js";
import { StartFunc as AddListenersFuncsStartFunc } from "./Show/AddListenersFuncs/StartFunc.js";
import { StartFunc as StartFuncToDataList } from "../ToDataList/FromLocalStorageKey.js";

StartFuncToDataList();

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

let jFLocalForFocus = () => {
    let jVarLocalFirstInput = document.querySelector("table tfoot input");

    if (jVarLocalFirstInput === null === false) {
        jVarLocalFirstInput.focus();
    };
};

VerticalStartFunc({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
}).then(p => {
    if (p) {
        CardHeaderStartFunc();
        AddListenersFuncsStartFunc({
            inProjectName: jVarGlobalProject,
            inSubRoute: jVarGlobalSubRoute
        });

        jFLocalForFocus();
    };
});