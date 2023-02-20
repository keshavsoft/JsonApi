let StartFunc = ({ inProjectName, inSubRoute }) => {

    let jvarLocalVerticalFooterButtons = document.querySelectorAll(".KeshavSoftButtonClickClass");
    let jvarLocalVerticalFooterUpdateButton = document.querySelectorAll(".KeshavSoftUpdateButtonClickClass");

    //MainTable Body Row Options Print
    jvarLocalVerticalFooterButtons.forEach((spanElement) => {
        spanElement.addEventListener("click", LocalButtonClickFunc);
    });
    jvarLocalVerticalFooterUpdateButton.forEach((spanElement) => {
        spanElement.addEventListener("click", async (event) => {
            let jVarLocalCurrentTarget = event.currentTarget;

            await LocalUpdateFunc({
                inCurrentTarget: jVarLocalCurrentTarget,
                inProjectName, inSubRoute
            });
        });
    });
};

let LocalButtonClickFunc = async (inEvent) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarClosestRow = jVarLocalCurrentTarget.closest(".row");

    jVarLocalCurrentTarget.classList.add("visually-hidden");

    let jvarLocalUpdateButton = jVarClosestRow.querySelector(".UpdateButtonColumn");

    jvarLocalUpdateButton.classList.remove("visually-hidden");

    let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".card");
    let jVarLocalFieldset = jVarLocalHtmlCard.querySelector("fieldset");

    jVarLocalFieldset.removeAttribute("disabled");
};

let jVarJsonConfigFunc = ({ inHtmlCard }) => {
    let jVarLocalReturnData = {};
    let jVarLocalDataset = inHtmlCard.dataset;

    if (Object.keys(inHtmlCard.dataset).length > 0) {
        if (jVarLocalDataset.hasOwnProperty("pk")) {
            jVarLocalReturnData.pk = jVarLocalDataset.pk;
        };

        if (jVarLocalDataset.hasOwnProperty("insertkey")) {
            jVarLocalReturnData.insertkey = jVarLocalDataset.insertkey;
        };

        jVarLocalReturnData.JsonConfig = JSON.parse(inHtmlCard.dataset.jsonconfig);
        jVarLocalReturnData.ItemConfig = JSON.parse(inHtmlCard.dataset.itemconfig);
    };

    return jVarLocalReturnData;
};

let LocalUpdateFunc = async ({ inCurrentTarget, inProjectName, inSubRoute }) => {
    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;

    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalKCont1 = document.getElementById("KCont1");

    //let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".KTableDivClass");
    let jVarClosestKTableDivClass = jVarLocalCurrentTarget.closest(".KTableDivClass");

    let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest("[kverticalforshow]");
    let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".KCardBody");

    if (LocalCheckBeforeSave(jVarLocalHtmlCardBody)) {
        let jVarLocalFetchPostData = LocalForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });
        // console.log("ssssssssss : ", jVarLocalHtmlCard);
        let jVarLocalJsonConfigAndItemConfig = jVarJsonConfigFunc({ inHtmlCard: jVarLocalHtmlCard });

        jVarLocalJsonConfigAndItemConfig.inDataToUpdate = jVarLocalFetchPostData;

        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Update`;
        let jVarLocalFetchHeaders = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jVarLocalJsonConfigAndItemConfig)
        };

        let ReponseData = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        let PromiseData = await ReponseData.json();

        if (PromiseData.KTF) {
            if ("DataFromServer" in PromiseData) {
                jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(PromiseData.DataFromServer);
                jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
                    inData: jVarGlobalPresentViewData,
                    inHtmlParent: jVarLocalKCont1
                });
            } else {
                jVarLocalHtmlCard.classList.remove("border-success");
                jVarLocalHtmlCard.classList.add("border-danger");

                let jVarLocalShowFailure = jVarLocalHtmlCard.querySelector(".WarningAlertColumn");
                jVarLocalShowFailure.classList.remove("visually-hidden");

                if ("KReason" in PromiseData) {
                    jVarLocalShowFailure.querySelector("p").innerHTML = PromiseData.KReason;
                };
            };
        };
    };
};

let LocalCheckBeforeSave = (jVarHtmlCardBody) => {
    let jVarLocalRetTf = true;

    let jVarLocalDataSetObject;
    let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
        if (LoopItem.dataset.hasOwnProperty("keshavsoft")) {
            jVarLocalDataSetObject = JSON.parse(LoopItem.dataset.keshavsoft);
            if (jVarLocalDataSetObject.Validate) {
                if (LoopItem.classList.contains("is-invalid")) {
                    LoopItem.classList.remove("is-invalid");
                };

                switch (jVarLocalDataSetObject.Type) {
                    case "NotEmpty":
                        if (LoopItem.value === "") {
                            LoopItem.classList.add("is-invalid");
                            LoopItem.focus();
                            jVarLocalRetTf = false;
                        };

                        break;

                    default:
                        break;
                }
            };
        }
    });

    return jVarLocalRetTf;

};

let LoacalCollectionContains = ({ collection, searchText }) => {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].value.indexOf(searchText) > -1) {
            return collection[i].text;
        }
    }
    return "";
};

let localForTagInput = ({ inLoopItem }) => {
    let jVarLocalValue = inLoopItem.value;
    let jVarLocalKeshavSoftStuffed;

    if (inLoopItem.dataset.hasOwnProperty("keshavsoft")) {
        jVarLocalKeshavSoftStuffed = JSON.parse(inLoopItem.dataset.keshavsoft);

        if (inLoopItem.list !== null) {
            if (jVarLocalKeshavSoftStuffed.DataListReverse) {
                jVarLocalValue = LoacalCollectionContains({ collection: inLoopItem.list.options, searchText: inLoopItem.value });
            };
        };

    };
    return jVarLocalValue;
};

let LocalForSave = ({ jVarHtmlCardBody }) => {
    let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

    let jVarLocalFetchBodydata = {};

    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;

        switch (LoopItem.tagName) {
            case "INPUT":
                jVarLocalFetchBodydata[LoopItem.name] = localForTagInput({ inLoopItem: LoopItem });

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

export { StartFunc };