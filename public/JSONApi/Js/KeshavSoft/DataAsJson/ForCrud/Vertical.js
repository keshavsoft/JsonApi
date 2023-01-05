import { jFShowFoldersInMenu } from "../ForDataHtml/Header/FromFolder.js";
import { StartFunc as VerticalStartFunc } from "./Vertical/FetchFuns.js";
//import { StartFunc as KeyPressStartFunc } from "./Vertical/AddListenersFuncs/KeyPress.js";
import { StartFunc as AddListenersFuncsStartFunc } from "./Vertical/AddListenersFuncs/StartFunc.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

VerticalStartFunc({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
}).then(p => {
    if (p) {
        AddListenersFuncsStartFunc({
            inProjectName: jVarGlobalProject,
            inSubRoute: jVarGlobalSubRoute
        });
    };
});