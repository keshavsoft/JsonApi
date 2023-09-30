import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFoamFuncs/Entry.js";

import { StartFunc as StartFuncBreadcrumb } from "./Breadcrumb/Entery.js";

let StartFunc = async () => {
    await StartFuncFetchFromFuncs();
    StartFuncBreadcrumb();
};

export { StartFunc }