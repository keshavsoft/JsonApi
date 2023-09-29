import { StartFunc as StartFuncFoamFetchFuncs } from "./FoamFetchFuncs/Entry.js";

import { StartFunc as StartBreadcrumb } from "./Breadcrumb/Entery.js";

let StartFunc = async () => {
    StartFuncFoamFetchFuncs();
    StartBreadcrumb()
};

export { StartFunc }