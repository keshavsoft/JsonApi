let StartFunc = ({ inFileName, inMenuClass, inIconClass }) => {
    let jVarLocalFileName = inFileName;
    let jVarLocalMenuClass = inMenuClass;
    let jVarLocalIconClass = inIconClass;

    let jVarLocalMenuNavContainerId = document.getElementById("MenuNavContainerId");
    let jVarLocalTemplate = document.getElementById("TemplateForMenuItem");

    var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

    let jVarLocalToShowHtml = template({
        MenuName: jVarLocalFileName, MenuClass: jVarLocalMenuClass,
        IconClass: jVarLocalIconClass
    });

    jVarLocalMenuNavContainerId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
};


export { StartFunc }