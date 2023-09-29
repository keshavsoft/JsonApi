import { StartFunc as StartFuncListenerFuncs } from "./ListenerFuncs/StartFunc.js";

let StartFunc = () => {
    StartFuncListenerFuncs();
};

export { StartFunc };