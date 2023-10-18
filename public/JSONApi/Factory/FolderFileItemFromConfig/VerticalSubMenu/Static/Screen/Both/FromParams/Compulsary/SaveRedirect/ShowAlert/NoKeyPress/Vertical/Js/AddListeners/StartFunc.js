import { StartFunc as StartFuncButtonSaveId } from "./ButtonSaveId/1-ClickAssign.js";
import { StartFunc as StartFuncInputPkId } from "./InputPkId/EntryFile.js";
import { StartFunc as StartFuncNavMenu } from "./NavMenu/Entry.js";

let StartFunc = () => {
    StartFuncButtonSaveId();
    StartFuncInputPkId();
    StartFuncNavMenu();
};

export { StartFunc };