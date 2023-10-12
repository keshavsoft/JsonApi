import { StartFunc as StartFuncUpdateWithButton } from "../UpdateWithButton/1-ClickFunc.js";
import { StartFunc as StartFuncAccordionButtonClass } from "../AccordionButtonClass/1-ClickFunc.js";

let StartFunc = () => {
    StartFuncUpdateWithButton();
    StartFuncAccordionButtonClass();
};

export { StartFunc };