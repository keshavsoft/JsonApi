import { jFShowFoldersInMenu } from "../ForDataHtml/Header/FromFolder.js";
import { StartFunc as ShowDataFuncsStartFunc } from "./Table/FetchFuns.js";
import { jFAddtoPrintButtonInTable } from "./Table/AddListeners.js";
import { StartFunc as CardHeaderStartFunc } from "./Table/AddListenersFuncs/Card/CardHeader/ButtonClicks.js";
import { StartFunc as AddListenersFuncsStartFunc } from "./Table/AddListenersFuncs/StartFunc.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

ShowDataFuncsStartFunc({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
}).then(p => {
    if (p) {
        jFAddtoPrintButtonInTable();
        CardHeaderStartFunc();
        AddListenersFuncsStartFunc();
    };
});