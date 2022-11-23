class jVarGlobalMenuFuncsClass {
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

    DataListFuncs = {
        SingleValueEmptyBefore: ({ inDataList, inData }) => {
            let jVarLocaldatalistOption;
            inDataList.innerText = "";
            inData.forEach((item, index) => {
                jVarLocaldatalistOption = document.createElement("option");
                jVarLocaldatalistOption.setAttribute("value", item);
                inDataList.appendChild(jVarLocaldatalistOption);
            });

        },
        SingleValue: ({ inDataList, inData }) => {
            if (inDataList !== null) {
                let jVarLocaldatalistOption;

                if (Array.isArray(inData)) {
                    inData.forEach((item, index) => {
                        jVarLocaldatalistOption = document.createElement("option");
                        jVarLocaldatalistOption.setAttribute("value", item);
                        inDataList.appendChild(jVarLocaldatalistOption);
                    });

                } else {
                    // console.log("input is not an Array");
                };
            };
        },
        SearchFuncs: {
            SingleValue: ({ inDataList, inSearchValue }) => {
                let i = 0;

                for (i = 0; i < inDataList.options.length; i++) {
                    if (inDataList.options[i].value === inSearchValue) {
                        return true;
                    };
                };

                return false;
            },
            CheckInDataList: ({ inHtmlControl }) => {
                let jVarLocalHtmlControl = inHtmlControl;
                let jVarRetTf = false;

                if (jVarLocalHtmlControl.value === "") {
                    jVarLocalHtmlControl.classList.add("is-invalid");
                    jVarLocalHtmlControl.focus();
                } else {
                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: jVarLocalHtmlControl.list, inSearchValue: jVarLocalHtmlControl.value })) {
                        jVarLocalHtmlControl.classList.remove("is-invalid");
                        jVarLocalHtmlControl.classList.add("is-valid");
                        jVarRetTf = true;
                    } else {
                        jVarLocalHtmlControl.classList.add("is-invalid");
                        jVarLocalHtmlControl.focus();
                    }
                };

                return jVarRetTf;
            }
        }
    };

    ApiFuncs = {
        PullDataFuncs: {
            Folder: {
                AsArray: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                    //let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/GetDirs/AsArray`;
                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/GetDirs/AsArray`;

                    let jVarLocalFetchHeaders = {
                        method: "get",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    };

                    fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders)
                        .then(response => {
                            if (response.status === 403) {
                                let jVarLocalModalId = this.Config.Ht.HtmlIds.Modals.LoginModalId;
                                let jVarLocalLoginFormPopUpId = document.getElementById(jVarLocalModalId);

                                if (jVarLocalLoginFormPopUpId !== null) {
                                    var myModal = new bootstrap.Modal(jVarLocalLoginFormPopUpId, { keyboard: false, focus: true });
                                    myModal.show();
                                };
                                return null;
                            };

                            switch (response.headers.get("content-type")) {
                                case "text/html":
                                    return response.text();
                                    break;
                                case "application/json":
                                    return response.json();
                                    break;
                                default:
                                    return response.json();
                                    break;
                            };

                            //return response.json();
                        })
                        .then(dataFromApi => {
                            if (dataFromApi !== null) {
                                this.DataListFuncs.SingleValue({ inDataList: document.getElementById("FolderList"), inData: dataFromApi });
                                //document.getElementById("FolderSelected").focus();
                                document.querySelector("input").focus();
                            };
                        });
                },
                Files: {
                    AsArray: () => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                        let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                        let jVarLocalFilesHtmlControl = document.getElementById("FileSelected");
                        //let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Files/Show/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}`;
                        //    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/GetFiles/AsArray`;
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/GetFilesAsTree/WithItemAndScreenCount`;

                        //FromFile/GetFilesAsTree / WithItemAndScreenCount

                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                            fetch(jVarLocalFetchUrl, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ inFolderName: jVarLocalFolderHtmlControl.value })
                            }).then(response => {
                                if (response.status === 403) {
                                    let jVarLocalModalId = this.Config.Ht.HtmlIds.Modals.LoginModalId;
                                    let jVarLocalLoginFormPopUpId = document.getElementById(jVarLocalModalId);

                                    if (jVarLocalLoginFormPopUpId !== null) {
                                        var myModal = new bootstrap.Modal(jVarLocalLoginFormPopUpId, { keyboard: false, focus: true });
                                        myModal.show();
                                    };
                                    return null;
                                };

                                return response.json();

                            }).then(dataFromApi => {
                                if (dataFromApi !== null) {
                                    jVarLocalFilesHtmlControl.innerText = "";

                                    this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalFilesHtmlControl.list, inData: dataFromApi });
                                    if (jVarLocalFilesHtmlControl.list.options.length === 1) {
                                        jVarLocalFilesHtmlControl.value = jVarLocalFilesHtmlControl.list.options[0].value
                                        this.DataApi.Items.ForDataList();
                                    } else {
                                        document.getElementById("FileSelected").focus();
                                    }
                                };
                            });
                        };
                    },
                    FormDisplayForFile: {
                        FillScreensAndItems: {
                            AsArray: () => {

                                let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                                let jVarLocalFileHtmlControl = document.getElementById("FileSelected");

                                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                                        this.ApiFuncs.PullDataFuncs.Folder.Files.FormDisplayForFile.FillScreensAndItems.CommonFuncs.PromiseFunc({
                                            inFolderName: jVarLocalFolderHtmlControl.value,
                                            inJsonFileName: jVarLocalFileHtmlControl.value
                                        });
                                    };
                                };
                            },
                            CommonFuncs: {
                                PromiseFunc: ({ inFolderName, inJsonFileName }) => {
                                    let jVarLocalRoute = this.Config.RouteStart.Start;
                                    let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                                    let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");
                                    let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");

                                    let jVarLocalUrl1 = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensDisplayForFile/GetData/AsArray?inFolderName=${inFolderName}&inJsonFileName=${inJsonFileName}`;
                                    let jVarLocalUrl2 = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ItemsDisplayForFile/GetData/AsArray?inFolderName=${inFolderName}&inJsonFileName=${inJsonFileName}`;
                                    console.log("PromiseFunc--------------");
                                    let jVarLocalFetch1 = fetch(jVarLocalUrl1, {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({ inFolderName, inJsonFileName })
                                    });

                                    let jVarLocalFetch2 = fetch(jVarLocalUrl2, {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({ inFolderName, inJsonFileName })
                                    });

                                    Promise.all([jVarLocalFetch1, jVarLocalFetch2])
                                        .then(responses => responses)
                                        // map array of responses into an array of response.json() to read their content
                                        .then(responses => Promise.all(responses.map(r => r.json())))
                                        // all JSON answers are parsed: "users" is the array of them
                                        .then(responseJson => responseJson.forEach((LoopItem, LoopIndex) => {
                                            console.log(LoopIndex, "------ : ", LoopItem);
                                            switch (LoopIndex) {
                                                case 0:
                                                    if (Array.isArray(LoopItem)) {
                                                        jVarLocalScreenHtmlControl.value = "";

                                                        jVarGlobalClientObject.DataListFuncs.SingleValueEmptyBefore({
                                                            inDataList: jVarLocalScreenHtmlControl.list,
                                                            inData: LoopItem
                                                        });

                                                        if (jVarLocalScreenHtmlControl.list.options.length === 1) {
                                                            jVarLocalScreenHtmlControl.focus();
                                                        };
                                                    };
                                                    break;
                                                case 1:
                                                    if (Array.isArray(LoopItem)) {
                                                        jVarLocalItemHtmlControl.value = "";

                                                        jVarGlobalClientObject.DataListFuncs.SingleValueEmptyBefore({
                                                            inDataList: jVarLocalItemHtmlControl.list,
                                                            inData: LoopItem
                                                        });

                                                        if (jVarLocalItemHtmlControl.list.options.length === 1) {
                                                            jVarLocalItemHtmlControl.focus();
                                                        };
                                                    };
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }));
                                }
                            }
                        }
                    },
                    Items: {
                        AsArray: () => {
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                            let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                            let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                            let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");

                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                                    //let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Items/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}`;
                                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/Items/GetData/AsArray?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}`;
                                    //console.log("llllllllllllll");
                                    fetch(jVarLocalFetchUrl, {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({ inFolderName: jVarLocalFolderHtmlControl.value })
                                    }).then(response => response.json())
                                        .then(dataFromApi => {
                                            if (Array.isArray(dataFromApi)) {
                                                jVarLocalItemHtmlControl.value = "";

                                                this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalItemHtmlControl.list, inData: dataFromApi });

                                                if (jVarLocalItemHtmlControl.list.options.length === 1) {
                                                    jVarLocalItemHtmlControl.value = jVarLocalItemHtmlControl.list.options[0].value;
                                                    jVarGlobalKeshavSoftLocalFuncsObject.ApiFuncs.PullDataFuncs.Folder.Files.Items.Screens.AsArray()
                                                } else {
                                                    jVarLocalItemHtmlControl.focus();
                                                };
                                            };
                                        });
                                };
                            };
                        },
                        Screens: {
                            AsArray: () => {
                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                                let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                                let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                                let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");

                                let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");
                                let jVarLocalColumnHtmlControl = document.getElementById("ColumnSelected");

                                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                                            //                                                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Screens/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}`;
                                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/Items/Screens/GetData/AsArray?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}`;

                                            fetch(jVarLocalFetchUrl)
                                                .then(response => response.json())
                                                .then(dataFromApi => {
                                                    if (Array.isArray(dataFromApi)) {
                                                        jVarLocalScreenHtmlControl.value = "";

                                                        this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalScreenHtmlControl.list, inData: dataFromApi });

                                                        jVarLocalScreenHtmlControl.focus();

                                                        if (jVarLocalScreenHtmlControl.list.options.length === 1) {
                                                            jVarLocalScreenHtmlControl.value = jVarLocalScreenHtmlControl.list.options[0].value;

                                                            if (jVarLocalColumnHtmlControl !== null) { this.DataApi.Columns.ForDataList() };
                                                        };
                                                    };
                                                });
                                        };
                                    };
                                };
                            }
                        }
                    }
                }
            }
        }
    };
};

let jVarGlobalMenuFuncs = new jVarGlobalMenuFuncsClass({});



