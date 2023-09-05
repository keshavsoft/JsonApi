let jFAddtoPrintButtonInTable = async () => {

    let jVarLocalPrintButtons = document.querySelectorAll(".Options.Print");
    //MainTable Body Row Options Print
    jVarLocalPrintButtons.forEach((spanElement) => {
        spanElement.addEventListener("click", jFPrintButtonFunc);
    });
};

let jFPrintButtonFunc = async (inEvent) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarClosestTrDataset = jVarClosestTr.dataset;

    if ("pk" in jVarClosestTrDataset) {
        let jVarLocalRowPk = jVarClosestTrDataset.pk;

        if (jVarLocalRowPk > 0) {

            let jVarLocalSearch = document.location.search;
            let jVarLocalNewSearch = `${jVarLocalSearch}&RowPK=${jVarLocalRowPk}`;

            window.location = `Print.html${jVarLocalNewSearch}`;
        };
    };
};

export { jFAddtoPrintButtonInTable }