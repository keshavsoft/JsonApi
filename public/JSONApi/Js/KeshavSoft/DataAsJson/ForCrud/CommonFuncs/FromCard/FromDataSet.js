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

export { StartFunc }