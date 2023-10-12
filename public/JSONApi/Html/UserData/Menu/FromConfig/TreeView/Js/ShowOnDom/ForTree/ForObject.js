import { StartFunc as StartFuncForObject } from "./ForObject/ValueIsObject.js";
import { StartFunc as StartFuncValueIsArray } from "./ForObject/ValueIsArray.js";
import { StartFunc as StartFuncValueIsString } from "./ForObject/ValueIsString.js";
import { StartFunc as StartFuncValueIsNumber } from "./ForObject/ValueIsNumber.js";
import { StartFunc as StartFuncValueIsBool } from "./ForObject/ValueIsBool.js";

let StartFunc = ({ inObject, inParentUl }) => {
    let jVarLocalObject = inObject;

    let jVarLocalUl = document.createElement("ul");

    jVarLocalUl.classList.add("list-unstyled");

    Object.entries(jVarLocalObject).forEach(([key, value]) => {
        jFIsEntry({ inParentUl, inKey: key, inValue: value });
    });
};

let jFIsEntry = ({ inParentUl, inKey, inValue }) => {
    let jVarLocalValue = inValue;

    let l1 = document.createElement("li");

    if (typeof jVarLocalValue === 'boolean') {
        StartFuncValueIsBool({ inParentLiTag: l1, inKey, inValue });
        inParentUl.appendChild(l1);
        return;
    };

    if (typeof jVarLocalValue === 'string' || jVarLocalValue instanceof String) {
        StartFuncValueIsString({ inParentLiTag: l1, inKey, inValue });
        inParentUl.appendChild(l1);
        return;
    };

    if (Number.isInteger(jVarLocalValue)) {
        StartFuncValueIsNumber({ inParentLiTag: l1, inKey, inValue });
        inParentUl.appendChild(l1);
        return;
    };

    if (Array.isArray(jVarLocalValue)) {
        StartFuncValueIsArray({ inParentLiTag: l1, inKey });

        let jVarLocalUl = document.createElement("ul");

        jVarLocalUl.classList.add("list-unstyled");
        jVarLocalUl.classList.add("list-hidden");

        l1.appendChild(jVarLocalUl);

        StartFunc({ inObject: inValue, inParentUl: jVarLocalUl });

        inParentUl.appendChild(l1);
        return;
    };

    if (typeof jVarLocalValue === 'object' && jVarLocalValue !== null) {
        StartFuncForObject({ inParentLiTag: l1, inKey });

        let jVarLocalUl = document.createElement("ul");

        jVarLocalUl.classList.add("list-unstyled");
        jVarLocalUl.classList.add("list-hidden");

        l1.appendChild(jVarLocalUl);

        StartFunc({ inObject: inValue, inParentUl: jVarLocalUl });
        inParentUl.appendChild(l1);
        return;
    };

};

export { StartFunc };