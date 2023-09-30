import { StartFunc as StartFuncFetchFoamFuncs } from "./FetchFoamFuncs/Entry.js";

import { StartFunc as StartFuncABreadcrumb } from "./Breadcrumb/Entery.js";

let StartFunc = async () => {
    StartFuncFetchFoamFuncs();
    StartFuncABreadcrumb();
};

export { StartFunc }