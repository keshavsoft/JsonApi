let StartFunc = ({ inFolderName, inFileName, inItemName, inScreenName }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileName = inFileName;
    let jVarLocalItemName = inItemName;
    let jVarLocalScreenName = inScreenName;

    return {
        inFolderName: jVarLocalFolderName,
        inFileName: jVarLocalFileName,
        inItemName: jVarLocalItemName,
        inScreenName: jVarLocalScreenName
    };
};

export { StartFunc }