let StartFunc = () => {
    let jVarLocalCardHeaderButtons = document.querySelectorAll(".KMainTableBodyRowShowButtonClass");

    for (let i = 0; i < jVarLocalCardHeaderButtons.length; i++) {
        jVarLocalCardHeaderButtons[i].addEventListener("click", LocalButtonClick);
    };
};

let LocalButtonClick = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataset = jVarLocalClosestTr.dataset;
    let jVarLocalPk = jVarLocalDataset.pk;

    window.location.href = `Show.html${window.location.search}&JsonPk=${jVarLocalPk}`;
    //console.log("aaaaaaa : ", jVarLocalDataset);
};

export { StartFunc }