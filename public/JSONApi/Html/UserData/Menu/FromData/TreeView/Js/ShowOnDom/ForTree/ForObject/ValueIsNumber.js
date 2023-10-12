let jFLocalATag = () => {
    let a1 = document.createElement("a");
    a1.setAttribute("href", "#");

    a1.classList.add("list-link");
    a1.classList.add("link-current");

    let jVarLocalSpan = document.createElement("span");
    jVarLocalSpan.classList.add("list-icon");

    let jVarLocalITag = document.createElement("i");
    jVarLocalITag.classList.add("fa-solid");
    jVarLocalITag.classList.add("fa-list-ol");

    jVarLocalITag.setAttribute("style","color: #1106b7");

    jVarLocalSpan.appendChild(jVarLocalITag);

    a1.appendChild(jVarLocalSpan);

    return a1;
};

let StartFunc = ({ inParentLiTag, inKey, inValue }) => {
    let jVarLocalValue = inValue;
    let a1 = jFLocalATag();

    // a1.insertAdjacentHTML("beforeend", `${inKey} : ${jVarLocalValue}`);
    a1.insertAdjacentHTML("beforeend", `<span font-weight:normal">${inKey} : </span><span style="color:#1106b7"> ${jVarLocalValue}</span>`);

    inParentLiTag.appendChild(a1);
};

export { StartFunc };