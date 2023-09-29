import { StartFunc as StartFuncFoamLoandFuncs } from "./FoamLoandFuncs/Entry.js";
import { StartFunc as StartFuncForBradCamp } from "./Breadcrumb/Entery.js";

let StartFunc = async () => {
    StartFuncFoamLoandFuncs();
    StartFuncForBradCamp();
};


export { StartFunc }