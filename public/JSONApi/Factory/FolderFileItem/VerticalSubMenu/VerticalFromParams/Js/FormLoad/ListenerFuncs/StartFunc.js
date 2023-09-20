import { StartFunc as StartFuncCreateFolder } from "./CreateCustomer/StartFunc.js";
import { StartFunc as StartFuncBSTableFromParamsId } from "./BSTableFromParamsId/EntryFile.js";
import { StartFunc as StartFuncMenuId } from "./MenuId/EntryFile.js";

let StartFunc = () => {
    StartFuncCreateFolder();
    StartFuncBSTableFromParamsId();
    StartFuncMenuId();
};

export { StartFunc };