let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;

    return {
        inFolderName: jVarLocalFolderName,
        inFileNameOnly: jVarLocalfilename,
        inItemName: jVarLocalitemname,
    };

};

export { StartFunc };