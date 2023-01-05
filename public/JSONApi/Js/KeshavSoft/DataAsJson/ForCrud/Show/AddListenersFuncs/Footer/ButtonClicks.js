// KVerticalFooterSaveButtonClass

let StartFunc = async ({ inProjectName, inSubRoute }) => {
    let jVarLocalFind = document.querySelectorAll(".KVerticalFooterSaveButtonClass");
    //MainTable Body Row Options Print
    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", async (inEvent) => {
            Vertical.SaveFuncs.StartFunc({ inEvent, inProjectName, inSubRoute });
        });
    });
};

let VerticalCommonFuncsClass = class {
    PullCardDataAttributes = {
        JsonConfigAndItemConfig: ({ inHtmlCard }) => {
            let jVarLocalReturnData = {};
            let jVarLocalDataset = inHtmlCard.dataset;

            if (jVarLocalDataset.hasOwnProperty("pk")) {
                jVarLocalReturnData.pk = jVarLocalDataset.pk;
            };

            if (jVarLocalDataset.hasOwnProperty("insertkey")) {
                jVarLocalReturnData.insertkey = jVarLocalDataset.insertkey;
            };

            jVarLocalReturnData.JsonConfig = JSON.parse(inHtmlCard.dataset.jsonconfig);
            jVarLocalReturnData.ItemConfig = JSON.parse(inHtmlCard.dataset.itemconfig);

            return jVarLocalReturnData;
        }
    }

    PreparePostData = {
        ForSave: ({ jVarHtmlCardBody }) => {
            let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

            let jVarLocalFetchBodydata = {};

            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;

                switch (LoopItem.tagName) {
                    case "INPUT":
                        jVarLocalFetchBodydata[LoopItem.name] = this.PreparePostData.CommonFuncs.ByTagName.ForTagInput({ inLoopItem: LoopItem });

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
        },
        CommonFuncs: {
            ByTagName: {
                ForTagInput: ({ inLoopItem }) => {
                    let jVarLocalValue = inLoopItem.value;
                    let jVarLocalKeshavSoftStuffed;

                    if (inLoopItem.dataset.hasOwnProperty("keshavsoft")) {
                        jVarLocalKeshavSoftStuffed = JSON.parse(inLoopItem.dataset.keshavsoft);

                        if (inLoopItem.list !== null) {
                            if (jVarLocalKeshavSoftStuffed.DataListReverse) {
                                jVarLocalValue = this.PreparePostData.CommonFuncs.ByTagName.collectionContains({ collection: inLoopItem.list.options, searchText: inLoopItem.value });
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
            }
        }
    }
};

let VerticalCommonFuncs = new VerticalCommonFuncsClass();


let Vertical = {
    SaveFuncs: {
        StartFunc: ({ inEvent, inProjectName, inSubRoute }) => {
            let jVarLocalCurrentTarget = inEvent.currentTarget;
            let jVarLocalKCont1 = document.getElementById("KCont1");

            let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".KTableDivClass");
            let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".KCardBody");
            let jVarClosestKTableDivClass = jVarLocalCurrentTarget.closest(".KTableDivClass");
            let jVarLocalKCardBody = jVarClosestKTableDivClass.querySelector(".KCardBody");

            if (Vertical.SaveFuncs.CommonFuncs.CheckBeforeSave(jVarLocalHtmlCardBody)) {
                let jVarLocalFetchPostData = VerticalCommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

                Vertical.SaveFuncs.CommonFuncs.SaveOnlyFetch({
                    inHtmlCard: jVarLocalHtmlCard,
                    inCardBodyForItems: jVarLocalKCardBody,
                    inFetchPostData: jVarLocalFetchPostData,
                    inKCont1: jVarLocalKCont1,
                    inProjectName, inSubRoute
                }).then(PromiseData => {
                });
            };
        },
        CommonFuncs: {
            CheckBeforeSave: (jVarHtmlCardBody) => {
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

            },
            PullIpAddressThenSaveOnly: ({ inHtmlCard, inFetchPostData, inCardBodyForItems, inKCont1 }) => {
                return new Promise((resolve, reject) => {
                    fetch(this.Config.ClientSide.UrlForIp).then(response => response.text()).then((FetchIpData) => {
                        inFetchPostData.ClientIP = JSON.parse(FetchIpData).origin;

                        this.ApiFuncs.Table.Vertical.SaveFuncs.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData, inCardBodyForItems, inKCont1 }).then((PromiseData) => {
                            resolve(PromiseData);
                        }).catch((PromiseError) => {
                            resolve(PromiseError);
                        });
                    }).catch((FetchIpError) => {
                        this.ApiFuncs.Table.Vertical.SaveFuncs.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData, inCardBodyForItems, inKCont1 }).then((PromiseData) => {
                            resolve(PromiseData);
                        }).catch((PromiseError) => {
                            resolve(PromiseError);
                        });
                    });
                });
            },
            SaveOnlyFetch: ({ inHtmlCard, inFetchPostData, inCardBodyForItems, inKCont1, inProjectName, inSubRoute }) => {
                return new Promise((resolve, reject) => {
                    let jVarLocalRoute = inProjectName;
                    let jVarLocalSubRoute = inSubRoute;
                    let jVarLocalJsonConfigAndItemConfig = Vertical.CommonFuncs.PullCardDataAttributes.JsonConfigAndItemConfig({ inHtmlCard });

                    jVarLocalJsonConfigAndItemConfig.inDataToSave = inFetchPostData;

                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save`;

                    fetch(jVarLocalFetchUrl, {
                        method: "post",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(jVarLocalJsonConfigAndItemConfig)
                    }).then(response => response.json())
                        .then(dataFromApi => {
                            if (dataFromApi.KTF === false) {
                                inHtmlCard.classList.remove("border-success");
                                inHtmlCard.classList.add("border-danger");
                                let jVarLocalShowFailure = inHtmlCard.querySelector("#ShowFailure");
                                jVarLocalShowFailure.classList.remove("visually-hidden");
                            } else {
                                let jVarLocalKSHtmlFindRow = document.getElementById("KSHtmlFindRow");
                                if (jVarLocalKSHtmlFindRow !== null) {
                                    jVarLocalKSHtmlFindRow.dataset.pk = dataFromApi.kPK;
                                };
                                if (Vertical.SaveFuncs.CommonFuncs.PostSave({ inDataFromSave: dataFromApi, inCardBodyForItems, inHtmlCard, inKCont1 })) {
                                    resolve(dataFromApi);
                                };
                            };
                        });
                });
            },
            PostSave: ({ inDataFromSave, inCardBodyForItems, inHtmlCard, inKCont1 }) => {
                if (inDataFromSave.KTF) {
                    if (inDataFromSave.hasOwnProperty("DataFromServer")) {
                        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(inDataFromSave.DataFromServer);

                        // let jVarLocalUUID = ForLocalStorageClass.jFInsertToLocalStorage({ inData: jVarGlobalPresentViewData });

                        // if (jVarLocalUUID in localStorage) {
                        //     jVarGlobalPresentViewData = JSON.parse(localStorage.getItem(jVarLocalUUID));
                        // };

                        jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
                            inData: jVarGlobalPresentViewData,
                            inHtmlParent: inKCont1
                        });
                    } else {
                        let jVarLocalShowFailure = inHtmlCard.querySelector(".WarningAlertColumn");
                        jVarLocalShowFailure.classList.remove("visually-hidden");

                        if ("KReason" in inDataFromSave) {
                            jVarLocalShowFailure.querySelector("p").innerHTML = inDataFromSave.KReason;
                        };
                    };
                };
            }
        }
    },
    CommonFuncs: {
        PullCardDataAttributes: {
            JsonConfigAndItemConfig: ({ inHtmlCard }) => {
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
            }
        }
    },
    Footer: {
        Update: {
            StartFunc: async ({ inEvent }) => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                let jVarLocalCurrentTarget = inEvent.currentTarget;
                let jVarLocalKCont1 = document.getElementById("KCont1");

                let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".KTableDivClass");
                let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".KCardBody");
                let jVarClosestKTableDivClass = jVarLocalCurrentTarget.closest(".KTableDivClass");
                let jVarLocalKCardBody = jVarClosestKTableDivClass.querySelector(".KCardBody");

                if (this.ApiFuncs.Table.Vertical.SaveFuncs.CommonFuncs.CheckBeforeSave(jVarLocalHtmlCardBody)) {
                    let jVarLocalFetchPostData = this.VerticalCommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

                    let jVarLocalJsonConfigAndItemConfig = this.ApiFuncs.Table.Vertical.CommonFuncs.PullCardDataAttributes.JsonConfigAndItemConfig({ inHtmlCard: jVarLocalHtmlCard });

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
            }
        }
    }
};

export { StartFunc }