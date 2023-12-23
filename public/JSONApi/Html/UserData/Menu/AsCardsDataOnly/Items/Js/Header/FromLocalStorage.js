import ConfigJson from "../../../../../../../Config.json" assert{type: "json"};

let StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.LocalStorageKeys.HeaderKeys.HeaderFoldersKey;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalFromLocalStorageAsJson = JSON.parse(jVarLocalFromLocalStorage);

    jFLocalRemoveOld();
    jFLocalAddNewItems({ inData: jVarLocalFromLocalStorageAsJson });
};

let jFLocalAddNewItems = ({ inData }) => {
    let jVarLocalMenuNavContainerId = document.getElementById("MenuNavContainerId");
    let jVarLocalTemplate = document.getElementById("TemplateForMenuItemLoop");

    var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

    let jVarLocalToShowHtml = template(inData);

    jVarLocalMenuNavContainerId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
};

let jFLocalRemoveOld = () => {
    let jVarLocalMenuNavContainerId = document.getElementById("MenuNavContainerId");
    const elements = jVarLocalMenuNavContainerId.querySelectorAll(".UserLiClass")

    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    };
};


export { StartFunc }