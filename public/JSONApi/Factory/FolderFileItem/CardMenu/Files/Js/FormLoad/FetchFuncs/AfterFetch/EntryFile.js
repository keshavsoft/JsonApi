let StartFunc = ({ inFetchData }) => {
    console.log("inFetchData", inFetchData);

    LocalStartFunc({ inFilesObjects: inFetchData })
    // let jVarCardBody = document.getElementById("KCont1");

    // if (inFetchData.KTF) {
    //     jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(inFetchData.DataFromServer);
    //     jVarGlobalPresentViewData[0].HTMLControlType = "VerticalSimple";
    //     jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
    //         inData: jVarGlobalPresentViewData,
    //         inHtmlParent: jVarCardBody
    //     });
    // };
};

let LocalStartFunc = ({ inFilesObjects }) => {
    let jVarLocalFilesObjects = inFilesObjects;
    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalNewRow = document.createElement("div");
    jVarLocalNewRow.setAttribute("class", "row");
    let jVarLocalFolderName = getUrlQueryParams({ inGetKey: "inFolderName" });
    Object.entries(jVarLocalFilesObjects).forEach(
        ([key, value]) => {
            let jVarLocalFromLoop = LocalLoopFunc({
                inFolderName: jVarLocalFolderName,
                inFileName: value.FileName
            });
            jVarLocalNewRow.appendChild(jVarLocalFromLoop);
        });

    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);

};

let LocalLoopFunc = ({ inFolderName, inFileName }) => {
    console.log("inFolderName99", inFolderName);
    let jVarLocalTemplate = document.getElementById("TemplateForFiles");
    var jVarLocalTemplateClone = jVarLocalTemplate.cloneNode(true);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{FolderName}}/g, inFolderName);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{FileName}}/g, inFileName);

    return document.importNode(jVarLocalTemplateClone.content, true);
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }