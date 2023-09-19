let StartFunc = ({ inFetchData }) => {
    console.log("inFetchData",inFetchData);
    LocalStartFunc({ inFilesObjects : inFetchData.Folders})
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

    Object.entries(jVarLocalFilesObjects).forEach(
        ([key, value]) => {
            let jVarLocalFromLoop = LocalLoopFunc({
                inFolderName:  key,
            });
            jVarLocalNewRow.appendChild(jVarLocalFromLoop);
        });

    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);

};

let LocalLoopFunc = ({ inFolderName }) => {
    console.log("inFolderName99",inFolderName);
    let jVarLocalTemplate = document.getElementById("TemplateForFolders");
    var jVarLocalTemplateClone = jVarLocalTemplate.cloneNode(true);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{FolderName}}/g, inFolderName);

    return document.importNode(jVarLocalTemplateClone.content, true);
};

export { StartFunc }