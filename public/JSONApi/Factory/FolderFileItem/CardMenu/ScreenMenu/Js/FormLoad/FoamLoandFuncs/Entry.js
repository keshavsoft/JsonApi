import { StartFunc as StartFuncAfterFetch } from "../FetchFuncs/AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = jVarLocalPrepareObject();

    if (jVarLocalDataNeeded !== null) {

        StartFuncAfterFetch({ inFetchData: jVarLocalDataNeeded });
    };
};

let jVarLocalPrepareObject = () => {
    let jVarLocalDataNeeded = {};
    jVarLocalDataNeeded.BSTableFromData = {};

    jVarLocalDataNeeded.BSTableFromData.AnchorLink = "../../BSTableSubMenu/BSTableFromParams/BSTableFromParams.html";
    jVarLocalDataNeeded = {
        ...jVarLocalDataNeeded,
        ...jVarLocalKSTableFromScreen(),
        ...jVarLocalKSTableFiltersFromScreen(),
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

let jVarLocalKSTableFromScreen = () => {
    let jVarLocalDataNeeded = {};
    jVarLocalDataNeeded.BSTableFromScreen = {};

    jVarLocalDataNeeded.BSTableFromScreen.AnchorLink = "../../BSTableSubMenu/BSTableFromScreen/BSTableFromScreen.html";
    return jVarLocalDataNeeded;
};

let jVarLocalKSTableFiltersFromScreen = () => {
    let jVarLocalDataNeeded = {};
    jVarLocalDataNeeded.BSTableFiltersFromScreen = {};

    jVarLocalDataNeeded.BSTableFiltersFromScreen.AnchorLink = "../../BSTableSubMenu/BSTableFiltersFromScreen/BSTableFiltersFromScreen.html";
    return jVarLocalDataNeeded;
};
export { StartFunc }