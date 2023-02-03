let ReturnFolderAndFileNameAndItemName = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const FolderName = params.get("FolderName");
    const FileName = params.get("FileName");
    const ItemName = params.get("ItemName");
    const ScreenName = params.get("ScreenName");
    const JsonPk = params.get("JsonPk");

    return { FolderName, FileName, ItemName, ScreenName, JsonPk };
};

export { ReturnFolderAndFileNameAndItemName }
