import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async ({ inProjectName, inSubRoute, inFolderName, inFileName, inItemName, inScreenName }) => {
    let jVarLocalPostData = StartFuncPreparePostData({ inFolderName, inFileName, inItemName, inScreenName });
    let FetchData = await StartFuncPostFetch({ inProjectName, inSubRoute, inPostData: jVarLocalPostData });

    StartFuncAfterFetch({ inFetchData: FetchData });
};

export { StartFunc }