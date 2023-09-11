// import { StartFunc as KeyPressStartFunc } from "./KeyPress.js";
import { StartFunc as FooterStartFunc } from "./Footer/ButtonClicks.js";
import { StartFunc as StartFuncParentButton } from "./ButtonClickFuncs/ParentButton.js";
import { StartFunc as StartFuncKeyPressFuncs } from "./KeyPressFuncs/EntryFile.js";
let StartFunc = ({ inProjectName, inSubRoute }) => {
    // KeyPressStartFunc({ inProjectName, inSubRoute });
    StartFuncKeyPressFuncs();

    FooterStartFunc({
        inProjectName,
        inSubRoute
    });
};
StartFuncParentButton();

export { StartFunc };
