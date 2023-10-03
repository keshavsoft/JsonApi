let ReturnFolderAndFileNameAndItemName = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const FolderName = params.get("FolderName");
    const FileName = params.get("FileName");
    const ItemName = params.get("ItemName");
    const RowCount = params.get("RowCount");

    return { FolderName, FileName, ItemName, RowCount };
};

export { ReturnFolderAndFileNameAndItemName }
