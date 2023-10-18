let StartFunc = ({ inFromFetch }) => {
    let jVarLocalFetchData = inFromFetch;
    if (jVarLocalFetchData.KTF === true) {
        jFLocalForSuccess(jVarLocalFetchData);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${inFromFetch.KReason}`
        })
        console.log("Error", inFromFetch.KReason);
    };
};

let jFLocalForSuccess = (jVarLocalFetchData) => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);

    params1.set("NewPk", jVarLocalFetchData.NewPk);
    params1.set("ShowAlert", true);


    //  const new_url = new URL(`${url.pathname}?${params1}`);

    console.log("11111111111 : ", `${url.origin}${url.pathname}${params1}`, url, url.pathname, params1);
    window.location.href = `${url.origin}${url.pathname}?${params1}`;

    //  window.location.href = new_url.href;
};

export { StartFunc };