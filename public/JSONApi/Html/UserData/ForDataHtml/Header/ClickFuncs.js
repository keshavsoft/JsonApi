// import { StartFunc as StartFuncToLocalStorage } from "../../../../Js/KeshavSoft/CommonFuncs/ToLocalStorage/ForHeader.js";
//  import { StartFunc as StartFuncToDataList } from "../../ToDataList/FromLocalStorageKey.js";
import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/FromPreloadFetch.js";
const StartFunc = () => {
    let jVarLocalHtmlId = "ToDataListId";
    let jVarLocalToDataListId = document.getElementById(jVarLocalHtmlId);

    jVarLocalToDataListId.addEventListener("click", () => {
        StartFuncToLocalStorage();
        // StartFuncToDataList();
    });
};

export { StartFunc };