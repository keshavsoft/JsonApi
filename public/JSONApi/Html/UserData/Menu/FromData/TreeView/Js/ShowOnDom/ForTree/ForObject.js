import { StartFunc as StartFuncForObject } from "./ForObject/ValueIsObject.js";

let StartFunc = ({ inObject, inParentUl }) => {
    let jVarLocalObject = inObject;

    let jVarLocalUl = document.createElement("ul");

    jVarLocalUl.classList.add("list-unstyled");
    // jVarLocalUl.classList.add("list-hidden");

    Object.entries(jVarLocalObject).forEach(([key, value]) => {
        jFIsEntry({ inParentUl, inKey: key, inValue: value })
    });

    // inParent.appendChild(jVarLocalUl);
};

let jFIsEntry = ({ inParentUl, inKey, inValue }) => {
    let jVarLocalValue = inValue;

    let l1 = document.createElement("li");

    if (typeof jVarLocalValue === 'string' || jVarLocalValue instanceof String) {
        jFLocalForString({ inParentLiTag: l1, inKey, inValue });
    };

    // if (Array.isArray(jVarLocalValue)) {
    //     a1.innerHTML = `${inKey}`;
    //     l1.appendChild(a1);

    //     jFIsArray({ inArray: inValue, inParent: l1 });
    // };
    // console.log("jVarLocalValue : ", jVarLocalValue);
    if (typeof jVarLocalValue === 'object' && jVarLocalValue !== null) {
        StartFuncForObject({ inParentLiTag: l1, inKey });

        let jVarLocalUl = document.createElement("ul");

        jVarLocalUl.classList.add("list-unstyled");
        jVarLocalUl.classList.add("list-hidden");

        l1.appendChild(jVarLocalUl);

        StartFunc({ inObject: inValue, inParentUl: jVarLocalUl })

        // jFLocalForObject({ inParentLiTag: l1, inKey, inValue });

        // a1.classList.add("list-arrow");

        // let jVarLocalSpan = document.createElement("span");
        // jVarLocalSpan.classList.add("list-icon");

        // let jVarLocalITag = document.createElement("i");
        // jVarLocalITag.classList.add("fa-solid");
        // jVarLocalITag.classList.add("fa-hammer");
        // jVarLocalITag.classList.add("bell");

        // jVarLocalSpan.appendChild(jVarLocalITag);

        // a1.appendChild(jVarLocalSpan);
        // l1.appendChild(a1);

        // a1.insertAdjacentHTML("beforeend", `${inKey} : ${jVarLocalValue}`);

        // jFIsObject({ inObject: jVarLocalValue, inParent: l1 });

    };

    inParentUl.appendChild(l1);
};

let jFLocalForTagsASpanAndI = () => {
    let a1 = document.createElement("a");
    a1.setAttribute("href", "#");

    a1.classList.add("list-link");
    a1.classList.add("link-current");

    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("list-icon");

    let jVarLocalITag = document.createElement("i");
    jVarLocalITag.classList.add("fa-solid");
    jVarLocalITag.classList.add("fa-mug-hot");
    jVarLocalITag.classList.add("bell");

    jVarLocalSpan.appendChild(jVarLocalITag);

    a1.appendChild(jVarLocalSpan);

    return a1;
};

let jFLocalForString = ({ inParentLiTag, inKey, inValue }) => {
    let jVarLocalValue = inValue;
    let a1 = jFLocalForTagsASpanAndI();

    a1.insertAdjacentHTML("beforeend", `${inKey} : ${jVarLocalValue}`);
    inParentLiTag.appendChild(a1);
};


let jFLocalForString1 = ({ inParentATag, inKey, inValue }) => {
    let jVarLocalValue = inValue;
    let a1 = inParentATag;

    a1.classList.add("list-current");

    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("list-icon");

    let jVarLocalITag = document.createElement("i");
    jVarLocalITag.classList.add("fa-solid");
    jVarLocalITag.classList.add("fa-mug-hot");
    jVarLocalITag.classList.add("bell");

    jVarLocalSpan.appendChild(jVarLocalITag);

    a1.appendChild(jVarLocalSpan);

    a1.insertAdjacentHTML("beforeend", `${inKey} : ${jVarLocalValue}`);
};

let jFLocalForObject = ({ inParentLiTag, inKey, inValue }) => {
    let jVarLocalValue = inValue;
    let jVarLocalLiTag = inParentLiTag;

    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("list-icon");

    let jVarLocalITag = document.createElement("i");
    jVarLocalITag.classList.add("fa-solid");
    jVarLocalITag.classList.add("fa-hammer");
    jVarLocalITag.classList.add("bell");

    jVarLocalSpan.appendChild(jVarLocalITag);

    a1.appendChild(jVarLocalSpan);

    a1.insertAdjacentHTML("beforeend", `${inKey}`);
};

export { StartFunc };