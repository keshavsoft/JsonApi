import { StartFunc as StartFuncEntryFile } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {

    let jVarLocalData = jVarLocalPresentViewData;

    if ("KTF" in jVarLocalData) {
        if (jVarLocalData.KTF) {
            StartFuncEntryFile({ inResponseAsJson: jVarLocalData.JsonData });

        } else {
            return jVarLocalData;
        };
    };
};

export { StartFunc };