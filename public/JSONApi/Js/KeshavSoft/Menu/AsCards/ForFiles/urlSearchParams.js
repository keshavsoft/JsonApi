let ReturnFolderName = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const FolderName = params.get("FolderName");

    return { FolderName };
};

export { ReturnFolderName }
