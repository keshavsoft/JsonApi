let ByTagName = {
    ForTagInput: ({ inLoopItem }) => {
        let jVarLocalValue = inLoopItem.value;
        let jVarLocalKeshavSoftStuffed;

        if (inLoopItem.dataset.hasOwnProperty("keshavsoft")) {
            jVarLocalKeshavSoftStuffed = JSON.parse(inLoopItem.dataset.keshavsoft);

            if (inLoopItem.list !== null) {
                if (jVarLocalKeshavSoftStuffed.DataListReverse) {
                    jVarLocalValue = ByTagName.collectionContains({ collection: inLoopItem.list.options, searchText: inLoopItem.value });
                };
            };

        };
        return jVarLocalValue;
    },
    collectionContains: ({ collection, searchText }) => {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i].value.indexOf(searchText) > -1) {
                return collection[i].text;
            }
        }
        return "";
    }
};

let StartFunc = async ({ inProjectName, inSubRoute }) => {
    let jVarLocalKeshavSoftEnterToServer = document.querySelectorAll(".KeshavSoftEnterToServer");
    //MainTable Body Row Options Print
    jVarLocalKeshavSoftEnterToServer.forEach((spanElement) => {
        spanElement.addEventListener("keypress", () => {
            jFLocalEnterToServer({ inEvent: event, inProjectName, inSubRoute });
        });
    });
};

let jFLocalCollectionContains = ({ collection, searchText }) => {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].value === searchText) {
            return collection[i].text;
        }
    }
    return "";
};

let jFLOcalPrepareDataToSearchObject = ({ inCurrentTarget }) => {
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

let jFLocalEnterToServer = async ({ inEvent, inProjectName, inSubRoute }) => {
    if (inEvent.keyCode === 13) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarLocalRoute = inProjectName;
        let jVarLocalSubRoute = inSubRoute;

        let jVarLocalCurrentName = jVarLocalCurrentTarget.name;

        let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".card");
        let jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");

        let LocalDataFromServer;

        let jVarLocalJsonConfig = jVarLocalHtmlCard.dataset.jsonconfig;
        let jVarLocalItemConfig = jVarLocalHtmlCard.dataset.itemconfig;
        let jVarLocalInsertKey = jVarLocalHtmlCard.dataset.insertkey;

        let LocalObjectToPost = {};

        LocalObjectToPost.DataToSearch = {};

        LocalObjectToPost.DataToSearch[jVarLocalCurrentTarget.name] = jFLOcalPrepareDataToSearchObject({ inCurrentTarget: jVarLocalCurrentTarget });

        LocalObjectToPost.JsonConfig = JSON.parse(jVarLocalJsonConfig);
        LocalObjectToPost.ItemConfig = JSON.parse(jVarLocalItemConfig);
        LocalObjectToPost.insertkey = jVarLocalInsertKey;

        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Footer/KeyPress/EnterToServer`;

        let response = await fetch(jVarLocalFetchUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(LocalObjectToPost)
        });

        let FetchData = await response.json();

        if (FetchData.KTF) {
            LocalDataFromServer = FetchData.DataFromServer[0];

            jFLocalAfterFetch({
                inDataFromServer: LocalDataFromServer,
                inClosestTr: jVarLocalClosestTr,
                inCurrentName: jVarLocalCurrentName
            });

        } else {
            Swal.fire(FetchData.KReason);
        }
    }
};

let jFLocalAfterFetch = ({ inDataFromServer, inClosestTr, inCurrentName }) => {
    let jVarLocalVerticalInputElements = inClosestTr.querySelectorAll("[data-dataattribute]");
    
    jVarLocalVerticalInputElements.forEach((LoopItem) => {
        if (LoopItem.name.replace(inCurrentName, "") in inDataFromServer) {
            LoopItem.value = inDataFromServer[LoopItem.name.replace(inCurrentName, "")];
        };
    });
};

export { StartFunc }