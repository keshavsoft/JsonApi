import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
   StartFuncFormLoad();
   StartFuncAddListeners();
};

StartFunc();