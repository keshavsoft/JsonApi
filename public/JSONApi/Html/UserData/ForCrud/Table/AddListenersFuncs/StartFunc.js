import { StartFunc as TableStartFunc } from "./Table/Body/Row/ButtonClickFuncs.js";
import { StartFunc as StartFuncButtonClickFuncs } from "./Table/Search/ButtonClickFuncs.js";
import { StartFunc as StartFuncFooter } from "./Table/Footer/SaveClick.js";

let StartFunc = ({ inRoute, inSubRoute }) => {
    console.log("11111aaaaaaajVarLocalCardHeaderButtons : ");
    
    TableStartFunc({ inRoute, inSubRoute });
    
    StartFuncButtonClickFuncs();
    StartFuncFooter({ inRoute, inSubRoute });
};

export { StartFunc };
