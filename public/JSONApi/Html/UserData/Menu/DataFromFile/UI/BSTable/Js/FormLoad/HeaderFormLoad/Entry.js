import { StartFunc as StartFuncFetchFunc } from "./FetchFuncs/FetchFunc.js";
import { StartFunc as StartFuncParentButton } from "./ButtonClickFuncs/ParentButton.js";
const StartFunc = () => {
    StartFuncFetchFunc();
    StartFuncParentButton();

};

export { StartFunc };