// import { jFUpdateFunc } from "./Addlisteners.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/Addlisteners.js";
import { jFCreateFoldersToDom } from "./ShowOnDom/ShowOnDom.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncAddlisteners();
});
