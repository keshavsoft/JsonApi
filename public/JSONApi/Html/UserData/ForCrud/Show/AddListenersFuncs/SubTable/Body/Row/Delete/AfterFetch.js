const StartFunc = async ({ inFetchData }) => {
    if (inFetchData.KTF) {
        window.location = "";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${inFetchData.KReason}`
        })
    };
};

export { StartFunc };