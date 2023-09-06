let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalFolderName = inBodyData.folderName;
    let jVarLocalfilename = inBodyData.FileName;
    let jVarLocalitemname = inBodyData.ItemName;
    let jVarLocalscreenname = inBodyData.ScreenName;
    let jVarLocalDataAttributeValue = inBodyData.DataAttribute;

    switch (inResponse.KTF) {
        case true:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inItemName=${jVarLocalitemname}`
            jVarLocalNewLocation += `&inScreenName=${jVarLocalscreenname}`
            jVarLocalNewLocation += `&inColumnName=${jVarLocalDataAttributeValue}`;
            window.location = jVarLocalNewLocation;
            break;

        case false:
            Swal.fire(`Not Update Data ${inResponse.KReason}`)
            break;
        default:
    };
};

export { StartFunc };