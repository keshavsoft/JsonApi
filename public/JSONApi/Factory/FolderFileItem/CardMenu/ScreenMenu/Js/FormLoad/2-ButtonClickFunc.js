import { StartFunc as StartFuncFetchFuncs } from "./FetchFuncs/PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./FetchFuncs/AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = jVarLocalPrepareObject();

    if (jVarLocalDataNeeded !== null) {

        StartFuncAfterFetch({ inFetchData: jVarLocalDataNeeded });
    };
};

let jVarLocalPrepareObject = () => {
    let jVarLocalDataNeeded = {};
    jVarLocalDataNeeded.BSTable = {};

    jVarLocalDataNeeded.BSTable.AnchorLink = "../../BSTableSubMenu/BSTableFromParams/BSTableFromParams.html";
    jVarLocalDataNeeded = {
        ...jVarLocalDataNeeded,
        ...jVarLocalVerticalFromParams()
    }
    return jVarLocalDataNeeded;
};

let jVarLocalVerticalFromParams = () => {
    let jVarLocalDataNeeded = {};
    jVarLocalDataNeeded.VerticalFromParams = {};

    jVarLocalDataNeeded.VerticalFromParams.AnchorLink = "../../VerticalSubMenu/VerticalFromParams/VerticalFromParams.html";
    return jVarLocalDataNeeded;
};
export { StartFunc }