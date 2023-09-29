import { StartFunc as StartFuncCreateFolder } from "./CreateCustomer/StartFunc.js";
import { StartFunc as StartFuncVerticalFromParamsButton } from "./VerticalFromParamsId/EntryFile.js";
import { StartFunc as StartFuncMenuId } from "./MenuId/EntryFile.js";

let StartFunc = () => {
    StartFuncCreateFolder();
    StartFuncVerticalFromParamsButton();
    StartFuncMenuId();

};

export { StartFunc };