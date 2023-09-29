const StartFunc = ({ inEvent }) => {
        let jVarLocalCurrentTarget = inEvent.currentTarget;

        let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".card");

        let jVarLocalJsonConfig = jVarLocalHtmlCard.dataset.jsonconfig;
        let jVarLocalItemConfig = jVarLocalHtmlCard.dataset.itemconfig;
        let jVarLocalInsertKey = "";

        let LocalObjectToPost = {};

        LocalObjectToPost.DataToSearch = {};

        LocalObjectToPost.DataToSearch[jVarLocalCurrentTarget.name] = jFLocalPrepareDataToSearchObject({ inCurrentTarget: jVarLocalCurrentTarget });

        LocalObjectToPost.JsonConfig = JSON.parse(jVarLocalJsonConfig);
        LocalObjectToPost.ItemConfig = JSON.parse(jVarLocalItemConfig);
        LocalObjectToPost.insertkey = jVarLocalInsertKey;
        
        return LocalObjectToPost;

};

let jFLocalPrepareDataToSearchObject = ({ inCurrentTarget }) => {
    let jVarLocalDataSet = JSON.parse(inCurrentTarget.dataset.keshavsoft);
    let jVarLocalDataListValue = inCurrentTarget.value;

    if (jVarLocalDataSet.DataListReverse) {
        jVarLocalDataListValue = jFLocalCollectionContains({
            collection: inCurrentTarget.list.options,
            searchText: inCurrentTarget.value
        });
    };

    return jVarLocalDataListValue;
};

let jFLocalCollectionContains = ({ collection, searchText }) => {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].value === searchText) {
            return collection[i].text;
        }
    }
    return "";
};

export { StartFunc };