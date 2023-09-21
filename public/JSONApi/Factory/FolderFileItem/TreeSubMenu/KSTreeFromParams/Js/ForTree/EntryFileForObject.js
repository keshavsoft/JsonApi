import { StartFunc as StartFuncForObject } from "./ForObject.js";
import { StartFunc as StartFuncForCollapse } from "./ForCollapse.js";

let StartFunc = ({ inFromFetch }) => {
    let k1 = document.getElementById("KCont1");
    k1.innerHTML = "";
    let jVarLocalData = inFromFetch.JsonData;
    let jVarLocalMainUl = document.createElement("ul");
    jVarLocalMainUl.classList.add("list-unstyled");
    k1.appendChild(jVarLocalMainUl);
    StartFuncForObject({ inParentUl: jVarLocalMainUl, inObject: jVarLocalData });

    StartFuncForCollapse();
};

export { StartFunc }


