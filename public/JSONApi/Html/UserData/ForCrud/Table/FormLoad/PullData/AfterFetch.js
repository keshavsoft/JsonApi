let StartFunc = ({ inFetchData }) => {
    let FetchData = inFetchData;
    let jVarCardBody = document.getElementById("KCont1");

    if (FetchData.KTF) {
        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
        jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
            inData: jVarGlobalPresentViewData,
            inHtmlParent: jVarCardBody
        });

        return true;
    };
};

export { StartFunc }