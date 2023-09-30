import { StartFunc as StartFolderURLWithParams } from "./ClickFuncs/FolderURLWithParams.js";
import { StartFunc as StartFileURLWithParams } from "./ClickFuncs/FileURLWithParams.js";
import { StartFunc as StartFuncItemURLWithParams } from "./ClickFuncs/ItemURLWithParams.js";
import { StartFunc as StartFuncHomeURLWithParams } from "./ClickFuncs/HomeURLWithParams.js";

let StartFunc = () => {

    StartFolderURLWithParams();
    StartFileURLWithParams();
    StartFuncItemURLWithParams();
    StartFuncHomeURLWithParams();

};


export { StartFunc }