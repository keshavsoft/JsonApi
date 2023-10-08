let StartFunc = () => {
    let jVarLocalColumnOrderObject = {};
    // let jVarLocalReturnArray = [];
    let jVarLocalColumnOrderTableBody = document.getElementById("ColumnOrderTableBody");
    let jVarCheckBoxes = jVarLocalColumnOrderTableBody.querySelectorAll('input[type="text"]');

    for (let i = 0; i < jVarCheckBoxes.length; i++) {
        jVarLocalColumnOrderObject[jVarCheckBoxes[i].value] = jVarCheckBoxes[i].dataset.dataattribute;
    };

    let jVarLocalKeys = Object.keys(jVarLocalColumnOrderObject);
    let jVarLocalNumbers = toNumbers(jVarLocalKeys);

    let jVarLocalReturnArray = jVarLocalNumbers.map(element => {
        return jVarLocalColumnOrderObject[element];
    });

    return jVarLocalReturnArray;
};

const toNumbers = arr => arr.map(Number);

export { StartFunc }