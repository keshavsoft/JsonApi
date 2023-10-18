import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async () => {
    if (StartFuncCheckBeforeFetch()) {
        StartFuncFetchFunc({}).then(PromiseData => {
            StartFuncAfterFetch({ inFromFetch: PromiseData })
        });
    };
}

export { StartFunc };