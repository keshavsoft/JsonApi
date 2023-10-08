import { StartFunc as StartFuncFetchFuncs } from "./GetFetcFunc.js";

import { StartFunc as StartFuncAfterFetch } from "../AfterFetchFuncs/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded !== null) {
        await StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
    };
};

export { StartFunc }