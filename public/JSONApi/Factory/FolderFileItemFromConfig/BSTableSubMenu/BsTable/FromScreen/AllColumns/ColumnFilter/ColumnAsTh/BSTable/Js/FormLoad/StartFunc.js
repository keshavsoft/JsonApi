import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncAddlisteners } from "./ListenerFuncs/StartFunc.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncAddlisteners();
};

export { StartFunc };
