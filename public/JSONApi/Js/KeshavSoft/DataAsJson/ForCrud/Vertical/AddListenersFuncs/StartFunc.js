import { StartFunc as KeyPressStartFunc } from "./KeyPress.js";
import { StartFunc as FooterStartFunc } from "./Footer/ButtonClicks.js";

let StartFunc = () => {
    KeyPressStartFunc();
    FooterStartFunc();
};

export { StartFunc }
