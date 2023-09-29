import { StartFunc as StartFuncMenuId } from "./ClickFuncs/MenuId/EntryFile.js";
import { StartFunc as StartFuncVerticalFromParamsId } from "./ClickFuncs/VerticalFromParamsId/EntryFile.js";

const StartFunc = () => {
    StartFuncMenuId();
    StartFuncVerticalFromParamsId();
};
StartFunc();