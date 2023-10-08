import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncPatchFunc } from "./5-PatchFunc.js";

let StartFunc = async ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    console.log("jVarLocalCurrentTarget:", jVarLocalCurrentTarget);


    if (StartFuncCheckBeforeFetch()) {
        let jVarLocalPreparePostData = await StartFuncPreparePostData({ inCurrentTarget: jVarLocalCurrentTarget });
        StartFuncPatchFunc({ inFetchBody: jVarLocalPreparePostData });

    };
};

export { StartFunc };