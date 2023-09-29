const StartFunc = ({ inHtmlCard }) => {
    let jVarLocalReturnData = {};
    let jVarLocalDataset = inHtmlCard.dataset;

    if (Object.keys(inHtmlCard.dataset).length > 0) {
        if (jVarLocalDataset.hasOwnProperty("pk")) {
            jVarLocalReturnData.pk = jVarLocalDataset.pk;
        };

        if (jVarLocalDataset.hasOwnProperty("insertkey")) {
            jVarLocalReturnData.InsertKey = jVarLocalDataset.insertkey;
        };

        jVarLocalReturnData.JsonConfig = JSON.parse(inHtmlCard.dataset.jsonconfig);
        jVarLocalReturnData.ItemConfig = JSON.parse(inHtmlCard.dataset.itemconfig);
    };

    return jVarLocalReturnData;
};


// let jVarLocalJsonConfig = JSON.parse(jVarLocalCardDataset.jsonconfig);
// let jVarLocalItemConfig = JSON.parse(jVarLocalCardDataset.itemconfig);

// let jVarLocalReturnData = {
//     FolderName: jVarLocalJsonConfig.inFolderName,
//     FileName: jVarLocalJsonConfig.inJsonFileName,
//     ItemName: jVarLocalItemConfig.inItemName,
//     ScreenName: jVarLocalItemConfig.inScreenName,
//     InsertKey: jVarLocalCardDataset.insertkey,
//     MainRowPK: jVarLocalCardDataset.pk
// };

// return jVarLocalReturnData;

export { StartFunc }