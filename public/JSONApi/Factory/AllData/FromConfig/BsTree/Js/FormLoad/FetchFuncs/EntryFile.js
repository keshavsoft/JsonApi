import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async () => {

    await StartFuncFetchFunc();

    StartFuncAfterFetch();
};

export { StartFunc };