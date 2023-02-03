class jVarGlobalApiFuncsClass {
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
        PreLoad: {
            Masters: {
                FillDataFromServer: () => {
                    this.ApiFuncs.PreLoad.Masters.CommonFuncs.ShowToastFuncs.ForDataList();

                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/Masters/PreLoad/ShowData`;

                    fetch(jVarLocalFetchUrl).then(response => {
                        if (!response.ok) { throw new Error(response.statusText) };

                        return response.json();
                    }).then((FetchData) => {
                        if (FetchData.KTF) {
                            let jVarLocalDataListArray = FetchData.DataFromServer.filter(element => "DatalistID" in element);
                            let jVarLocalLocalStorageArray = FetchData.DataFromServer.filter(element => "LocalStorageKey" in element);

                            jVarGlobalApiFuncs.ApiFuncs.PreLoad.Masters.CommonFuncs.InsertToDataList({ inData: jVarLocalDataListArray });
                            jVarGlobalApiFuncs.ApiFuncs.PreLoad.Masters.CommonFuncs.InsertToLocalStorage({ inData: jVarLocalLocalStorageArray });
                        };
                    }).catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    });
                },
                CommonFuncs: {
                    ShowToastFuncs: {
                        ForDataList: () => {
                            let jVarLocalDatalistID = document.getElementById("DataListsID");
                            let jVarLocalToastBodyForDataList = document.getElementById("ToastBodyForDataList");

                            if (jVarLocalToastBodyForDataList !== null) {
                                jVarLocalToastBodyForDataList.innerHTML = `${jVarLocalDatalistID.querySelectorAll("datalist").length}`;
                            };
                        }
                    },
                    InsertToDataList: ({ inData }) => {
                        let LocalDataListsID = document.getElementById("DataListsID");
                        let LocalDataList;
                        let LocalDataListOption;

                        inData.forEach(LoopItem => {
                            LocalDataList = LocalDataListsID.querySelector(`#${LoopItem.DatalistID}`);
                            if (LocalDataList === null) {
                                LocalDataList = document.createElement("datalist");
                                LocalDataList.setAttribute("id", LoopItem.DatalistID);

                                LocalDataListsID.appendChild(LocalDataList);
                            };

                            LoopItem.Data.forEach(LoopItemSub => {
                                LocalDataListOption = document.createElement("option");
                                LocalDataListOption.setAttribute("value", LoopItemSub[0]);

                                if (LoopItemSub.length > 1) {
                                    LocalDataListOption.innerHTML = LoopItemSub[1];
                                }

                                LocalDataList.appendChild(LocalDataListOption);
                            });

                        });
                    },
                    InsertToLocalStorage: ({ inData }) => {
                        inData.forEach(LoopItem => {
                            localStorage.setItem(LoopItem.LocalStorageKey, JSON.stringify(LoopItem.Data));
                        });
                    }
                }
            }
        }
    };
};

let jVarGlobalApiFuncs = new jVarGlobalApiFuncsClass({});