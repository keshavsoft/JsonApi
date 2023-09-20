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
    let jVarLocalFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalItemName = getUrlQueryParams({ inGetKey: "inItemName" });
    let jVarLocalScreenName = getUrlQueryParams({ inGetKey: "inScreenName" });

    Object.entries(jVarLocalFilesObjects).forEach(
        ([key, value]) => {
            let jVarLocalFromLoop = LocalLoopFunc({
                inFolderName: jVarLocalFolderName,
                inFileName: jVarLocalFileName,
                inItemName: jVarLocalItemName,
                inScreenName: jVarLocalScreenName,
                inMenuName: key,
                inAnchorLink: value.AnchorLink
            });
            jVarLocalNewRow.appendChild(jVarLocalFromLoop);
        });
    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);

};

let LocalLoopFunc = ({ inFolderName, inFileName, inItemName, inScreenName,inMenuName,inAnchorLink }) => {
console.log("inScreenName",inScreenName);

    let jVarLocalTemplate = document.getElementById("TemplateForScreenMenu");
    var jVarLocalTemplateClone = jVarLocalTemplate.cloneNode(true);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{FolderName}}/g, inFolderName);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{FileName}}/g, inFileName);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{ItemName}}/g, inItemName);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{ScreenName}}/g, inScreenName);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{MenuName}}/g, inMenuName);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{AnchorLink}}/g, inAnchorLink);

    return document.importNode(jVarLocalTemplateClone.content, true);
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }