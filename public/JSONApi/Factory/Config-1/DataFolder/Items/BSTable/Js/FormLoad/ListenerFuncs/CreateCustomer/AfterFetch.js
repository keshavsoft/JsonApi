let StartFunc = ({ inFromFetch, inCustomerName }) => {
    if (inFromFetch.KTF) {
        jFLocalPostFetchNotArray({ inCustomerName });
    };
};

let jFLocalPostFetchNotArray = ({ inCustomerName }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    myUrlWithParams.searchParams.append("FromSave", true);
    myUrlWithParams.searchParams.append("CustomerName", inCustomerName);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc };