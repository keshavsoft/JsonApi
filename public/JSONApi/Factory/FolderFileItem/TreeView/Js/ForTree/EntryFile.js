import { StartFunc as StartFuncForObject } from "./ForObject.js";
import { StartFunc as StartFuncForCollapse } from "./ForCollapse.js";

let StartFunc = () => {
    let k1 = document.getElementById("KCont1");
    k1.innerHTML = "";
    let jVarLocalData = data1;
    let jVarLocalMainUl = document.createElement("ul");
    jVarLocalMainUl.classList.add("list-unstyled");
    k1.appendChild(jVarLocalMainUl);
    StartFuncForObject({ inParentUl: jVarLocalMainUl, inObject: jVarLocalData });

    StartFuncForCollapse();
};

let data = {
    key1: "value1",
    key2: {
        Name: "Keshav",
        Family: {
            Wife: "Purna",
            Children: {
                Big: "Chakri"
            }
        }
    },
    key3: "value3"
};

let data1 = {
    key1: "value1",
    key2: "Keshav",
    key3: "value3"
};

export { StartFunc }


