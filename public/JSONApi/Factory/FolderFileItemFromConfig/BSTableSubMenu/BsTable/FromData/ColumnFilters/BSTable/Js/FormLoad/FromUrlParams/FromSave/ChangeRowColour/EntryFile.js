let StartFunc = ({ inRowPk }) => {
    let jVarLocalKCont1 = document.getElementById("KCont1");

    // let jVarLocalElementsToFocus = jVarLocalKCont1.querySelector(`tr [data-pk='${inRowPk}']`);

    let jVarLocalElementsToFocus = jVarLocalKCont1.querySelector(`tr`);

    console.log("jVarLocalElementsToFocus---------", jVarLocalElementsToFocus, inRowPk);

};

export { StartFunc };