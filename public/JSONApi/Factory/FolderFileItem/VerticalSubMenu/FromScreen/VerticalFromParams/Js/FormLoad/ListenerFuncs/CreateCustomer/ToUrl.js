let StartFunc = () => {    
    const myUrlWithParams = new URL("../BSTable/BSTable.html", window.location.href);
    console.log("myUrlWithParams",myUrlWithParams);
    window.location.href = `${myUrlWithParams.href}${window.location.search}`;
};

export { StartFunc };