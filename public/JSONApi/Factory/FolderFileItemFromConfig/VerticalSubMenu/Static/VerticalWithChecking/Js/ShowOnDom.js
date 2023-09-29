import { StartFunc as StartFuncFetchFuncs } from "./FetchFuncs/PostFetch.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../../Booking/ToLocalStorage/Customers/BulkWithSubKey.js";

import { StartFunc as StartFuncAfterFetch } from "./FetchFuncs/AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    
    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded.KTF) {
            StartFuncToLocalStorage({ inData: jVarLocalDataNeeded.JsonData });

            StartFuncAfterFetch();
        };
    };
};

export { StartFunc }