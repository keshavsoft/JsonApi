const StartFunc = ({ inHtmlCard }) => {
    let jVarLocalDataset = inHtmlCard.dataset;

    if (Object.keys(jVarLocalDataset).length > 0) {
        let jVarLocalJsonConfig = JSON.parse(jVarLocalDataset.jsonconfig);
        let jVarLocalItemConfig = JSON.parse(jVarLocalDataset.itemconfig);

        let jVarLocalReturnData = {
            FolderName: jVarLocalJsonConfig.inFolderName,
            FileName: jVarLocalJsonConfig.inJsonFileName,
            ItemName: jVarLocalItemConfig.inItemName,
            ScreenName: jVarLocalItemConfig.inScreenName,
            InsertKey: jVarLocalDataset.insertkey,
            MainRowPK: jVarLocalDataset.pk
        };

        return jVarLocalReturnData;
    };
};


// let jVarLocalJsonConfig = JSON.parse(jVarLocalCardDataset.jsonconfig);
// let jVarLocalItemConfig = JSON.parse(jVarLocalCardDataset.itemconfig);


export { StartFunc }