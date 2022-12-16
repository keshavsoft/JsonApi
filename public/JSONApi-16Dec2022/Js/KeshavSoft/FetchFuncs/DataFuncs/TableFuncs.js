class jVarGlobalTableFuncsClass {
    constructor({ inProjectName }) {
        this.Config = {
            RouteStart: {
                Start: "JSONApi",
                SubRoute: "API",
                HtmlPath: ""
            },
            HtmlValues: {
                HtmlIds: {
                    Modals: {
                        LoginModalId: "exampleModal"
                    }
                }
            }
        };

        if ((inProjectName === undefined) === false) {
            this.Config.RouteStart.Start = inProjectName;
        };
    };

    ApiFuncs = {
        Table: {
            PullForTableShow: (inEvent) => {
                inEvent.preventDefault();
                let jVarLocalcurrentTarget = inEvent.currentTarget;
                jVarGlobalClientObject.CommonFuncs.ShowSpinner.ShowProcessStart(jVarLocalcurrentTarget);

                let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
                let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;

                let jVarLocalItemConfig = jVarGlobalClientObject.Api.UserData.CommonFuncs.PrepareItemConfig();

                let jVarLocalFolderName = jVarLocalItemConfig.FolderName;
                let jVarLocalFileName = jVarLocalItemConfig.FileName;
                let jVarLocalItemName = jVarLocalItemConfig.ItemName;
                let jVarLocalScreenName = jVarLocalItemConfig.ScreenName;

                //let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensDisplayForFile/PullData/WithConfig?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;
                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensDisplayForFile/PullData/WithConfig`;

                fetch(jVarLocalFetchUrl, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        inFolderName: jVarLocalFolderName,
                        inFileName: jVarLocalFileName,
                        inItemName: jVarLocalItemName,
                        inScreenName: jVarLocalScreenName
                    })
                }).then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };
                    return response.json();
                }).then((FetchData) => {
                    if (FetchData.KTF) {
                        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                        jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                        jVarGlobalClientObject.CommonFuncs.ShowSpinner.ShowProcessEnd(jVarLocalcurrentTarget);
                        jVarGlobalClientObject.Api.UserData.Table.Row.CommonFuncs.ForDataList.ReverseFunc();
                    };
                });
            },
            Card: {
                Config: {
                    PullJsonAndItemConfig: async (inJVarKThis) => {
                        let jVarLocalCard = inJVarKThis.closest(".card");
                        let jVarLocalDataset = jVarLocalCard.dataset;
                        let jVarLocalJsonConfig = JSON.parse(jVarLocalDataset.jsonconfig);
                        let jVarLocalItemConfig = JSON.parse(jVarLocalDataset.itemconfig);

                        let jVarLocalScreenName = jVarLocalItemConfig.inScreenName;
                        let jVarLocalItemName = jVarLocalItemConfig.inItemName;
                        let jVarLocalFileName = jVarLocalJsonConfig.inJsonFileName;
                        let jVarLocalFolderName = jVarLocalJsonConfig.inFolderName;

                        return {
                            inFolderName: jVarLocalFolderName,
                            inFileName: jVarLocalFileName,
                            inItemName: jVarLocalItemName,
                            inScreenName: jVarLocalScreenName
                        };
                    }
                },
                Header: {
                    AddButtonClick: async (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalBodyData = await this.ApiFuncs.Table.Card.Config.PullJsonAndItemConfig(jVarLocalCurrentTarget);

                        let response = await fetch(jVarLocalFetchUrl, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalBodyData)
                        });

                        let FetchData = await response.json()

                        if (FetchData.KTF) {
                            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                            jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                            jVarGlobalClientObject.AppendToDOM.CommonFuncs.BuildFromArray.InsertToSelect();
                            return await true;
                        };

                    }
                }
            },
            Body: {
                Row: {
                    ShowClick: ({ inEvent }) => {
                        //    console.log("hai");
                        //  jVarGlobalClientObject.Api.UserData.Table.Row.Show({ inEvent });
                        let jVarLocalcurrentTarget = inEvent.currentTarget;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let JsonPK = inEvent.currentTarget.closest("tr").dataset.pk;
                        let jVarLocalItemConfig = jVarGlobalClientObject.Api.UserData.CommonFuncs.PrepareJsonAndItemConfig({ inCurrentTarget: jVarLocalcurrentTarget });

                        let jVarLocalFolderName = jVarLocalItemConfig.FolderName;
                        let jVarLocalFileName = jVarLocalItemConfig.FileName;
                        let jVarLocalItemName = jVarLocalItemConfig.ItemName;
                        let jVarLocalScreenName = jVarLocalItemConfig.ScreenName;
                        //let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/Row/Show?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&PK=${JsonPK}`;
                        //                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/Row/Show?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&PK=${JsonPK}`;

                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensDisplayForFile/Tabular/Row/Show/FromParams/${jVarLocalFolderName}/${jVarLocalFileName}/${jVarLocalScreenName}/${jVarLocalItemName}/${JsonPK}`;
                        //                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensDisplayForFile/Tabular/Row/Show`;

                        fetch(jVarLocalFetchUrl)
                            .then(response => {
                                if (!response.ok) { throw new Error(response.statusText) };

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                                    jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();

                                    document.getElementById("KSHtmlFindRow").dataset.pk = JsonPK;
                                    jVarGlobalClientObject.Api.UserData.Table.Row.CommonFuncs.ForDataList.ReverseFunc();
                                };
                            });
                    }
                }
            },
            Vertical: {
                SaveFuncs: {
                    StartFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".KTableDivClass");
                        let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".KCardBody");
                        if (this.ApiFuncs.Table.Vertical.SaveFuncs.CommonFuncs.CheckBeforeSave(jVarLocalHtmlCardBody)) {
                            let jVarLocalFetchPostData = this.VerticalCommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

                            this.ApiFuncs.Table.Vertical.CommonFuncs.PullIpAddressThenSaveOnly({ inHtmlCard: jVarLocalHtmlCard, inFetchPostData: jVarLocalFetchPostData }).then(PromiseData => {
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
                        PullIpAddressThenSaveOnly: ({ inHtmlCard, inFetchPostData }) => {
                            console.log("inHtmlCard, inFetchPostData : ", inHtmlCard, inFetchPostData);
                            return new Promise((resolve, reject) => {
                                fetch(this.Config.ClientSide.UrlForIp).then(response => response.text()).then((FetchIpData) => {
                                    inFetchPostData.ClientIP = JSON.parse(FetchIpData).origin;

                                    this.Api.UserData.Vertical.Footer.Save.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData }).then((PromiseData) => {
                                        resolve(PromiseData);
                                    }).catch((PromiseError) => {
                                        resolve(PromiseError);
                                    });
                                }).catch((FetchIpError) => {
                                    this.Api.UserData.Vertical.Footer.Save.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData }).then((PromiseData) => {
                                        resolve(PromiseData);
                                    }).catch((PromiseError) => {
                                        resolve(PromiseError);
                                    });
                                });
                            });
                        },
                        SaveOnlyFetch: ({ inHtmlCard, inFetchPostData }) => {
                            return new Promise((resolve, reject) => {
                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                                let jVarLocalJsonConfigAndItemConfig = this.Api.UserData.Vertical.CommonFuncs.PullCardDataAttributes.JsonConfigAndItemConfig({ inHtmlCard });

                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Vertical/Save/SaveOnly?inJsonConfig=${JSON.stringify(jVarLocalJsonConfigAndItemConfig.JsonConfig)}&inItemConfig=${JSON.stringify(jVarLocalJsonConfigAndItemConfig.ItemConfig)}`;

                                fetch(jVarLocalFetchUrl, {
                                    method: "post",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(inFetchPostData)
                                }).then(response => response.json())
                                    .then(dataFromApi => {

                                        if (dataFromApi.KTF === false) {
                                            this.CommonFuncs.ChangeClasses.ToDanger({ inJVarLocalHtmlCard: inHtmlCard });
                                            let jVarLocalShowFailure = inHtmlCard.querySelector("#ShowFailure");
                                            jVarLocalShowFailure.classList.remove("visually-hidden");
                                        } else {
                                            let jVarLocalKSHtmlFindRow = document.getElementById("KSHtmlFindRow");
                                            if (jVarLocalKSHtmlFindRow !== null) {
                                                jVarLocalKSHtmlFindRow.dataset.pk = dataFromApi.kPK;
                                            };
                                            if (this.Api.UserData.Vertical.Footer.Save.CommonFuncs.PostSave({ inDataFromSave: dataFromApi, inHtmlCard })) {
                                                resolve(dataFromApi);
                                            };
                                        };
                                    });
                            });
                        },
                        PostSave: ({ inDataFromSave, inHtmlCard }) => {
                            if (inDataFromSave.KTF) {
                                if (inDataFromSave.hasOwnProperty("DataFromServer")) {
                                    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(inDataFromSave.DataFromServer);
                                    return jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                                } else {
                                    this.CommonFuncs.ChangeClasses.ToSuccess({ inHtmlCard });
                                };
                            }
                        }
                    },
                    CheckAndSave: async (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        console.log("CheckAndSave=---------------", jVarLocalCurrentTarget);
                        let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
                        let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;
                        let jVarLocalBodyData = await this.ApiFuncs.Table.Card.Config.PullJsonAndItemConfig(jVarLocalCurrentTarget);
                        console.log("jVarLocalBodyData=---------------", jVarLocalBodyData);

                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensDisplayForFile/Vertical/HtmlCreate/Fromjson`;

                        let response = await fetch(jVarLocalFetchUrl, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalBodyData)
                        });

                        let FetchData = await response.json()

                        if (FetchData.KTF) {
                            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                            jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                            jVarGlobalClientObject.AppendToDOM.CommonFuncs.BuildFromArray.InsertToSelect();
                            return await true;
                        };

                    }
                },
                CommonFuncs: {
                    PullCardDataAttributes: {
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
                    },
                    PreparePostData1: {
                        ForSave: ({ jVarHtmlCardBody }) => {
                            let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

                            let jVarLocalFetchBodydata = {};

                            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;

                                switch (LoopItem.tagName) {
                                    case "INPUT":
                                        jVarLocalFetchBodydata[LoopItem.name] = this.ApiFuncs.Table.Vertical.CommonFuncs.PreparePostData.CommonFuncs.ByTagName.ForTagInput({ inLoopItem: LoopItem });
                                        //            let jVarLocalFetchPostData = this.ApiFuncs.Table.Vertical.CommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

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
                                                jVarLocalValue = this.ApiFuncs.Table.Vertical.CommonFuncs.PreparePostData.CommonFuncs.ByTagName.collectionContains({ collection: inLoopItem.list.options, searchText: inLoopItem.value });
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
                }
            }
        }
    };
};

let jVarGlobalTableFuncs = new jVarGlobalTableFuncsClass({});



