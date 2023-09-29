import { StartFunc as StartFoamLoadFuncs } from "./FoamLoadFuncs/Entry.js";

import { StartFunc as StartBreadcrumb } from "./Breadcrumb/Entery.js";

let StartFunc = async () => {
    StartFoamLoadFuncs();
    StartBreadcrumb();
};

export { StartFunc }