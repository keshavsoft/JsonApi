// import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFoamFuncs/Entry.js";

import { StartFunc as StartFuncBreadcrumb } from "./Breadcrumb/Entery.js";

let StartFunc = async () => {
    // await StartFuncFetchFromFuncs();
    
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();
    StartFuncBreadcrumb();
};

export { StartFunc }