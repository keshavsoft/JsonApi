import { jFShowFoldersInMenu } from "../../../ForDataHtml/Header/FromFolder.js";
import { StartFunc as VerticalStartFunc } from "./FetchFuns.js";
//import { StartFunc as KeyPressStartFunc } from "./Vertical/AddListenersFuncs/KeyPress.js";
import { StartFunc as AddListenersFuncsStartFunc } from "./AddListenersFuncs/StartFunc.js";
import { StartFunc as CardHeaderStartFunc } from "./AddListenersFuncs/Card/CardHeader/ButtonClicks.js";
import { StartFunc as StartFuncClickFuncs } from "../../../ForDataHtml/Header/ClickFuncs.js";
import { StartFunc as StartFuncToDataList } from "../../../ToDataList/FromLocalStorageKey.js";

StartFuncToDataList();
StartFuncClickFuncs();

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

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
    };
});