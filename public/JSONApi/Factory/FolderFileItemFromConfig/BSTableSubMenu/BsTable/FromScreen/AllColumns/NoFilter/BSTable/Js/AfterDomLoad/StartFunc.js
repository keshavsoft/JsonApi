const StartFunc = () => {
    let jVarLocalFromSave = getUrlQueryParams({ inGetKey: "FromSave" });
    let jVarLocalSavedPk = getUrlQueryParams({ inGetKey: "SavedPk" });

    if (jVarLocalFromSave) {
        let jVarLocalHtmlId = "KCont1";
        let jVarLocalKCont1 = document.getElementById(jVarLocalHtmlId);
        let jVarLocalFindRow = jVarLocalKCont1.querySelector(`tr[data-pk='${jVarLocalSavedPk}']`);

        let jVarLocalHtmlSuccessId = 'AlertSuccessId';
        let jVarLocalAlertSuccessId = document.getElementById(jVarLocalHtmlSuccessId);

        if (jVarLocalFindRow === null === false) {
            jVarLocalFindRow.classList.add("table-success");
            jVarLocalAlertSuccessId.style.display = "";
            jFLocalToInnerHtmlRowPkInsertSuccessStrongId({inRowPkInsertSuccessStrongId: jVarLocalSavedPk});
        };
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalToInnerHtmlRowPkInsertSuccessStrongId = ({ inRowPkInsertSuccessStrongId }) => {
    let jVarLocalHtmlId = 'RowPkInsertSuccessStrongId';
   let jVarLocalRowPkInsertSuccessStrongId = document.getElementById(jVarLocalHtmlId);
   jVarLocalRowPkInsertSuccessStrongId.innerHTML = inRowPkInsertSuccessStrongId;
};

export { StartFunc };
