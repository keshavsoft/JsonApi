import { StartFunc as FooterStartFunc } from "./Footer/ButtonClicks.js";
import { StartFunc as StartFuncKeyPressFuncs } from "./KeyPressFuncs/EntryFile.js";

let StartFunc = () => {
    StartFuncKeyPressFuncs();

    FooterStartFunc();
};

export { StartFunc };
