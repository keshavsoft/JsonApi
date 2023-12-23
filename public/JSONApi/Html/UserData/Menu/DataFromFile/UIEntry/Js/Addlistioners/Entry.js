import { StartFunc as StartFuncBSVerticalIdButton } from "./ButtonClickFuncs/BSVerticalIdButton.js";
import { StartFunc as StartFuncBSTableIdButton } from "./ButtonClickFuncs/BSTableIdButton.js";
import { StartFunc as StartFuncBSTreeIdButton } from "./ButtonClickFuncs/BSTreeIdButton.js";
import { StartFunc as StartFuncBSTableOptions } from "./ButtonClickFuncs/BSTableOptions.js";

const StartFunc = () => {
    StartFuncBSVerticalIdButton();
    StartFuncBSTableIdButton();
    StartFuncBSTreeIdButton();
    StartFuncBSTableOptions();
};

export { StartFunc };