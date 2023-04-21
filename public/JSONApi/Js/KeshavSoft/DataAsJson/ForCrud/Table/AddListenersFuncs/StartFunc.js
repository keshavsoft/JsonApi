import { StartFunc as TableStartFunc } from "./Table/Body/Row/ButtonClickFuncs.js";
import { StartFunc as StartFuncButtonClickFuncs } from "./Table/Search/ButtonClickFuncs.js";

let StartFunc = () => {
    TableStartFunc();
    StartFuncButtonClickFuncs();
};

export { StartFunc };
