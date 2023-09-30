import { StartFunc as StartFolderURLWithParams } from "./ClickFuncs/FolderURLWithParams.js";
import { StartFunc as StartFolderHomeURLWithParams } from "./ClickFuncs/HomeURLWithParams.js";

let StartFunc = () => {

    StartFolderURLWithParams();
    StartFolderHomeURLWithParams();

};


export { StartFunc }