import { StartFunc as StartFuncDeleteFunc } from "./DeleteButton/StartFunc.js";

let StartFunc = () => {
    let jVarLocalCardHeaderButtons = document.querySelectorAll(".KMainTableBodyRowShowButtonClass");
    console.log("jVarLocalCardHeaderButtons : ", jVarLocalCardHeaderButtons);
    for (let i = 0; i < jVarLocalCardHeaderButtons.length; i++) {
        jVarLocalCardHeaderButtons[i].addEventListener("click", LocalButtonClick);
    };

    StartFuncDeleteFunc();
    // KMainTableBodyRowDeleteButtonClass
};

let LocalButtonClick = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataset = jVarLocalClosestTr.dataset;
    let jVarLocalPk = jVarLocalDataset.pk;

    Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Yes, delete it!',
        confirmButtonText: 'Show'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = `Show.html${window.location.search}&JsonPk=${jVarLocalPk}`;

        };

    });

};

export { StartFunc }