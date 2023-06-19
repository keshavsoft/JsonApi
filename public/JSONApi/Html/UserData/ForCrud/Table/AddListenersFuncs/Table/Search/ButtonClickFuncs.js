let StartFunc = () => {
    let jVarLocalMainTableSearchTableFooter = document.querySelectorAll(".MainTableSearchTableFooter");

    for (let i = 0; i < jVarLocalMainTableSearchTableFooter.length; i++) {
        jVarLocalMainTableSearchTableFooter[i].addEventListener("click", LocalButtonClick);
    };

    LocalMainTableVerticalToShowAddListener();
};

let LocalMainTableVerticalToShowAddListener = () => {
    let jVarLocalMainTableSearchTableFooter = document.querySelectorAll(".MainTableVerticalToShow");

    for (let i = 0; i < jVarLocalMainTableSearchTableFooter.length; i++) {
        jVarLocalMainTableSearchTableFooter[i].addEventListener("click", (params) => {
            window.location.href = `VerticalToShow.html${window.location.search}`;
        });
    };
};

let LocalButtonClick = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalClosestKTableDivClass = jVarLocalCurrentTarget.closest(".KTableDivClass");
    let jVarLocalTableFooter = jVarLocalClosestKTableDivClass.querySelector(".card-body table tfoot tr");
    jVarLocalTableFooter.style.display = "";
    let jVarLocalInputs = jVarLocalTableFooter.querySelector("input");
    jVarLocalInputs.focus();
};

export { StartFunc }