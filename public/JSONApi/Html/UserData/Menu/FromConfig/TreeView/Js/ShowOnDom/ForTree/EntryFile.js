import { StartFunc as StartFuncForObject } from "./ForObject.js";
import { StartFunc as StartFuncForCollapse } from "./ForCollapse.js";

let StartFunc = ({ inData }) => {
    let k1 = document.getElementById("KCont1");
    k1.innerHTML = "";

    let jVarLocalMainUl = document.createElement("ul");
    jVarLocalMainUl.classList.add("list-unstyled");
    k1.appendChild(jVarLocalMainUl);
    // console.log("inData : ", inData);
    StartFuncForObject({ inParentUl: jVarLocalMainUl, inObject: inData });

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

export { StartFunc };