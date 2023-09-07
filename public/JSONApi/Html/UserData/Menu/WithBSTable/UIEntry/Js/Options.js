import { jFShowFoldersInMenu } from "./FromFolder.js";
import { StartFunc as StartFuncEntry } from "./Addlistioners/Entry.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});
StartFuncEntry();