import { StartFunc as KeyPressStartFunc } from "./KeyPress.js";
import { StartFunc as FooterStartFunc } from "./Footer/ButtonClicks.js";
import { StartFunc as StartFuncClickFuncs } from "./Vertical/Footer/Buttons/ClickFuncs.js";

let StartFunc = ({ inProjectName, inSubRoute }) => {
    KeyPressStartFunc();
    FooterStartFunc({
        inProjectName,
        inSubRoute
    });
    
    StartFuncClickFuncs({
        inProjectName,
        inSubRoute
    });
};

export { StartFunc }
