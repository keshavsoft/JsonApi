let StartFunc = ({ inFetchData }) => {
    if (inFetchData.KTF === false) {
        Swal.fire({
            title: 'Error',
            text: "inItemName Not Found",
            icon: 'error',
        });
        return;
    }
    let jVarCardBody = document.getElementById("KCont1");
    
    if (inFetchData.KTF) {
        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(inFetchData.DataFromServer);
        jVarGlobalPresentViewData[0].HTMLControlType = "VerticalSimple";
        jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
            inData: jVarGlobalPresentViewData,
            inHtmlParent: jVarCardBody
        });
    };
};

export { StartFunc }