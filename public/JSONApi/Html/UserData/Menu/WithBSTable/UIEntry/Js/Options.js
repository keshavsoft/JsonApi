import { jFShowFoldersInMenu } from "./FromFolder.js";
import { StartFunc as StartFuncEntry } from "./Addlistioners/Entry.js";
import { StartFunc as StartFuncBuildCardsFuncs } from "./ForItem/BuildCardsFuncs.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});
StartFuncBuildCardsFuncs();
StartFuncEntry();