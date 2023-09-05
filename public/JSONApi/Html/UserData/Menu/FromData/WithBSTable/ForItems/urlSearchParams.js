let ReturnFolderAndFileName = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const FolderName = params.get("FolderName");
    const FileName = params.get("FileName");

    return { FolderName, FileName };
};

export { ReturnFolderAndFileName }
