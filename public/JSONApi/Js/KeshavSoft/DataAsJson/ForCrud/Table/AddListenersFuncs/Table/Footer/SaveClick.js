let StartFunc = ({ inRoute, inSubRoute }) => {
    let jVarLocalMainTableFooterCreateNewSaveClass = document.querySelectorAll(".MainTableFooterCreateNewSaveClass");

    for (let i = 0; i < jVarLocalMainTableFooterCreateNewSaveClass.length; i++) {
        jVarLocalMainTableFooterCreateNewSaveClass[i].addEventListener("click", (event) => {
            event.preventDefault();

            let jVarLocalEvent = event;
            LocalButtonClick({ inRoute, inSubRoute, inCurrentTarget: jVarLocalEvent.currentTarget });
        });
    };
};

let LocalButtonClick = ({ inCurrentTarget, inRoute, inSubRoute }) => {
    jFLocal({ inRoute, inSubRoute, inCurrentTarget });
};

let jFLocal = ({ inRoute, inSubRoute, inCurrentTarget }) => {

    let jVarLocalCurrentTarget = inCurrentTarget;
    // let jVarClosestCard = jVarLocalCurrentTarget.closest(".CardForItems");
    // let jVarLocalKCont1 = document.getElementById("KCont1");

    // let jVarLocalRoute = inRoute;
    // let jVarLocalSubRoute = inSubRoute;
    let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".card");
    let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".card-body");

    let jVarLocalTableFooterCreateRow = jVarLocalCurrentTarget.closest("[data-footertype='CreateNewRow']");

    let jVarLocalJsonConfigAndItemConfig = jFLocalJsonConfigAndItemConfig({ inHtmlCard: jVarLocalHtmlCard });

    if (jFLocalCheckBeforeSave({ inJVarTableFooter: jVarLocalTableFooterCreateRow })) {

        let jVarLocalFetchPostData = jFLocalPreparePostData({ jVarHtmlCardBody: jVarLocalHtmlCardBody });
        jVarLocalJsonConfigAndItemConfig.inDataToSave = jVarLocalFetchPostData;

        let jVarLocalFetchUrl = `/${inRoute}/${inSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/Footer/Save`;

        fetch(jVarLocalFetchUrl, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jVarLocalJsonConfigAndItemConfig)
        }).then(response => response.json())
            .then(dataFromApi => {
                if (dataFromApi.KTF) {
                    window.location.href = "";
                } else {
                    Swal.fire(dataFromApi.KReason);
                };

                // if (dataFromApi.KTF === true) {
                //     if (dataFromApi.hasOwnProperty("DataFromServer")) {
                //         let jVarLocalElementToFocus;

                //         jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(dataFromApi.DataFromServer);

                //         jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
                //             inData: jVarGlobalPresentViewData,
                //             inHtmlParent: jVarLocalKCont1
                //         });

                //         jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.SetFocusFuncs.TableFooterSaveFocus({ inHtmlParent: jVarLocalKCont1 });

                //     } else {

                //     };
                // } else {
                //     Swal.fire(dataFromApi.KReason);
                // };


            });

    };
};

const jFLocalJsonConfigAndItemConfig = ({ inHtmlCard }) => {
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

const jFLocalCheckBeforeSave = ({ inJVarTableFooter }) => {
    let jVarLocalRetTf = true;

    let jVarLocalDataSetObject;
    let jVarLocalHtmlNamesArray = inJVarTableFooter.querySelectorAll("[name]");

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

const jFLocalPreparePostData = ({ jVarHtmlCardBody }) => {
    let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

    let jVarLocalFetchBodydata = {};

    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;

        switch (LoopItem.tagName) {
            case "INPUT":
                jVarLocalFetchBodydata[LoopItem.name] = jFLocalForTagInput({ inLoopItem: LoopItem });

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

const jFLocalForTagInput = ({ inLoopItem }) => {
    let jVarLocalValue = inLoopItem.value;
    let jVarLocalKeshavSoftStuffed;

    if (inLoopItem.dataset.hasOwnProperty("keshavsoft")) {
        jVarLocalKeshavSoftStuffed = JSON.parse(inLoopItem.dataset.keshavsoft);

        if (inLoopItem.list !== null) {
            if (jVarLocalKeshavSoftStuffed.DataListReverse) {
                jVarLocalValue = jFLocalcollectionContains({ collection: inLoopItem.list.options, searchText: inLoopItem.value });
            };
        };

    };
    return jVarLocalValue;
};

const jFLocalcollectionContains = ({ collection, searchText }) => {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].value.indexOf(searchText) > -1) {
            return collection[i].text;
        }
    }
    return "";
};

export { StartFunc }