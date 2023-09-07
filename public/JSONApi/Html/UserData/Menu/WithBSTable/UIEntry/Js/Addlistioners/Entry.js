import { StartFunc as StartFuncBSVerticalIdButton } from "./ButtonClickFuncs/BSVerticalIdButton.js";
import { StartFunc as StartFuncBSTableIdButton } from "./ButtonClickFuncs/BSTableIdButton.js";
import { StartFunc as StartFuncBSTreeIdButton } from "./ButtonClickFuncs/BSTreeIdButton.js";
const StartFunc = () => {
    StartFuncBSVerticalIdButton();
    StartFuncBSTableIdButton();
    StartFuncBSTreeIdButton();
};

export { StartFunc };