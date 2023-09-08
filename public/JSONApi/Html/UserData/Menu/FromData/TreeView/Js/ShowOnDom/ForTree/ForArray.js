let StartFunc = ({ inData }) => {
    let jVarLocalArray = inArray;
    // <ul class="list-unstyled list-hidden">
    let jVarLocalUl = document.createElement("ul");

    jVarLocalUl.classList.add("list-unstyled");
    // jVarLocalUl.classList.add("list-hidden");

    jVarLocalArray.forEach(element => {
        if (Array.isArray(element)) {
            jFIsArray({ inArray: element, inParent: inParent });
        };

        if (typeof element === 'object' && element !== null) {
            jFIsObject({ inObject: element, inParent: inParent });
        };
    });

    // jFIsObject({ inObject: data1, inParent: k1 });
};


let jFIsArray = ({ inArray, inParent }) => {

    // inParent.appendChild(jVarLocalUl);
};
