import { StartFunc as StartFolderURLWithParams } from "./ClickFuncs/FolderURLWithParams.js";
import { StartFunc as StartFileURLWithParams } from "./ClickFuncs/FileURLWithParams.js";
import { StartFunc as StartItemURLWithParams } from "./ClickFuncs/ItemURLWithParams.js";
import { StartFunc as StartScreenURLWithParams } from "./ClickFuncs/ScreenURLWithParams.js";
import { StartFunc as StartFuncHomeURLWithParams } from "./ClickFuncs/HomeURLWithParams.js";

let StartFunc = () => {

    StartFolderURLWithParams();
    StartFileURLWithParams();
    StartItemURLWithParams();
    StartScreenURLWithParams();
    StartFuncHomeURLWithParams()

};


export { StartFunc }