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

let LocalForInputsNeeded = ({ jVarHtmlCardBody }) => {
    let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

    let jVarLocalFetchBodydata = {};

    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;

        switch (LoopItem.tagName) {
            case "INPUT":
                jVarLocalFetchBodydata[LoopItem.name] = ByTagName.ForTagInput({ inLoopItem: LoopItem });

                break;

            default:
                switch (LoopItem.type) {
                    case "checkbox":
                        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                        break;
                    default:
                        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                        break;
                };
                break;
        };
    });

    return jVarLocalFetchBodydata;
};

let StartFunc = async ({ inProjectName, inSubRoute }) => {
    let jVarLocalFind = document.querySelectorAll(".KeshavSoftonkeypress");
    //MainTable Body Row Options Print
    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("keypress", LocalKeyPress);
    });

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

        let LocalDataFromServer;

        let jVarLocalJsonConfig = jVarLocalHtmlCard.dataset.jsonconfig;
        let jVarLocalItemConfig = jVarLocalHtmlCard.dataset.itemconfig;
        // let jVarLocalInsertKey = jVarLocalHtmlCard.dataset.insertkey;
        let jVarLocalInsertKey = "";


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
                inHtmlCard: jVarLocalHtmlCard,
                inCurrentName: jVarLocalCurrentName
            });

        } else {
            Swal.fire(FetchData.KReason);
        }
    }
};

let jFLocalAfterFetch = ({ inDataFromServer, inHtmlCard, inCurrentName }) => {
    let jVarLocalVerticalInputElements = inHtmlCard.querySelectorAll("[data-dataattribute]");

    jVarLocalVerticalInputElements.forEach((LoopItem) => {
        if (LoopItem.name.replace(inCurrentName, "") in inDataFromServer) {
            LoopItem.value = inDataFromServer[LoopItem.name.replace(inCurrentName, "")];
        };
    });
};

let LocalKeyPress = async (inEvent) => {
    if (inEvent.keyCode === 13) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarLocalClosestForm = jVarLocalCurrentTarget.closest("tr");

        if ("clienteval" in jVarLocalCurrentTarget.dataset) {
            let jVarLocalClientEval = inEvent.currentTarget.dataset.clienteval;
            let jVarLocalEvalValue = `'${jVarLocalCurrentTarget.value}'.${jVarLocalClientEval}`;
            console.log("jVarLocalClientEval99",jVarLocalClientEval);
            inEvent.currentTarget.value = eval(jVarLocalEvalValue);


        } else {

        };

    };
};

export { StartFunc }