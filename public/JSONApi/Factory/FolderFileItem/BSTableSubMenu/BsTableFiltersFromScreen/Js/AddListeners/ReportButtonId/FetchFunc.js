let StartFunc = async ({ inFetchUrl }) => {
    let jVarLocalFetchUrl = inFetchUrl;

    let LocalResponse = await fetch(jVarLocalFetchUrl);
    let LocalResponseAsJson = await LocalResponse.json();

    return await LocalResponseAsJson;
};

export { StartFunc }