import { StartFunc as StartFuncFetchFuncs } from "./4-FetchFunc.js";

import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded !== null) {

        StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
    };
};

export { StartFunc }