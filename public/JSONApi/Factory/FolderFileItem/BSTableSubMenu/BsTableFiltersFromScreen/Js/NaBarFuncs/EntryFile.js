import { StartFunc as StartFuncMenuId } from "./ClickFuncs/MenuId/EntryFile.js";
import { StartFunc as StartFuncVerticalFromParamsId } from "./ClickFuncs/VerticalFromParamsId/EntryFile.js";
import { StartFunc as StartFuncBsFromData } from "./ClickFuncs/BsFromData/EntryFile.js";
import { StartFunc as StartFuncBSFiltersTableFromScreen } from "./ClickFuncs/BsFiltersFromScreen/EntryFile.js";
import { StartFunc as StartFuncBSTableFromScreen } from "./ClickFuncs/BsFromScreen/EntryFile.js";

const StartFunc = () => {
    StartFuncMenuId();
    StartFuncVerticalFromParamsId();
    StartFuncBsFromData();
    StartFuncBSFiltersTableFromScreen();
    StartFuncBSTableFromScreen();
};
StartFunc();