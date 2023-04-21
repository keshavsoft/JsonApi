import { StartFunc as TableStartFunc } from "./Table/Body/Row/ButtonClickFuncs.js";
import { StartFunc as StartFuncButtonClickFuncs } from "./Table/Search/ButtonClickFuncs.js";
import { StartFunc as StartFuncFooter } from "./Table/Footer/SaveClick.js";

let StartFunc = ({ inRoute, inSubRoute }) => {
    TableStartFunc();
    StartFuncButtonClickFuncs();
    StartFuncFooter({ inRoute, inSubRoute });
};

export { StartFunc };
