import { StartFunc as StartFuncForObject } from "./ForObject.js";
import { StartFunc as StartFuncForCollapse } from "./ForCollapse.js";

let StartFunc = ({ data }) => {
    let k1 = document.getElementById("KCont1");
    k1.innerHTML = "";
    let jVarLocalData = data;
    let jVarLocalMainUl = document.createElement("ul");
    jVarLocalMainUl.classList.add("list-unstyled");
    k1.appendChild(jVarLocalMainUl);
    StartFuncForObject({ inParentUl: jVarLocalMainUl, inObject: jVarLocalData });

    StartFuncForCollapse();
};

let jFLocalFromDomScanId = () => {
    let jVarLocalHtmlScanId = 'ScanId';
   let jVarHtmlScanId = document.getElementById(jVarLocalHtmlScanId);
   let jVarHtmlScanIdValue = jVarHtmlScanId.value.trim();
   return jVarHtmlScanIdValue;
};

let jFLocalHtmlFocusScanId = () => {
    let jVarLocalHtmlId = 'ScanId';
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    jVarLocalScanId.focus();
};

let jFLocalToInputScanId = ({ inScanId }) => {
    let jVarLocalHtmlId = 'ScanId';
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    jVarLocalScanId.value = inScanId;
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


