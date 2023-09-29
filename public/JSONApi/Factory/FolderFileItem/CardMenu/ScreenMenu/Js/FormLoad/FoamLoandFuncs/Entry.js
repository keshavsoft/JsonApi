import { StartFunc as StartFuncAfterFetch } from "../FetchFuncs/AfterFetch/EntryFile.js";

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
        ...jVarLocalVerticalFromParams(),
        ...jVarLocalTreeFromParams(),
        ...jVarLocalKSTreeFromParams()
    }
    return jVarLocalDataNeeded;
};

let jVarLocalVerticalFromParams = () => {
    let jVarLocalDataNeeded = {};
    jVarLocalDataNeeded.VerticalFromParams = {};

    jVarLocalDataNeeded.VerticalFromParams.AnchorLink = "../../VerticalSubMenu/FromScreen/VerticalFromParams/VerticalFromParams.html";
    return jVarLocalDataNeeded;
};

let jVarLocalTreeFromParams = () => {
    let jVarLocalDataNeeded = {};
    jVarLocalDataNeeded.TreeFromParams = {};

    jVarLocalDataNeeded.TreeFromParams.AnchorLink = "../../TreeSubMenu/TreeFromParams/TreeFromParams.html";
    return jVarLocalDataNeeded;
};

let jVarLocalKSTreeFromParams = () => {
    let jVarLocalDataNeeded = {};
    jVarLocalDataNeeded.KSTreeFromParams = {};

    jVarLocalDataNeeded.KSTreeFromParams.AnchorLink = "../../TreeSubMenu/KSTreeFromParams/KSTreeFromParams.html";
    return jVarLocalDataNeeded;
};
export { StartFunc }