let ReturnFolderAndFileNameAndItemName = () => {
    let jVarLocalSearch = document.location.search;

    const params = new URLSearchParams(jVarLocalSearch);
    const FolderName = params.get("FolderName");
    const FileName = params.get("FileName");
    const ItemName = params.get("ItemName");
    const ScreenName = params.get("ScreenName");

    return { FolderName, FileName, ItemName, ScreenName };
};

export { ReturnFolderAndFileNameAndItemName }
