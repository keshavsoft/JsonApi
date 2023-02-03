let ReturnFolderAndFileNameAndItemName = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const FolderName = params.get("FolderName");
    const FileName = params.get("FileName");
    const ItemName = params.get("ItemName");
    const ScreenName = params.get("ScreenName");
    const RowPK = params.get("RowPK");

    return { FolderName, FileName, ItemName, ScreenName, RowPK };
};

export { ReturnFolderAndFileNameAndItemName }
