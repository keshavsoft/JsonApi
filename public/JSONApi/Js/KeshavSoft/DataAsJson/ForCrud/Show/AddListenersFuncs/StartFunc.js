import { StartFunc as KeyPressStartFunc } from "./KeyPress.js";
import { StartFunc as FooterStartFunc } from "./Footer/ButtonClicks.js";
import { StartFunc as StartFuncClickFuncs } from "./Vertical/Footer/Buttons/ClickFuncs.js";
import { StartFunc as StartFuncSubTable } from "./SubTable/Footer/CreateNewRow/ButtonClicks.js";
import { StartFunc as StartFuncUpdateClicks } from "./SubTable/Body/Row/UpdateClicks.js";
import { StartFunc as StartFuncEditClick } from "./SubTable/Body/Row/EditClick.js";

let StartFunc = ({ inProjectName, inSubRoute }) => {
    KeyPressStartFunc({ inProjectName, inSubRoute });

    FooterStartFunc({
        inProjectName,
        inSubRoute
    });

    StartFuncClickFuncs({
        inProjectName,
        inSubRoute
    });
    
    StartFuncSubTable({ inProjectName, inSubRoute });

    StartFuncEditClick({ inProjectName, inSubRoute });
    StartFuncUpdateClicks({ inProjectName, inSubRoute });
};

export { StartFunc }
