import { StartFunc as StartFuncFetchFoamFuncs } from "./FetchFoamFuncs/Entry.js";

import { StartFunc as StartFuncBreadcrumb } from "./Breadcrumb/Entery.js";

let StartFunc = async () => {
    StartFuncFetchFoamFuncs();
    StartFuncBreadcrumb();
};

export { StartFunc }