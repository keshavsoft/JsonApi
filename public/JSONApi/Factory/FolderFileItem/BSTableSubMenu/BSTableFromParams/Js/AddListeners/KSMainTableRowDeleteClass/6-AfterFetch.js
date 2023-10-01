let StartFunc = async ({ inFromFetch }) => {
    console.log("inFromFetch999--------", inFromFetch);
    if (inFromFetch.KTF === false) {
        Swal.fire({
            icon: 'error',
            title: 'Delete Unsucessfull',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Deleted sucessfully',
            timer: 3000
        }).then(() => {
            let jVarLocalHtmlId = 'RefreshBSTableId';
            let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
            jVarLocalRefreshBSTableId.click();
        });
    };

};

export { StartFunc };