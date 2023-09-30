let StartFunc = () => {
    let jVarLocalReturnArray = [];
    let jVarLocalHtmlId = "ColumnsTableBody";
    let jVarLocalColumnsTableBody = document.getElementById(jVarLocalHtmlId);
    let jVarLocalCheckBoxes = jVarLocalColumnsTableBody.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < jVarLocalCheckBoxes.length; i++) {
        if (jVarLocalCheckBoxes[i].checked) {
            jVarLocalReturnArray.push(jVarLocalCheckBoxes[i].dataset.dataattribute);
        };
    }
    return jVarLocalReturnArray;
};

let StartFunc_ShowColumns23_09_23 = () => {
    let jVarLocalReturnArray = [];
    let jVarLocalHtmlId = "ColumnsTableBody";
    let jVarLocalColumnsTableBody = document.getElementById(jVarLocalHtmlId);
    let jVarLocalCheckBoxes = jVarLocalColumnsTableBody.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < jVarLocalCheckBoxes.length; i++) {
        if (jVarLocalCheckBoxes[i].checked) {
            jVarLocalReturnArray.push(jVarLocalCheckBoxes[i].dataset.dataattribute);
        };
    }
    return jVarLocalReturnArray;
};

export { StartFunc }