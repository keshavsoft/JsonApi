import { jFShowFoldersInMenu } from "./ForDataHtml/Header/FromFolder.js";
import { StartFunc as ShowDataFuncsStartFunc } from "./ForDataHtml/ShowDataFuncs.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

ShowDataFuncsStartFunc({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});