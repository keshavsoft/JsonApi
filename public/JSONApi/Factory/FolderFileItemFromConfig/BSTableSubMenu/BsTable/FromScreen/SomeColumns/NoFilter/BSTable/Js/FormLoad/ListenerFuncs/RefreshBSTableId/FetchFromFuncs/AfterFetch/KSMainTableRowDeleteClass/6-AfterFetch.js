let StartFunc = async ({ inFromFetch, inPk }) => {
    let jVarLocalinPk = inPk;

    if (inFromFetch.KTF === false) {
        Swal.fire({
            icon: 'error',
            title: 'Delete Unsucessfull',
        });
    } else {
        let jVarLocalHtmlId = 'RefreshBSTableId';
        let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
        jVarLocalRefreshBSTableId.click();

        let jVarLocalAlertDeleteIdHtmlId = 'AlertDeleteId';
        let jVarLocalAlertDeleteId = document.getElementById(jVarLocalAlertDeleteIdHtmlId);
        jVarLocalAlertDeleteId.style.display = "";
        
        let jVarLocalStrong = jVarLocalAlertDeleteId.querySelector("strong");
        jVarLocalStrong.innerHTML = jVarLocalinPk;
    };


};

export { StartFunc };