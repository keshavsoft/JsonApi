import { StartFunc as StartFuncMenuId } from "./ClickFuncs/MenuId/EntryFile.js";
import { StartFunc as StartFuncVerticalFromParamsId } from "./ClickFuncs/VerticalFromParamsId/EntryFile.js";
import { StartFunc as StartFuncBsFromData } from "./ClickFuncs/BsFromData/EntryFile.js";
import { StartFunc as StartFuncBsFromScreen } from "./ClickFuncs/BsFromScreen/EntryFile.js";

const StartFunc = () => {
    StartFuncMenuId();
    StartFuncVerticalFromParamsId();
    StartFuncBsFromData();
    StartFuncBsFromScreen();
};
StartFunc();