let jFChangeHeaderActiveClass = () => {
    let jVarLocalPathArray = window.location.pathname.split("/");
    let jVarLocalHTMLName = jVarLocalPathArray[jVarLocalPathArray.length - 1];
    jFChangeNavAnchorClass({ inClassName: jVarLocalHTMLName.split(".")[0] });
};

let jFChangeNavAnchorClass = ({ inClassName }) => {
    let jVarLocalId = "NavBarId";
    let jVarLocalNavBarId = document.getElementById(jVarLocalId);

    jFLocalRemoveActiveClassForAllATags({ inHtmlId: jVarLocalNavBarId });
    jFLocalAddActiveClassToPresentHtml({ inHtmlId: jVarLocalNavBarId, inClassName });
};

let jFLocalRemoveActiveClassForAllATags = ({ inHtmlId }) => {
    let jVarLocalA = inHtmlId.querySelectorAll("a");

    for (let i = 0; i < jVarLocalA.length; i++) {
        jVarLocalA[i].classList.remove("text-info");
    };
};

let jFLocalAddActiveClassToPresentHtml = ({ inHtmlId, inClassName }) => {
    let jVarLocalA = inHtmlId.querySelector(`[href*="${inClassName}"]`);

    if (jVarLocalA === null === false) {
        jVarLocalA.classList.remove("text-white");
        jVarLocalA.classList.add("text-info");
    };
};

jFChangeHeaderActiveClass();