import { StartFunc as StartFuncEnterToServer } from "./KeshavSoftEnterToServer/1-ClickAssign.js";
import { StartFunc as StartFuncOnKeyPress } from "./KeshavSoftonkeypress/EntryFile.js";

let StartFunc = () => {
    StartFuncOnKeyPress();
    StartFuncEnterToServer();
};

export { StartFunc };