import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async ({ inEvent }) => {
    if (inEvent.keyCode === 13) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarLocalCurrentName = jVarLocalCurrentTarget.name;

        let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".card");
        if (StartFuncCheckBeforeFetch()) {
            let jVarLocalBodyData = StartFuncPreparePostData({ inEvent });

            let response = await StartFuncFetchFunc({
                inBodyData: jVarLocalBodyData
            });

            StartFuncAfterFetch({ FetchData: response, inHtmlCard: jVarLocalHtmlCard, inCurrentName: jVarLocalCurrentName });
        };
    };
};

export { StartFunc };