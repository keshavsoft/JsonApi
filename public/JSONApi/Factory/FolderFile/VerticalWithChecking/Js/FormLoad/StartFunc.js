import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";
// import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/FromSave/ChangeRowColour/EntryFile.js";

import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncAddlisteners();
};

export { StartFunc };
