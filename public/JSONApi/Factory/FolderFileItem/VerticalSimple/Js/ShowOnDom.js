import { StartFunc as StartFuncFetchFuncs } from "./FetchFuncs/PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./FetchFuncs/AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    
    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded.KTF) {

            StartFuncAfterFetch({inFetchData: jVarLocalDataNeeded});
        };
    };
};

export { StartFunc }