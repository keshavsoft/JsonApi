class PrepareClass {
    constructor({ inProjectName }) {
        this.Config = {
            RouteStart: {
                Start: "JSONApi",
                SubRoute: "API",
                HtmlPath: "",
                UserCheckRoute: "JSONUser",
                AdminSubRoute: "AdminApi",
            },
            Modal: {
                Id: "LoginModalId"
            },
            Public: {
                ProjectName: ""
            },
            Customize: {
                ModalPopUp: {
                    Show: true,
                    Type: "SweetAlert"
                }
            },
            ClientSide: {
                UrlForIp_Old: "https://api.ipify.org/",
                UrlForIp: "http://httpbin.org/ip",
            }
        };

        if (inProjectName === undefined) {
            this.Config.Public.ProjectName = this.Config.RouteStart.Start
        } else {
            this.Config.RouteStart.Start = inProjectName;
            this.Config.Public.ProjectName = inProjectName;
        };
    };

    ModalPopUp = {
        StartFunc: ({ inType, inKReason }) => {
            if (this.Config.Customize.ModalPopUp.Show === true) {
                switch (this.Config.Customize.ModalPopUp.Type) {
                    case "SweetAlert":
                        this.ModalPopUp.SweetAlert.StartFunc({ inType, inKReason });
                        break;

                    default:
                        break;
                }
            };
        },
        SweetAlert: {
            StartFunc: ({ inType, inKReason }) => {
                switch (inType) {
                    case "ShowReason":
                        if (typeof Swal !== "undefined") {
                            Swal.fire(inKReason);
                        };

                        break;
                    case "AdminPostUpdate":
                        if (typeof Swal !== "undefined") {
                            Swal.fire({
                                position: "middle",
                                icon: "success",
                                title: "Updated",
                                showConfirmButton: false,
                                timer: 800,
                            });
                        };

                        break;
                    case "PostDelete":
                        if (typeof Swal !== "undefined") {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        };

                        break;
                    case "PostDelete + KReason":
                        if (typeof Swal !== "undefined") {
                            Swal.fire("Deleted with Reason!", inKReason, "success");
                        };

                        break;

                    case "CreateSuccessForFolder":
                        if (typeof Swal !== "undefined") {
                            Swal.fire({
                                position: "middle",
                                icon: "success",
                                title: "Your Folder has been Inserted.",
                                showConfirmButton: false,
                                timer: 800,
                            });
                        }

                        break;
                    case "CreateSuccessForItem":

                        console.log("CreateSuccessForItem");

                        if (typeof Swal !== "undefined") {
                            Swal.fire({
                                position: "middle",
                                icon: "success",
                                title: "Your Item has been Inserted.",
                                showConfirmButton: false,
                                timer: 800,
                            });
                        }

                        break;
                    case "CreateSuccess":
                        if (typeof Swal !== "undefined") {
                            Swal.fire({
                                position: "middle",
                                icon: "success",
                                title: "Your file has been Inserted.",
                                showConfirmButton: false,
                                timer: 800,
                            });
                        }
                    case "CreateSuccessForScreen":
                        if (typeof Swal !== "undefined") {
                            Swal.fire({
                                position: "middle",
                                icon: "success",
                                title: "Your Screen has been Inserted.",
                                showConfirmButton: false,
                                timer: 800,
                            });
                        }

                        break;
                    default:
                        break;
                }
            },
        },
    };

    HTMLPrepare = {
        jFBS4Alerts: {
            AppendtoKCont1: {
                dangerClosable: ({ inJVarDataToDisplay }) => {
                    var template = `<div class="alert alert-danger d-flex align-items-center alert-dismissible" role="alert">                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">                        <use xlink:href="#exclamation-triangle-fill" />                    </svg>                    <div>${inJVarDataToDisplay}</div>                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>                </div>`
                    document.getElementById("KCont1").innerHTML += template;
                }
            },
            ClearAndInsertToKCont1: {
                dangerClosable: ({ inJVarDataToDisplay }) => {
                    var template = Handlebars.compile("<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Sorry! No Data Available!</strong>{{data}}<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                    let LocalDiv = document.createElement("div");
                    document.getElementById("KCont1").innerHTML = template({ data: inJVarDataToDisplay });
                }
            },
            PrimaryClosableRet: ({ inJVarDataToDisplay }) => {
                var template = Handlebars.compile("<div class='alert alert-primary alert-dismissible fade show' role='alert'><strong>The data is - </strong>{{data}}<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                let LocalDiv = document.createElement("div");
                LocalDiv.innerHTML = template({ data: inJVarDataToDisplay });
                return LocalDiv;
            },
            SuccessClosable: ({ inJVarDataToDisplay }) => {
                var template = Handlebars.compile("<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>The deleted row with pk is - </strong>{{data}}<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                let LocalDiv = document.createElement("div");
                LocalDiv.innerHTML = template({ data: inJVarDataToDisplay });
                document.getElementById("KCont1").appendChild(LocalDiv);
            },
            Success: ({ inJVarDataToDisplay }) => {
                var template = Handlebars.compile("<div class='alert alert-success alert-dismissible fade show role='alert'>{{data}}</div>");
                let LocalDiv = document.createElement("div");
                LocalDiv.innerHTML = template({ data: inJVarDataToDisplay });
                document.getElementById("KCont1").appendChild(LocalDiv);
                //return LocalDiv;
            },
            dangerRet: ({ inJVarDataToDisplay }) => {
                var template = Handlebars.compile("<div class='alert alert-danger' role='alert'>{{data}}</div>");
                let LocalDiv = document.createElement("div");
                LocalDiv.innerHTML = template({ data: inJVarDataToDisplay });

                return LocalDiv;
            },
            dangerClosableDelRet: ({ inJVarDataToDisplay }) => {
                var template = Handlebars.compile("<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>The deleted row with pk is - </strong>{{data}}<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                let LocalDiv = document.createElement("div");
                LocalDiv.innerHTML = template({ data: inJVarDataToDisplay });

                return LocalDiv;
            },
            dangerClosableRet: ({ inJVarDataToDisplay }) => {
                var template = Handlebars.compile("<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Sorry! No Data Available!</strong>{{data}}<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                let LocalDiv = document.createElement("div");
                LocalDiv.innerHTML += template({ data: inJVarDataToDisplay });

                return LocalDiv;
            },
            dangerClosableRetForMssql: ({ inJVarDataToDisplay }) => {
                var template = Handlebars.compile("<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong></strong>{{data}}<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                let LocalDiv = document.createElement("div");
                LocalDiv.innerHTML = template({ data: inJVarDataToDisplay });

                return LocalDiv;
            }
        }
    };

    AppendToDOM = {
        BuildFromArrayDataCommonWithOutClear: () => {
            try {
                let jVarLocalHTMLContent;
                let jVarLocalElementsToFocus;
                let jVarLocalKCont1 = document.getElementById("KCont1");

                jVarLocalHTMLContent = Handlebars.compile(document.getElementById("Global/Common").innerText)(jVarGlobalPresentViewData);

                jVarLocalKCont1.insertAdjacentHTML('beforeend', jVarLocalHTMLContent);


                jVarLocalElementsToFocus = jVarLocalKCont1.querySelectorAll("input[data-dataattribute]");
                if (jVarLocalElementsToFocus.length > 0) {
                    jVarLocalElementsToFocus[0].focus();
                }
            } catch (error) {
                console.log("BuildFromArrayDataCommonWithOutClear error : ", error);
            };
        },
        SetFocusWithGlobalPresentViewData: () => {
            let jVarLocalElementsToFocus;
            let jVarLocalKCont1 = document.getElementById("KCont1");
            let shouldSkip = false;
            jVarGlobalPresentViewData.forEach(element => {
                if (shouldSkip) {
                    return;
                }

                if (element.HTMLControlType === "Vertical") {
                    shouldSkip = this.AppendToDOM.SetFocusCommonFuncs.ControlTypeVertical({ inKCont1: jVarLocalKCont1, inelement: element.KData.TableInfo.TableRowOptions.DefaultFocus });

                    if (shouldSkip) {
                        return;
                    }
                };

                if (element.HTMLControlType === "Table") {
                    if (element.KData.TableInfo.FooterType.CreateNewRow.Style === "") {
                        jVarLocalElementsToFocus = jVarLocalKCont1.querySelector(".card .card-body table tfoot input");

                        if (!(jVarLocalElementsToFocus === undefined || jVarLocalElementsToFocus === null)) {
                            jVarLocalElementsToFocus.focus();
                            // return false;
                        };
                    } else {
                        jVarLocalElementsToFocus = jVarLocalKCont1.querySelector(".card .card-header input");

                        if (jVarLocalElementsToFocus !== undefined && jVarLocalElementsToFocus !== null) {
                            jVarLocalElementsToFocus.focus();
                            // return false;
                        };
                    };
                };
            });
        },
        SetFocusCommonFuncs: {
            ControlTypeVertical: ({ inKCont1, inelement }) => {
                let jVarLocalElementsToFocus;

                if (inelement.DataAttribute === "") {
                    jVarLocalElementsToFocus = inKCont1.querySelectorAll("input[data-dataattribute]");
                    if (jVarLocalElementsToFocus.length > 0) {
                        jVarLocalElementsToFocus[0].focus();
                        return true;
                    };
                } else {
                    //document.querySelector('[name="your-selector-name-here"]');

                    jVarLocalElementsToFocus = inKCont1.querySelector(`[name=${inelement.DataAttribute}]`);
                    console.log("jVarLocalElementsToFocus : ", jVarLocalElementsToFocus);
                    jVarLocalElementsToFocus.focus();
                    return true;
                }

                return false;
            }
        },
        BuildFromArrayDataCommonReturnHtml: ({ inData }) => {
            try {
                let jVarLocalHTMLContent;

                jVarLocalHTMLContent = Handlebars.compile(jVarGlobalHBSData.Global.Common)(inData);

                return jVarLocalHTMLContent;
            } catch (error) {
                console.log("erro : ", error);
            }
        },
        BuildFromArrayDataCommon: () => {
            try {
                let jVarLocalHTMLContent;
                let jVarLocalKCont1 = document.getElementById("KCont1");
                jVarLocalKCont1.innerHTML = "";

                jVarLocalHTMLContent = Handlebars.compile(document.getElementById("Global/Common").innerText)(jVarGlobalPresentViewData);

                jVarLocalKCont1.innerHTML += jVarLocalHTMLContent;
                this.AppendToDOM.CommonFuncs.BuildFromArray.InsertToSelect();

                this.AppendToDOM.SetFocusWithGlobalPresentViewData();
                this.AppendToDOM.CommonFuncs.CollapseMenuAfterShow();
                this.AppendToDOM.CommonFuncs.ShowAlertAutoClose();
                this.AppendToDOM.CommonFuncs.ForDataList.ReverseFunc();

                return true;
            } catch (error) {
                console.log("erro - BuildFromArrayDataCommon : ", error);
            }
        },
        BuildAndReturnHtml: ({ inData = jVarGlobalPresentViewData }) => {
            try {
                let jVarLocalHTMLContent;

                jVarLocalHTMLContent = Handlebars.compile(document.getElementById("Global/Common").innerText)(jVarGlobalPresentViewData);

                return jVarLocalHTMLContent;
            } catch (error) {
                console.log("erro - BuildFromArrayDataCommon : ", error);
            }
        },
        BuildFromArrayDataCommonWithInputData: ({ inData }) => {
            try {
                let jVarLocalHTMLContent;
                let jVarLocalKCont1 = document.getElementById("KCont1");
                jVarLocalKCont1.innerHTML = "";

                jVarLocalHTMLContent = Handlebars.compile(document.getElementById("Global/Common").innerText)(inData);

                jVarLocalKCont1.innerHTML += jVarLocalHTMLContent;
                this.AppendToDOM.CommonFuncs.BuildFromArray.InsertToSelect();

                this.AppendToDOM.SetFocusWithGlobalPresentViewData();
                this.AppendToDOM.CommonFuncs.CollapseMenuAfterShow();
                this.AppendToDOM.CommonFuncs.ShowAlertAutoClose();
                this.AppendToDOM.CommonFuncs.ForDataList.ReverseFunc();

                return true;
            } catch (error) {
                console.log("erro - BuildFromArrayDataCommon : ", error);
            }
        },
        BuildFromArrayDataCommonWithInputData1: ({ inData }) => {
            try {
                let jVarLocalHTMLContent;
                let jVarLocalKCont1 = document.getElementById("KCont1");
                jVarLocalKCont1.innerHTML = "";

                jVarLocalHTMLContent = Handlebars.compile(jVarGlobalHBSData.Global.Common)(inData);
                jVarLocalKCont1.innerHTML += jVarLocalHTMLContent;
                this.AppendToDOM.SetFocusWithGlobalPresentViewData();
            } catch (error) {
                console.log("erro : ", error);
            }
        },
        BuildFromArrayData: ({ inData = jVarGlobalPresentViewData, inJVarParentElementToBeRetained }) => {
            try {
                let jVarLocalHTMLContent;
                let jVarLocalElementsToFocus;
                inJVarParentElementToBeRetained.innerHTML = "";

                jVarLocalHTMLContent = Handlebars.compile(jVarGlobalHBSData.Global.Common)(inData);

                inJVarParentElementToBeRetained.innerHTML += jVarLocalHTMLContent;
                jVarLocalElementsToFocus = inJVarParentElementToBeRetained.querySelectorAll("input[data-dataattribute]");
                if (jVarLocalElementsToFocus.length > 0) {
                    jVarLocalElementsToFocus[0].focus();
                }

            } catch (error) {
                // console.log("err : ", error);
            }
        },
        Table: {
            Footer: {
                Save: ({ inJVarParentElementToBeRetained }) => {
                    inJVarParentElementToBeRetained.innerHTML = "";
                    let jVarLocalHTMLContent;
                    let jVarLocalDivToAppend = document.createElement("div");
                    jVarGlobalPresentViewData[0].KData.TableInfo.FooterType.CreateNewRow.Style = "";

                    jVarLocalHTMLContent = Handlebars.compile(jVarGlobalHBSData.Global.Common)(jVarGlobalPresentViewData);
                    jVarLocalDivToAppend.innerHTML = jVarLocalHTMLContent

                    inJVarParentElementToBeRetained.appendChild(jVarLocalDivToAppend);
                    inJVarParentElementToBeRetained.querySelectorAll("input[data-dataattribute]")[0].focus();
                },
                SaveAndShowOnScreen: ({ inJVarParentElementToBeRetained, inDataToShow }) => {

                    inJVarParentElementToBeRetained.innerHTML = "";
                    let jVarLocalHTMLContent;
                    let jVarLocalDivToAppend = document.createElement("div");
                    jVarGlobalPresentViewData[0].KData.TableInfo.FooterType.CreateNewRow.Style = "";

                    jVarLocalHTMLContent = Handlebars.compile(jVarGlobalHBSData.Global.Common)(jVarGlobalPresentViewData);
                    jVarLocalDivToAppend.innerHTML = jVarLocalHTMLContent;

                    inJVarParentElementToBeRetained.appendChild(JVarGlobalAPICalls.HTMLPrepare.jFBS4Alerts.PrimaryClosableRet({ inJVarDataToDisplay: inDataToShow }));

                    inJVarParentElementToBeRetained.appendChild(jVarLocalDivToAppend);
                    inJVarParentElementToBeRetained.querySelectorAll("input[data-dataattribute]")[0].focus();
                },
                Delete: ({ inJVarParentElementToBeRetained, inDataToShow }) => {

                    let jVarLocalHTMLContent;
                    inJVarParentElementToBeRetained.innerHTML = "";
                    let jVarLocalDivToAppend = document.createElement("div");

                    jVarLocalHTMLContent = Handlebars.compile(jVarGlobalHBSData.Global.Common)(jVarGlobalPresentViewData);
                    jVarLocalDivToAppend.innerHTML = jVarLocalHTMLContent;

                    inJVarParentElementToBeRetained.appendChild(JVarGlobalAPICalls.HTMLPrepare.jFBS4Alerts.dangerClosableRet({ inJVarDataToDisplay: inDataToShow }));

                    inJVarParentElementToBeRetained.appendChild(jVarLocalDivToAppend);
                }
            }
        },
        BuildCommon: ({ inJVarParentElementToBeRetained }) => {
            inJVarParentElementToBeRetained.innerHTML = "";
            let jVarLocalHTMLContent;
            let jVarLocalDivToAppend = document.createElement("div");

            jVarLocalHTMLContent = Handlebars.compile(jVarGlobalHBSData.Global.Common)(jVarGlobalPresentViewData);
            jVarLocalDivToAppend.innerHTML = jVarLocalHTMLContent
            inJVarParentElementToBeRetained.appendChild(jVarLocalDivToAppend);
            inJVarParentElementToBeRetained.querySelectorAll("input[data-dataattribute]")[0].focus();
        },
        BuildCommonForDelete: ({ inJVarParentElementToBeRetained, inToShowInDelete }) => {
            inJVarParentElementToBeRetained.innerHTML = "";
            let jVarLocalHTMLContent;
            let jVarLocalDivToAppend = document.createElement("div");
            jVarLocalHTMLContent = Handlebars.compile(jVarGlobalHBSData.Global.Common)(jVarGlobalPresentViewData);
            jVarLocalDivToAppend.innerHTML = jVarLocalHTMLContent

            inJVarParentElementToBeRetained.appendChild(jVarGlobalHTMLBuilder.jFBS4Alerts.dangerClosableRet({ inJVarDataToDisplay: inToShowInDelete }));

            inJVarParentElementToBeRetained.appendChild(jVarLocalDivToAppend);
        },
        CommonFuncs: {
            BuildFromArray: {
                InsertToSelect: () => {
                    //console.log("InsertToSelect");
                    let jVarLocalKCont1 = document.getElementById("KCont1");
                    let jVarLocalAllSelects = jVarLocalKCont1.querySelectorAll("select");
                    let jVarLocalDataLists = document.getElementById("DataListsID").querySelectorAll("datalist");
                    let jVarLocalDataListFound;
                    let jVarLocalOption;
                    let jVarLocalDefaultValue;

                    jVarLocalAllSelects.forEach((LoopElement) => {
                        if ("kdefaultvalue" in LoopElement.dataset) {

                            jVarLocalDefaultValue = LoopElement.dataset.kdefaultvalue;

                            if (LoopElement.dataset.klist.length < 25 && LoopElement.dataset.klist.length > 0) {
                                jVarLocalDataListFound = document.getElementById("DataListsID").querySelector(`#${LoopElement.dataset.klist}`);

                                var i;

                                for (i = 0; i < jVarLocalDataListFound.options.length; i++) {
                                    jVarLocalOption = document.createElement("option");
                                    jVarLocalOption.value = jVarLocalDataListFound.options[i].text;
                                    jVarLocalOption.text = jVarLocalDataListFound.options[i].value;
                                    if (jVarLocalOption.value === jVarLocalDefaultValue) {
                                        jVarLocalOption.setAttribute("selected", "selected");
                                    }
                                    LoopElement.add(jVarLocalOption);
                                };
                            };
                        };

                    });
                }
            },
            CollapseMenuAfterShow: () => {
                var myCollapse = document.getElementById('KDataListNavBar')
                var bsCollapse = new bootstrap.Collapse(myCollapse, {
                    toggle: false
                });

                bsCollapse.hide();
            },
            ShowAlertAutoClose: () => {
                setTimeout(function () {
                    let jVarLocalKAlertSuccessId = document.getElementById("KAlertSuccessId");

                    if (jVarLocalKAlertSuccessId !== null) {
                        bootstrap.Alert.getOrCreateInstance(jVarLocalKAlertSuccessId).close();
                    };
                }, 10000)
            },
            ForDataList: {
                ReverseFunc: () => {
                    try {
                        let jVarLocalDataListForReverse = document.getElementById("KCont1").querySelectorAll("input[list][data-datalistreverse='true']");

                        let jVarLocalDataListValue;

                        jVarLocalDataListForReverse.forEach((LoopItem) => {
                            jVarLocalDataListValue = this.Api.UserData.Table.Row.CommonFuncs.ForDataList.collectionContains({
                                collection: LoopItem.list.options,
                                searchText: LoopItem.dataset.ksdatalistvalue
                            });

                            LoopItem.value = jVarLocalDataListValue;
                        });

                    } catch (error) {
                        console.log("error : ", error);
                    };
                }
            }
        }
    };

    Login = {
        LocalStorage: {
            FirmDetails: ({ inUserName, inFirmDetails }) => {
                localStorage.setItem("kUserName", inUserName);
                localStorage.setItem("FirmDetails", JSON.stringify(inFirmDetails));
            }
        },
        LoginCheck: async () => {
            let jVarLocalObject = {};
            let jVarReturnData;

            jVarLocalObject.UserName = document.getElementById("KUserNameInput").value;
            jVarLocalObject.Password = document.getElementById("KPasswordInput").value;

            if (jVarLocalObject.UserName !== "" && jVarLocalObject.Password !== "") {
                jVarReturnData = await this.Login.CheckUserNamePassword({ inUserName: jVarLocalObject.UserName, inPassword: jVarLocalObject.Password });

                if (jVarReturnData.KTF) {
                    jVarGlobalClientObject.DataApi.Folders.PullData();
                };
            };
        },
        CheckUserNamePassword: async ({ inUserName, inPassword }) => {
            let jVarLocalUserCheckRoute = this.Config.RouteStart.UserCheckRoute;
            let jVarLocalFetchUrl = `/${jVarLocalUserCheckRoute}/LoginCheck/${inUserName}/${inPassword}`;

            let response = await fetch(jVarLocalFetchUrl);
            let FetchDataJson = await response.json();

            if (FetchDataJson !== null) {
                if (FetchDataJson.KTF) {
                    var myModalEl = document.getElementById('LoginModalId');

                    var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

                    modal.hide();

                    this.Login.LocalStorage.FirmDetails({ inUserName, inFirmDetails: FetchDataJson });
                    this.Login.ClientSideCookieFuncs.CheckToken();
                    return await FetchDataJson;
                } else {
                    document.getElementById("KUserNameInput").classList.add("is-invalid");
                };
            };
        },
        StatusCodeFuncs: {
            Html: {
                Code404: ({ inResponse }) => {
                    if (inResponse.status === 404) {
                        jVarGlobalAdmin.HTMLPrepare.jFBS4Alerts.AppendtoKCont1.dangerClosable({ inJVarDataToDisplay: `Html File not Found ${inResponse.url}` });
                        return null;

                    };


                    return inResponse.text();
                }
            },
            Code403: ({ inResponse }) => {
                if (inResponse.status === 403) {
                    let jVarLocalLoginFormPopUpId = document.getElementById("LoginFormPopUpId");

                    if (jVarLocalLoginFormPopUpId !== null) {
                        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: false, focus: true });
                        myModal.show();
                    };
                    return null;
                };

                return inResponse.json();
            }
        },
        ShowLoginDetailsOnDOM: {
            InHeader: () => {
                let LocalUserName = localStorage.getItem("kUserName");
                let jVarLocalHeaderLoginButtonId = document.getElementById("HeaderLoginButtonId");

                if (jVarLocalHeaderLoginButtonId !== null) {
                    jVarLocalHeaderLoginButtonId.classList.add("visually-hidden");
                    document.getElementById("HeaderUserIdLi").classList.remove("visually-hidden");

                    if (LocalUserName !== null) {
                        document.getElementById("HeaderUserIdDropDown").innerHTML =
                            document.getElementById("HeaderUserIdDropDown").innerHTML.replace("UserName", LocalUserName);

                        document.getElementById('NavBarId').classList.remove("bg-danger");
                        document.getElementById('NavBarId').classList.add("bg-dark");
                    };
                };
            }
        },
        ClientSideCookieFuncs: {
            getCookie: (name) => {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            },
            CheckToken: () => {
                let jVarLocalCookieValue;
                jVarLocalCookieValue = this.Login.ClientSideCookieFuncs.getCookie("KToken");
                if (jVarLocalCookieValue === null) {
                    this.UI.ModalFuncs.Show();
                } else {
                    this.Login.ShowLoginDetailsOnDOM.InHeader();
                };
            },
            DeleteCookie: () => {
                document.cookie = "KToken=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;";
            }
        }
    };

    UI = {
        ValidateFuncs: {
            LoginFormPopUpValidate: () => {
                let jVarLocalLoginFormPopUpId = document.getElementById("LoginFormPopUpId");

                if (jVarLocalLoginFormPopUpId != null) {
                    jVarLocalLoginFormPopUpId.addEventListener('submit', function (event) {
                        if (!jVarLocalLoginFormPopUpId.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        jVarLocalLoginFormPopUpId.classList.add('was-validated')
                    }, false);
                };
            }
        },
        ModalFuncs: {
            LoadToDOM: () => {
                let LocalFetchURL = `/${this.Config.Public.ProjectName}/Html/Modals/Login.html`;
                fetch(LocalFetchURL).then((FetchData) => { return FetchData.text() })
                    .then((FetchDataText) => {
                        let LocalModalId = this.Config.Modal.Id;
                        document.body.innerHTML += FetchDataText;

                        document.getElementById(LocalModalId).addEventListener('shown.bs.modal', function (event) {
                            event.currentTarget.querySelector("input").focus();
                        });

                        this.UI.ValidateFuncs.LoginFormPopUpValidate();

                    }).catch((error) => console.log(error));
            },
            Show: () => {
                localStorage.removeItem("kUserName");
                localStorage.removeItem("FirmDetails");
                this.Login.ClientSideCookieFuncs.DeleteCookie();

                let jVarLocalId = this.Config.Modal.Id;
                var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

                myModal.show();
            }
        },
        Show: {
            ShowData: () => {
                fetch('/Bs5Data/Html/Modals/ShowData.html')
                    .then(response => response.text())
                    .then(dataForUi => {
                        document.getElementById("KCont1").innerHTML = dataForUi;
                    });
            }
        },
        UserData: {
            FetchHtml: (inJVarThis) => {
                this.NavBar.SetActiveItem(inJVarThis);

                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/UserData.html`;

                fetch(`${jVarLocalFetchUrl}`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                    })
                    .then(dataForUi => {
                        if (dataForUi !== null) {
                            //document.querySelector("body main .container").innerHTML = dataForUi;
                            document.getElementById("KCont1").innerHTML = dataForUi;

                            jVarGlobalClientObject.DataApi.Folders.PullData();
                        }
                    });
            }
        },
        Reports: {
            FetchHtml: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/Reports/Reports.html`;

                fetch(`${jVarLocalFetchUrl}`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                    })
                    .then(dataForUi => {
                        if (dataForUi !== null) {
                            document.querySelector("body main .container").innerHTML = dataForUi;

                            jVarGlobalClientObject.DataApi.Reports.Items.PullData();
                        }
                    });
            },
            WithFilters: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/Reports/Filters.html`;

                fetch(`${jVarLocalFetchUrl}`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                    })
                    .then(dataForUi => {
                        if (dataForUi !== null) {
                            document.querySelector("body main .container").innerHTML = dataForUi;

                            jVarGlobalClientObject.DataApi.Reports.Items.PullData();
                        }
                    });
            }
        },
        DataConfig: {
            FetchHtml: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/DataConfig.html`;

                fetch(`${jVarLocalFetchUrl}`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                    })
                    .then(dataForUi => {
                        if (dataForUi !== null) {
                            document.querySelector("body main .container").innerHTML = dataForUi;

                            jVarGlobalClientObject.DataApi.Reports.Items.PullData();
                        }
                    });
            },
            WithFilters: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/UserData/Dataconfig.html`;

                fetch(`${jVarLocalFetchUrl}`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                    })
                    .then(dataForUi => {
                        if (dataForUi !== null) {
                            document.querySelector("body main .container").innerHTML = dataForUi;

                            jVarGlobalClientObject.DataApi.Reports.Items.PullData();
                        }
                    });
            }
        }
    };

    AdminUi = {
        Reports: {
            VouchersConsider: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/Admin/Reports/VouchersConsider/VouchersConsider.html`;

                fetch(`${jVarLocalFetchUrl}`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                    })
                    .then(dataForUi => {
                        if (dataForUi !== null) {
                            document.getElementById("KCont1").innerHTML = dataForUi;
                        }
                    });
            },
            Columns: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalFetchUrl = `/${jVarLocalRoute}/Html/Admin/Reports/Columns/Columns.html`;

                fetch(`${jVarLocalFetchUrl}`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                    })
                    .then(dataForUi => {
                        if (dataForUi !== null) {
                            document.getElementById("KCont1").innerHTML = dataForUi;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let LocalURL = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ForDataList/ShowItemNames?inFolderName=Reports&inJsonFileName=LedgerAuto.json`;

                            this.DataListFuncs.Fill.Items.SingleColumn({ inURL: LocalURL });
                        }
                    });
            }
        },
        Columns: {
            ColumnData: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/Columns/ColumnData.html`;
                let jVarLocalKey = "ColumnData";

                this.AdminUi.Columns.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            KDataset: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/Columns/KDataset.html`;
                let jVarLocalKey = "KDataset";

                this.AdminUi.Columns.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            KDatasetSavecheck: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/Columns/KDatasetSavecheck.html`;
                let jVarLocalKey = "KDatasetSavecheck";

                this.AdminUi.Columns.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            KDatasetSaveCheckMasters: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/Columns/KDatasetSaveCheckMasters.html`;
                let jVarLocalKey = "KDatasetSaveCheckMasters";

                this.AdminUi.Columns.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            Parent: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/Columns/Parent.html`;
                let jVarLocalKey = "ParentClasses";

                this.AdminUi.Columns.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            Widths: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/Columns/Widths.html`;
                let jVarLocalKey = "Widths";

                this.AdminUi.Columns.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            HtmlAttributes: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/Columns/Htmlatt.html`;
                let jVarLocalKey = "HtmlAttributes";

                this.AdminUi.Columns.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            CommonFuncs: {
                FetchFunc: ({ inJVarFetchUrl, injVarKey }) => {
                    fetch(`${inJVarFetchUrl}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                        })
                        .then(dataForUi => {
                            if (dataForUi !== null) {
                                if (document.getElementById("KCont1").querySelector(`[data-endpoint='${injVarKey}']`) === null) {
                                    document.getElementById("KCont1").insertAdjacentHTML("beforeend", dataForUi);

                                    document.getElementById("KCont1").querySelector(`[data-endpoint='${injVarKey}'] .card-header button`).click();
                                };
                            }
                        });
                }
            }
        },
        ServerData: {
            DefaultShowData: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/ServerData/DefaultShowData.html`;
                let jVarLocalKey = "DefaultShowData";

                this.AdminUi.ServerData.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            DefaultValueCreate: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/ServerData/DefaultValueCreate.html`;
                let jVarLocalKey = "DefaultValueCreate";

                this.AdminUi.ServerData.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            DefaultValueShow: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/ServerData/DefaultValueShow.html`;
                let jVarLocalKey = "DefaultValueShow";

                this.AdminUi.ServerData.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },


            CommonFuncs: {
                FetchFunc: ({ inJVarFetchUrl, injVarKey }) => {
                    fetch(`${inJVarFetchUrl}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                        })
                        .then(dataForUi => {
                            if (dataForUi !== null) {
                                if (document.getElementById("KCont1").querySelector(`[data-endpoint='${injVarKey}']`) === null) {
                                    document.getElementById("KCont1").insertAdjacentHTML("beforeend", dataForUi);

                                    document.getElementById("KCont1").querySelector(`[data-endpoint='${injVarKey}'] .card-header button`).click();
                                };
                            }
                        });
                }
            }

        },
        TableInfo: {
            TableInfoServerSide: () => {
                let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/TableInfo/TableInfoServerSide.html`;
                let jVarLocalKey = "TableInfoServerSide";

                this.AdminUi.TableInfo.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
            },
            TableRowOptions: {
                Delete: () => {
                    let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                    let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/TableInfo/TableRowOptions/Delete.html`;
                    let jVarLocalKey = "TableRowOptions";

                    this.AdminUi.TableInfo.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
                },
                PrintToPrinter: () => {
                    let jVarLocalHtmlRoute = this.Config.Public.ProjectName;
                    let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/TableInfo/TableRowOptions/PrintToPrinter.html`;
                    let jVarLocalKey = "TableRowOptions";

                    this.AdminUi.TableInfo.CommonFuncs.FetchFunc({ inJVarFetchUrl: jVarLocalFetchUrl, injVarKey: jVarLocalKey });
                }
            },
            CommonFuncs: {
                FetchFunc: ({ inJVarFetchUrl, injVarKey }) => {
                    fetch(`${inJVarFetchUrl}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                        })
                        .then(dataForUi => {
                            if (dataForUi !== null) {
                                if (document.getElementById("KCont1").querySelector(`[data-endpoint='${injVarKey}']`) === null) {
                                    document.getElementById("KCont1").insertAdjacentHTML("beforeend", dataForUi);

                                    document.getElementById("KCont1").querySelector(`[data-endpoint='${injVarKey}'] .card-header button`).click();
                                };
                            }
                        });
                }
            }
        },
    };

    NavBar = {
        SetActiveItem: (inJVarThis) => {
            if (inJVarThis !== undefined) {
                let jVarLocalHtmlControl = inJVarThis;
                let jVarLocalHtmlUl = jVarLocalHtmlControl.closest("ul");

                jVarLocalHtmlUl.querySelectorAll("li a").forEach(el => {
                    if (el.classList.contains("text-info")) {
                        el.classList.remove("text-info");
                        el.classList.add("text-white");
                    };
                });

                jVarLocalHtmlControl.classList.remove("text-white");
                jVarLocalHtmlControl.classList.add("text-info");
            };
        }
    };

    Menu = {
        ForTable: {
            Recent: ({ inJVarKType }) => {
                let LocalJVarRouteStarting = this.Config.RouteStart.Start;
                let LocalJVarSubRouteStarting = this.Config.RouteStart.SubRoute;
                fetch(`/${LocalJVarRouteStarting}/${LocalJVarSubRouteStarting}/Menu/Show/ForTable/Recent?inKType=${inJVarKType}`)
                    .then(response => {
                        if (!response.ok) { throw new Error(response.statusText) };

                        return response.json();
                    }).then((FetchData) => {

                        if (FetchData.KTF) {
                            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                            this.AppendToDOM.BuildFromArrayDataCommon();
                        };
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    });
            }
        },
        ShowData: ({ inJVarKType }) => {
            let LocalJVarRouteStarting = this.Config.RouteStart.Start;
            let LocalJVarSubRouteStarting = this.Config.RouteStart.SubRoute;

            let jVarLocalItemName = document.getElementById("ItemSelected").value;
            let jVarLocalScreenName = document.getElementById("ScreenSelected").value;

            fetch(`/${LocalJVarRouteStarting}/${LocalJVarSubRouteStarting}/Menu/Show/ShowData?inKType=${inJVarKType}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`)
                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    if (FetchData.KTF) {
                        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                        this.AppendToDOM.BuildFromArrayDataCommon();
                    };
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                });

        }
    };

    FiltersMenu = {
        Admin: {
            SubTableColumns: {
                Files: {
                    PullData: () => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                        let jVarLocalFilesHtmlControl = document.getElementById("FileSelected");

                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                            fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Files/Show/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}`)
                                .then(response => {
                                    return this.Login.StatusCodeFuncs.Code403({ inResponse: response });
                                })
                                .then(dataFromApi => {
                                    if (dataFromApi !== null) {
                                        jVarLocalFilesHtmlControl.innerText = "";

                                        this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalFilesHtmlControl.list, inData: dataFromApi });
                                        if (jVarLocalFilesHtmlControl.list.options.length === 1) {
                                            jVarLocalFilesHtmlControl.value = jVarLocalFilesHtmlControl.list.options[0].value
                                            this.FiltersMenu.Admin.SubTableColumns.Items.ForDataList();
                                        } else {
                                            document.getElementById("FileSelected").focus();
                                        }
                                    };
                                });
                        };
                    }
                },
                Items: {
                    ForDataList: (inEvent) => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                        let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                        let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");

                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Items/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}`;

                                fetch(jVarLocalFetchUrl)
                                    .then(response => response.text())
                                    .then(dataFromApi => {
                                        this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalItemHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                        if (jVarLocalItemHtmlControl.list.options.length === 1) {
                                            jVarLocalItemHtmlControl.value = jVarLocalItemHtmlControl.list.options[0].value;
                                            this.FiltersMenu.Admin.SubTableColumns.Screens.ForSubTableColumns();
                                        } else {
                                            jVarLocalItemHtmlControl.focus();
                                        };
                                    });
                            };
                        };
                    },
                },
                Screens: {
                    ForSubTableColumns: () => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        //let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                        let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                        let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");

                        let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");
                        let jVarLocalColumnHtmlControl = document.getElementById("ColumnSelected");

                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Screens/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}`;

                                    fetch(jVarLocalFetchUrl)
                                        .then(response => response.text())
                                        .then(dataFromApi => {
                                            this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalScreenHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                            jVarLocalScreenHtmlControl.focus();

                                            if (jVarLocalScreenHtmlControl.list.options.length === 1) {
                                                jVarLocalScreenHtmlControl.value = jVarLocalScreenHtmlControl.list.options[0].value;

                                                if (jVarLocalColumnHtmlControl !== null) { this.FiltersMenu.Admin.SubTableColumns.SubTable.ForColumnDataList(); };
                                            };
                                        });
                                };
                            };
                        };
                    },
                },
                SubTable: {
                    ForColumnDataList: (inEvent) => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        //let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                        let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                        let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");
                        let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");

                        let jVarLocalColumnHtmlControl = document.getElementById("ColumnSelected");
                        let jVarLocalSubTableColumnHtmlControl = document.getElementById("SubTableColumnSelected");

                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalScreenHtmlControl })) {
                                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/SubTableColumns/ForColumnDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}&inScreenName=${jVarLocalScreenHtmlControl.value}`;

                                        fetch(jVarLocalFetchUrl)
                                            .then(response => response.json())
                                            .then(dataFromApi => {
                                                if (jVarLocalColumnHtmlControl !== null) {
                                                    this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalColumnHtmlControl.list, inData: dataFromApi });

                                                    jVarLocalColumnHtmlControl.focus();
                                                    if (jVarLocalColumnHtmlControl.list.options.length === 1) {
                                                        jVarLocalColumnHtmlControl.value = jVarLocalColumnHtmlControl.list.options[0].value;
                                                        if (jVarLocalSubTableColumnHtmlControl !== null) { this.FiltersMenu.Admin.SubTableColumns.SubTable.Columns.ForDataList(); };
                                                    };
                                                };
                                            });
                                    };
                                };
                            };
                        };
                    },
                    Columns: {
                        ForDataList: (inEvent) => {
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            //let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                            let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                            let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                            let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");
                            let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");
                            let jVarLocalColumnHtmlControl = document.getElementById("ColumnSelected");
                            let jVarLocalSubTableColumnHtmlControl = document.getElementById("SubTableColumnSelected");


                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalScreenHtmlControl })) {
                                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalColumnHtmlControl })) {

                                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/SubTableColumns/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}&inScreenName=${jVarLocalScreenHtmlControl.value}&inColumnName=${jVarLocalColumnHtmlControl.value}`;

                                                fetch(jVarLocalFetchUrl)
                                                    .then(response => response.text())
                                                    .then(dataFromApi => {
                                                        this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalSubTableColumnHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                                        jVarLocalSubTableColumnHtmlControl.focus();
                                                        if (jVarLocalSubTableColumnHtmlControl.list.options.length === 1) {
                                                            jVarLocalSubTableColumnHtmlControl.value = jVarLocalSubTableColumnHtmlControl.list.options[0].value;
                                                        };
                                                    });
                                            };
                                        };
                                    };
                                };
                            };
                        },
                    }
                }
            }
        }
    };

    DataApi = {
        Folders: {
            PullDataAndPrepareCards: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Folders/Show/ForDashboard`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Code403({ inResponse: response });
                    })
                    .then(dataFromApi => {
                        if (dataFromApi !== null) {
                            if (dataFromApi.KTF) {
                                let jVarLocalFolderArray = dataFromApi.map(element => element.FolderName);
                                this.DataListFuncs.SingleValue({ inDataList: document.getElementById("FolderList"), inData: jVarLocalFolderArray });
                                document.getElementById("TreeTab").innerHTML = Handlebars.compile(document.getElementById("TreeMenuId").innerHTML)(dataFromApi);

                                document.getElementById("TreeMenuId").innerText = "";
                            };
                        };
                    });
            },
            PullData: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Folders/Show/ShowWithDataPK`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Code403({ inResponse: response });
                    })
                    .then(dataFromApi => {
                        if (dataFromApi !== null) {
                            this.DataListFuncs.SingleValue({ inDataList: document.getElementById("FolderList"), inData: dataFromApi });
                            //document.getElementById("FolderSelected").focus();
                            document.querySelector("input").focus();
                        };
                    });
            },
            PullDataAndFormUi: ({ inData }) => {
                let jVarLocalArrayToObject = this.DataApi.Folders.BuildOnUi.ShowAsTable.ChangeArray({ inDataAsArray: inData });

                let jVarLocalObjectToUi = KeshavSoftCrud.BuildFromData.ClientObject.ForTable({ inData: jVarLocalArrayToObject });
                this.DataApi.Folders.BuildOnUi.ShowAsTable.PrepareTableInfo({ inTableInfo: jVarLocalObjectToUi.KData.TableInfo });
                jVarLocalObjectToUi = KeshavSoftCrud.BuildFromArray([jVarLocalObjectToUi]);
                document.getElementById("TableTab").innerHTML = Handlebars.compile(document.getElementById("Table/KTableWithCardAndSearchRow").innerHTML)(jVarLocalObjectToUi[0]);
            },
            BuildOnUi: {
                ShowAsTable: {
                    ChangeArray: ({ inDataAsArray }) => {
                        let jVarLocalArrayToObject = inDataAsArray.map(element => {
                            return { Folder: element };
                        });

                        return jVarLocalArrayToObject;
                    },
                    PrepareTableInfo: ({ inTableInfo }) => {
                        inTableInfo.SearchRowArray.Search.KTF = true;
                    }
                }
            }
        },
        Files: {
            PullDataRelative: (inEvent) => {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");
                let jVarLocalFolderHtmlControl = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass");
                let jVarLocalFilesHtmlControl = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass");

                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Files/Show/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Code403({ inResponse: response });
                        })
                        .then(dataFromApi => {
                            if (dataFromApi !== null) {
                                jVarLocalFilesHtmlControl.innerText = "";

                                this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalFilesHtmlControl.list, inData: dataFromApi });
                                if (jVarLocalFilesHtmlControl.list.options.length === 1) {
                                    jVarLocalFilesHtmlControl.value = jVarLocalFilesHtmlControl.list.options[0].value
                                    this.DataApi.Items.ForDataListFromCard({ injVarHtmlKSCard: jVarLocalHtmlKSCard });
                                } else {
                                    document.getElementById("FileSelected").focus();
                                }
                            };
                        });
                };
            },
            PullData: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                let jVarLocalFilesHtmlControl = document.getElementById("FileSelected");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Files/Show/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Code403({ inResponse: response });
                        })
                        .then(dataFromApi => {
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
            }
        },
        Items: {
            ForDataList: (inEvent) => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Items/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}`;

                        fetch(jVarLocalFetchUrl)
                            .then(response => response.json())
                            .then(dataFromApi => {
                                if (Array.isArray(dataFromApi)) {
                                    jVarLocalItemHtmlControl.value = "";

                                    this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalItemHtmlControl.list, inData: dataFromApi });

                                    if (jVarLocalItemHtmlControl.list.options.length === 1) {
                                        jVarLocalItemHtmlControl.value = jVarLocalItemHtmlControl.list.options[0].value;
                                        this.DataApi.Screens.ForDataList();
                                    } else {
                                        jVarLocalItemHtmlControl.focus();
                                    };
                                };
                            });
                    };
                };
            },
            ForDataListForUtilities: (inEvent) => {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                let jVarLocalFolderHtmlControl = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass");
                let jVarLocalFileHtmlControl = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass");
                let jVarLocalItemHtmlControl = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Items/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}`;

                        fetch(jVarLocalFetchUrl)
                            .then(response => response.text())
                            .then(dataFromApi => {
                                this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalItemHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                if (jVarLocalItemHtmlControl.list.options.length === 1) {
                                    jVarLocalItemHtmlControl.value = jVarLocalItemHtmlControl.list.options[0].value;
                                    this.DataApi.Screens.ForDataList();
                                } else {
                                    jVarLocalItemHtmlControl.focus();
                                };
                            });
                    };
                };
            },
            ForDataListFromCard: ({ injVarHtmlKSCard }) => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                let jVarLocalFolderHtmlControl = injVarHtmlKSCard.querySelector(".FolderSelectedClass");
                let jVarLocalFileHtmlControl = injVarHtmlKSCard.querySelector(".FileSelectedClass");
                let jVarLocalItemHtmlControl = injVarHtmlKSCard.querySelector(".ItemSelectedClass");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Items/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}`;

                        fetch(jVarLocalFetchUrl)
                            .then(response => response.text())
                            .then(dataFromApi => {
                                this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalItemHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                if (jVarLocalItemHtmlControl.list.options.length === 1) {
                                    jVarLocalItemHtmlControl.value = jVarLocalItemHtmlControl.list.options[0].value;
                                    this.DataApi.Screens.ForDataList();
                                } else {
                                    jVarLocalItemHtmlControl.focus();
                                };
                            });
                    };
                };
            },
            ForDataListRelative: (inEvent) => {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                let jVarLocalRoute = this.Config.RouteStart.Start;
                //let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                let jVarLocalFileHtmlControl = document.getElementById("FileSelected");

                let jVarLocalItemHtmlControl = document.getElementById(jVarLocalCurrentTarget.dataset.datalistid);

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Items/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}`;

                        fetch(jVarLocalFetchUrl)
                            .then(response => response.text())
                            .then(dataFromApi => {
                                this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalItemHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                if (jVarLocalItemHtmlControl.list.options.length === 1) {
                                    jVarLocalItemHtmlControl.value = jVarLocalItemHtmlControl.list.options[0].value;
                                    this.DataApi.Screens.ForDataList();
                                } else {
                                    jVarLocalItemHtmlControl.focus();
                                };
                            });
                    };
                };
            }
        },
        Screens: {
            ForDataList: () => {
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
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Screens/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}`;

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
            },
            ForSubTableColumns: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                //let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");

                let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");
                let jVarLocalColumnHtmlControl = document.getElementById("ColumnSelected");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Screens/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}`;

                            fetch(jVarLocalFetchUrl)
                                .then(response => response.text())
                                .then(dataFromApi => {
                                    this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalScreenHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                    jVarLocalScreenHtmlControl.focus();

                                    if (jVarLocalScreenHtmlControl.list.options.length === 1) {
                                        jVarLocalScreenHtmlControl.value = jVarLocalScreenHtmlControl.list.options[0].value;

                                        if (jVarLocalColumnHtmlControl !== null) { this.DataApi.SubTableColumns.ForColumnDataList() };
                                    };
                                });
                        };
                    };
                };
            },
            ForDataListForUtilities: (inEvent) => {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                //let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                let jVarLocalFolderHtmlControl = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass");
                let jVarLocalFileHtmlControl = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass");
                let jVarLocalItemHtmlControl = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass");
                let jVarLocalScreenHtmlControl = jVarLocalHtmlKSCard.querySelector(".ScreenSelectedClass");
                let jVarLocalColumnHtmlControl = jVarLocalHtmlKSCard.querySelector(".ColumnSelectedClass");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Screens/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}`;

                            fetch(jVarLocalFetchUrl)
                                .then(response => response.text())
                                .then(dataFromApi => {
                                    this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalScreenHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                    jVarLocalScreenHtmlControl.focus();

                                    if (jVarLocalScreenHtmlControl.list.options.length === 1) {
                                        jVarLocalScreenHtmlControl.value = jVarLocalScreenHtmlControl.list.options[0].value;

                                        if (jVarLocalColumnHtmlControl !== null) { this.DataApi.Columns.ForDataList() };
                                    };
                                });
                        };
                    };
                };
            }
        },
        Columns: {
            CommonFuncs: {
                CheckDropDownsReturnUrl: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    //let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                    let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                    let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");
                    let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");

                    let jVarReturnObject = { KTF: false, KResult: "" };

                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalScreenHtmlControl })) {
                                    jVarReturnObject.KTF = true;
                                    jVarReturnObject.KResult = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Columns/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}&inScreenName=${jVarLocalScreenHtmlControl.value}`;
                                    jVarReturnObject.ForVisibility = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Columns/ForDataList/ForVisibility/${jVarLocalFolderHtmlControl.value}/${jVarLocalFileHtmlControl.value}/${jVarLocalItemHtmlControl.value}/${jVarLocalScreenHtmlControl.value}`;
                                };
                            };
                        };
                    };

                    return jVarReturnObject;
                }
            },
            ForDataList: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                //let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");
                let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");

                let jVarLocalColumnHtmlControl = document.getElementById("ColumnSelected");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalScreenHtmlControl })) {
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Columns/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}&inScreenName=${jVarLocalScreenHtmlControl.value}`;

                                fetch(jVarLocalFetchUrl)
                                    .then(response => response.text())
                                    .then(dataFromApi => {
                                        this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalColumnHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                        jVarLocalColumnHtmlControl.focus();
                                        if (jVarLocalColumnHtmlControl.list.options.length === 1) {
                                            jVarLocalColumnHtmlControl.value = jVarLocalColumnHtmlControl.list.options[0].value;
                                        };
                                    });
                            };
                        };
                    };
                };
            },
            ForDataListForUtilities: (inEvent) => {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");
                let jVarLocalRoute = this.Config.RouteStart.Start;
                //let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                let jVarLocalFolderHtmlControl = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass");
                let jVarLocalFileHtmlControl = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass");
                let jVarLocalItemHtmlControl = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass");
                let jVarLocalScreenHtmlControl = jVarLocalHtmlKSCard.querySelector(".ScreenSelectedClass");
                let jVarLocalColumnHtmlControl = jVarLocalHtmlKSCard.querySelector(".ColumnSelectedClass");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalScreenHtmlControl })) {
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Columns/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}&inScreenName=${jVarLocalScreenHtmlControl.value}`;

                                fetch(jVarLocalFetchUrl)
                                    .then(response => response.text())
                                    .then(dataFromApi => {
                                        this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalColumnHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                        jVarLocalColumnHtmlControl.focus();
                                        if (jVarLocalColumnHtmlControl.list.options.length === 1) {
                                            jVarLocalColumnHtmlControl.value = jVarLocalColumnHtmlControl.list.options[0].value;
                                        };
                                    });
                            };
                        };
                    };
                };
            },
            ForDataListRelative: (inEvent) => {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                let jVarLocalRoute = this.Config.RouteStart.Start;

                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                let jVarLocalItemHtmlControl = document.getElementById("ReportsItemInputId");

                let jVarLocalColumnHtmlControl = document.getElementById(jVarLocalCurrentTarget.dataset.datacolumnlistid);

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {

                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Columns/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}`;

                            fetch(jVarLocalFetchUrl)
                                .then(response => response.text())
                                .then(dataFromApi => {
                                    this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalColumnHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                    jVarLocalColumnHtmlControl.focus();
                                    if (jVarLocalColumnHtmlControl.list.options.length === 1) {
                                        jVarLocalColumnHtmlControl.value = jVarLocalColumnHtmlControl.list.options[0].value;
                                    };
                                });

                        };
                    };
                };
            }
        },
        SubTableColumns: {
            ForColumnDataList: (inEvent) => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                //let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");
                let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");

                let jVarLocalColumnHtmlControl = document.getElementById("ColumnSelected");
                let jVarLocalSubTableColumnHtmlControl = document.getElementById("SubTableColumnSelected");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalScreenHtmlControl })) {
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/SubTableColumns/ForColumnDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}&inScreenName=${jVarLocalScreenHtmlControl.value}`;

                                fetch(jVarLocalFetchUrl)
                                    .then(response => response.json())
                                    .then(dataFromApi => {

                                        this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalColumnHtmlControl.list, inData: dataFromApi });

                                        jVarLocalColumnHtmlControl.focus();
                                        if (jVarLocalColumnHtmlControl.list.options.length === 1) {
                                            jVarLocalColumnHtmlControl.value = jVarLocalColumnHtmlControl.list.options[0].value;
                                            if (jVarLocalSubTableColumnHtmlControl !== null) { this.DataApi.SubTableColumns.Columns.ForDataList() };
                                        };
                                    });
                            };
                        };
                    };
                };
            },
            ForDataListForUtilities: (inEvent) => {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");
                let jVarLocalRoute = this.Config.RouteStart.Start;
                //let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                let jVarLocalFolderHtmlControl = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass");
                let jVarLocalFileHtmlControl = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass");
                let jVarLocalItemHtmlControl = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass");
                let jVarLocalScreenHtmlControl = jVarLocalHtmlKSCard.querySelector(".ScreenSelectedClass");

                let jVarLocalColumnHtmlControl = jVarLocalHtmlKSCard.querySelector(".ColumnSelectedClass");
                let jVarLocalSubTableColumnHtmlControl = document.getElementById("SubTableColumnSelected");

                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalScreenHtmlControl })) {
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/SubTableColumns/ForColumnDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}&inScreenName=${jVarLocalScreenHtmlControl.value}`;

                                fetch(jVarLocalFetchUrl)
                                    .then(response => response.json())
                                    .then(dataFromApi => {

                                        this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalColumnHtmlControl.list, inData: dataFromApi });

                                        jVarLocalColumnHtmlControl.focus();
                                        if (jVarLocalColumnHtmlControl.list.options.length === 1) {
                                            jVarLocalColumnHtmlControl.value = jVarLocalColumnHtmlControl.list.options[0].value;
                                            if (jVarLocalSubTableColumnHtmlControl !== null) { this.DataApi.SubTableColumns.Columns.ForDataList() };
                                        };
                                    });
                            };
                        };
                    };
                };
            },
            Columns: {
                ForDataList: (inEvent) => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    //let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                    let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                    let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");
                    let jVarLocalScreenHtmlControl = document.getElementById("ScreenSelected");
                    let jVarLocalColumnHtmlControl = document.getElementById("ColumnSelected");
                    let jVarLocalSubTableColumnHtmlControl = document.getElementById("SubTableColumnSelected");


                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalScreenHtmlControl })) {
                                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalColumnHtmlControl })) {

                                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/SubTableColumns/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}&inScreenName=${jVarLocalScreenHtmlControl.value}&inColumnName=${jVarLocalColumnHtmlControl.value}`;

                                        fetch(jVarLocalFetchUrl)
                                            .then(response => response.text())
                                            .then(dataFromApi => {
                                                this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalSubTableColumnHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                                jVarLocalSubTableColumnHtmlControl.focus();
                                                if (jVarLocalSubTableColumnHtmlControl.list.options.length === 1) {
                                                    jVarLocalSubTableColumnHtmlControl.value = jVarLocalSubTableColumnHtmlControl.list.options[0].value;
                                                };
                                            });
                                    };
                                };
                            };
                        };
                    };
                },
                ForDataListForUtilities: (inEvent) => {
                    let jVarLocalCurrentTarget = inEvent.currentTarget;
                    let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    //let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    let jVarLocalFolderHtmlControl = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass");
                    let jVarLocalFileHtmlControl = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass");
                    let jVarLocalItemHtmlControl = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass");
                    let jVarLocalScreenHtmlControl = jVarLocalHtmlKSCard.querySelector(".ScreenSelectedClass");
                    let jVarLocalColumnHtmlControl = jVarLocalHtmlKSCard.querySelector(".ColumnSelectedClass");
                    let jVarLocalSubTableColumnHtmlControl = documejVarLocalHtmlKSCardnt.querySelector(".SubTableColumnSelectedClass");


                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemHtmlControl })) {
                                if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalScreenHtmlControl })) {
                                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalColumnHtmlControl })) {

                                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/SubTableColumns/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}&inScreenName=${jVarLocalScreenHtmlControl.value}&inColumnName=${jVarLocalColumnHtmlControl.value}`;

                                        fetch(jVarLocalFetchUrl)
                                            .then(response => response.text())
                                            .then(dataFromApi => {
                                                this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalSubTableColumnHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                                jVarLocalSubTableColumnHtmlControl.focus();
                                                if (jVarLocalSubTableColumnHtmlControl.list.options.length === 1) {
                                                    jVarLocalSubTableColumnHtmlControl.value = jVarLocalSubTableColumnHtmlControl.list.options[0].value;
                                                };
                                            });
                                    };
                                };
                            };
                        };
                    };
                }
            }
        },
        Reports: {
            Items: {
                PullData: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                    fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Reports/Items/ForDataList/?inFolderName=Reports&inJsonFileName=LedgerAuto.json`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Code403({ inResponse: response });
                        })
                        .then(dataFromApi => {
                            if (dataFromApi !== null) {
                                this.DataListFuncs.SingleValue({ inDataList: document.getElementById("ItemList"), inData: dataFromApi });
                                document.getElementById("ReportNameSelected").focus();
                            };
                        });
                },
                ShowHtml: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                    let jVarLocalWindowUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/`;

                    fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Reports/Items/ForDataList/?inFolderName=Reports&inJsonFileName=LedgerAuto.json`)
                        .then(response => {
                            return this.Login.StatusCodeFuncs.Code403({ inResponse: response });
                        })
                        .then(dataFromApi => {
                            if (dataFromApi !== null) {
                                this.DataListFuncs.SingleValue({ inDataList: document.getElementById("ItemList"), inData: dataFromApi });
                                document.getElementById("ReportNameSelected").focus();
                            };
                        });
                }
            },
        },
        PreLoad: {
            PullData: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Config/Preload/ForDataList`)
                    .then(response => {
                        return this.Login.StatusCodeFuncs.Code403({ inResponse: response });
                    })
                    .then(dataFromApi => {
                        if (dataFromApi !== null) {
                            this.DataListFuncs.SingleValue({ inDataList: document.getElementById("ItemList"), inData: dataFromApi });
                            document.getElementById("ItemSelected").focus();
                        };
                    });
            }
        },
        Admin: {
            Data: {
                Items: {
                    ForDataList: (inEvent) => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                        let jVarLocalFolderHtmlControl = document.getElementById("FolderSelected");
                        let jVarLocalFileHtmlControl = document.getElementById("FileSelected");
                        let jVarLocalItemHtmlControl = document.getElementById("ItemSelected");

                        if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFolderHtmlControl })) {
                            if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalFileHtmlControl })) {
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Items/ForDataList/ShowWithDataPK?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}`;

                                fetch(jVarLocalFetchUrl)
                                    .then(response => response.text())
                                    .then(dataFromApi => {
                                        this.DataListFuncs.SingleValueEmptyBefore({ inDataList: jVarLocalItemHtmlControl.list, inData: JSON.parse(dataFromApi) });

                                        if (jVarLocalItemHtmlControl.list.options.length === 1) {
                                            jVarLocalItemHtmlControl.value = jVarLocalItemHtmlControl.list.options[0].value;
                                            this.DataApi.Screens.ForDataList();
                                        } else {
                                            jVarLocalItemHtmlControl.focus();
                                        };
                                    });
                            };
                        };
                    }
                }
            }
        }
    };

    Api = {
        UserData: {
            PopUp: {
                Footer: {
                    Save: {
                        StartFunc: (injVarThis) => {
                            let jVarLocalClosestModal = injVarThis.currentTarget.closest(".modal");
                            let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".KTableDivClass");
                            let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".KCardBody");

                            if (this.Api.UserData.PopUp.Footer.Save.CommonFuncs.CheckBeforeSave(jVarLocalHtmlCardBody)) {
                                let jVarLocalFetchPostData = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });
                                this.Api.UserData.PopUp.Footer.Save.CommonFuncs.PullIpAddressThenSaveOnly({ inHtmlCard: jVarLocalHtmlCard, inFetchPostData: jVarLocalFetchPostData }).then(PromiseData => {

                                    if (PromiseData.KTF) {
                                        var modal = bootstrap.Modal.getInstance(jVarLocalClosestModal) // Returns a Bootstrap modal instance

                                        modal.hide();
                                    }
                                })
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
                                return new Promise((resolve, reject) => {
                                    fetch("https://api.ipify.org/").then(response => response.text()).then((FetchIpData) => {
                                        jvarLocalReturnArray.push({ name: "ClientIP", value: FetchIpData });

                                        this.Api.UserData.PopUp.Footer.Save.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData }).then((PromiseData) => {
                                            resolve(PromiseData);
                                        }).catch((PromiseError) => {
                                            resolve(PromiseError);
                                        });
                                    }).catch((FetchIpError) => {
                                        this.Api.UserData.PopUp.Footer.Save.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData }).then((PromiseData) => {
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
                                                if (this.Api.UserData.PopUp.Footer.Save.CommonFuncs.PostSave({ inDataFromSave: dataFromApi, inHtmlCard })) {
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
                        ForSubTable: {
                            StartFunc: (injVarThis) => {
                                let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                                let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".card-body");
                                //let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector("KCol-3");

                                if (this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.CheckBeforeSave(jVarLocalHtmlCardBody)) {
                                    let jVarLocalFetchPostData = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });
                                    this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.PullIpAddressThenSaveOnly({ inHtmlCard: jVarLocalHtmlCard, inFetchPostData: jVarLocalFetchPostData });
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
                                    return new Promise((resolve, reject) => {
                                        fetch("https://api.ipify.org/").then(response => response.text()).then((FetchIpData) => {
                                            jvarLocalReturnArray.push({ name: "ClientIP", value: FetchIpData });

                                            this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData }).then((PromiseData) => {
                                                resolve(PromiseData);
                                            }).catch((PromiseError) => {
                                                resolve(PromiseError);
                                            });
                                        }).catch((FetchIpError) => {
                                            this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData }).then((PromiseData) => {
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
                                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Vertical/Save/SaveFirstRow?inJsonConfig=${JSON.stringify(jVarLocalJsonConfigAndItemConfig.JsonConfig)}&inItemConfig=${JSON.stringify(jVarLocalJsonConfigAndItemConfig.ItemConfig)}&InsertKey=${jVarLocalJsonConfigAndItemConfig.insertkey}`;

                                        fetch(jVarLocalFetchUrl, {
                                            method: "post",
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(inFetchPostData)
                                        })
                                            .then(response => response.json())
                                            .then(dataFromApi => {
                                                if (dataFromApi.KTF === false) {
                                                    Swal.fire(dataFromApi.KReason);
                                                    //this.CommonFuncs.ChangeClasses.ToDanger({ inJVarLocalHtmlCard: inHtmlCard });
                                                } else {
                                                    let jVarLocalKSHtmlFindRow = document.getElementById("KSHtmlFindRow");
                                                    if (jVarLocalKSHtmlFindRow !== null) {
                                                        jVarLocalKSHtmlFindRow.dataset.pk = dataFromApi.kPK;
                                                    };

                                                    this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.PostSave({ inDataFromSave: dataFromApi, inHtmlCard });
                                                };
                                            });
                                    });
                                },
                                PostSave: ({ inDataFromSave, inHtmlCard }) => {
                                    if (inDataFromSave.KTF) {
                                        if (inDataFromSave.hasOwnProperty("DataFromServer")) {
                                            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(inDataFromSave.DataFromServer);
                                            jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                                        } else {
                                            this.CommonFuncs.ChangeClasses.ToSuccess({ inHtmlCard });
                                        };
                                    }
                                }
                            }
                        }
                    }
                }
            },
            Table: {
                Show: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                    let jVarLocalItemName = document.getElementById("ItemSelected").value;
                    let jVarLocalScreenName = document.getElementById("ScreenSelected").value;

                    fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/ShowData?inFolderName=Transactions&inJsonFileName=Transactions.json&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`)
                        .then(response => {
                            if (!response.ok) { throw new Error(response.statusText) };

                            return response.json();
                        }).then((FetchData) => {
                            if (FetchData.KTF) {
                                jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                                jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                            };
                        })
                        .catch(error => {
                            Swal.showValidationMessage(
                                `Request failed: ${error}`
                            )
                        });

                },
                ShowData: (inEvent) => {
                    inEvent.preventDefault();
                    let jVarLocalcurrentTarget = inEvent.currentTarget;
                    this.CommonFuncs.ShowSpinner.ShowProcessStart(jVarLocalcurrentTarget);

                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                    let jVarLocalItemConfig = this.Api.UserData.CommonFuncs.PrepareItemConfig();

                    let jVarLocalFolderName = jVarLocalItemConfig.FolderName;
                    let jVarLocalFileName = jVarLocalItemConfig.FileName;
                    let jVarLocalItemName = jVarLocalItemConfig.ItemName;
                    let jVarLocalScreenName = jVarLocalItemConfig.ScreenName;

                    fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/ShowData/ShowWithDataPKJson?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`)
                        .then(response => {
                            if (!response.ok) { throw new Error(response.statusText) };
                            return response.json();

                        }).then((FetchData) => {
                            if (FetchData.KTF) {
                                jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);

                                this.AppendToDOM.BuildFromArrayDataCommon();
                                this.CommonFuncs.ShowSpinner.ShowProcessEnd(jVarLocalcurrentTarget);
                                //this.Api.UserData.Table.Row.CommonFuncs.ForDataList.ReverseFunc();
                            };
                        });
                },
                SearchRow: {
                    Buttons: {
                        PrintToPrinter: {
                            Preview: (inJVarThis) => {
                                let PromiseArray = [];
                                let jVarLocalHtmlCard = inJVarThis.currentTarget.closest(".card");

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                                let jVarLocalFetchDataUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/SearchRow/Preview?inJsonConfig=${jVarLocalHtmlCard.dataset.jsonconfig}&inItemConfig=${jVarLocalHtmlCard.dataset.itemconfig}`;

                                let jVarLocalTrElements = jVarLocalHtmlCard.querySelectorAll(".card-body table tbody tr");
                                let jVarLocalFetchPostData = [...jVarLocalTrElements].map((LoopItem) => {
                                    return LoopItem.dataset.pk;
                                });

                                PromiseArray.push(fetch(`${window.location.origin}/${jVarLocalRoute}/Ui/Preview/Bill/PreviewHbs`));
                                PromiseArray.push(fetch(jVarLocalFetchDataUrl, {
                                    method: "post",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(jVarLocalFetchPostData)
                                }));

                                Promise.all(PromiseArray)
                                    .then(responses => {
                                        return Promise.all(responses.map((LoopItem, LoopIndex) => {
                                            if (LoopIndex === 0) { return LoopItem.text() };
                                            if (LoopIndex === 1) { return LoopItem.json() };
                                        }));
                                    }).then(responses => {
                                        // all responses are resolved successfully
                                        let jVarLocalHtml = responses[0];
                                        let jVarLocalJson = responses[1];

                                        let template = Handlebars.compile(jVarLocalHtml);
                                        let LocalHtml = "";

                                        jVarLocalJson.DataFromServer.forEach(element => {
                                            LocalHtml += template(element);
                                        });
                                        this.Api.UserData.Table.SearchRow.Buttons.PrintToPrinter.PreparePrintButton({ inHtmlToInsert: LocalHtml });
                                    });
                            },
                            PreparePrintButton: ({ inHtmlToInsert }) => {
                                let jVarLocalPrintDiv = document.createElement("div");
                                let jVarLocalButtonDiv = document.createElement("div");
                                let jVarLocalButton = document.createElement("button");

                                jVarLocalPrintDiv.setAttribute("id", "divIdDoubleBillPreviews");

                                jVarLocalButton.setAttribute("class", "btn btn-default");
                                jVarLocalButton.innerText = "print";
                                jVarLocalButton.setAttribute("onclick", "jVarGlobalClientObject.Print.ToPrinter({ PrintDivName:'divIdDoubleBillPreviews' })");

                                jVarLocalButtonDiv.appendChild(jVarLocalButton);
                                jVarLocalPrintDiv.innerHTML = inHtmlToInsert;

                                document.getElementById("KCont1").appendChild(jVarLocalButtonDiv);
                                document.getElementById("KCont1").appendChild(jVarLocalPrintDiv);

                                //document.getElementById("KCont1").insertAdjacentHTML("beforeend", );

                                // inHtmlToInsert

                            }
                        }
                    },
                    CreateNew: {
                        Footer: (inEvent) => {
                            inEvent.preventDefault();
                            let LocalCard = inEvent.currentTarget.closest(".card");
                            let jVarLocalTableFooterRow = LocalCard.querySelector(" table tfoot tr[data-footertype]");

                            if (jVarLocalTableFooterRow === null) {
                                this.HTMLPrepare.jFBS4Alerts.AppendtoKCont1.dangerClosable({ inJVarDataToDisplay: "No footer" });
                            };

                            jVarLocalTableFooterRow.style = "display:normal";
                            let jVarLocalTableFooterCells = LocalCard.querySelector(" table tfoot tr[data-footertype] td input");
                            jVarLocalTableFooterCells.focus();
                        }
                    }
                },
                Row: {
                    Update: ({ inEvent }) => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let jVarClosestModalContent = inEvent.currentTarget.closest(".modal-content");
                        let jVarLocalForm = jVarClosestModalContent.querySelector("form");

                        let jVarLocalJsonConfig = jVarLocalForm.dataset.jsonconfig;
                        let jVarLocalItemConfig = jVarLocalForm.dataset.itemconfig;
                        let jVarLocalpk = jVarLocalForm.dataset.pk;
                        let jVarLocalinsertkey = jVarLocalForm.dataset.insertkey;
                        let jVarLocalBodyData = this.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl });

                        fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/Row/Update/${jVarLocalJsonConfig}/${jVarLocalItemConfig}/${jVarLocalpk}/${jVarLocalinsertkey}`,
                            {
                                method: "post",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({})
                            }).then(response => {
                                if (!response.ok) { throw new Error(response.statusText) };

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                                    jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                                };
                            });
                    },
                    Delete: ({ inEvent }) => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let JsonPK = inEvent.currentTarget.closest("tr").dataset.pk;
                        let jVarLocalItemConfig = this.Api.UserData.CommonFuncs.PrepareItemConfig();
                        let jVarLocalFolderName = jVarLocalItemConfig.FolderName;
                        let jVarLocalFileName = jVarLocalItemConfig.FileName;
                        let jVarLocalItemName = jVarLocalItemConfig.ItemName;
                        let jVarLocalScreenName = jVarLocalItemConfig.ScreenName;

                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!',
                            focusCancel: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/Row/Delete?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&PK=${JsonPK}`)
                                    .then(response => {
                                        if (!response.ok) { throw new Error(response.statusText) };

                                        return response.json();
                                    }).then((FetchData) => {
                                        if (FetchData.KTF) {
                                            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                                            jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                                        };
                                    });

                                this.ModalPopUp.StartFunc({ inType: "PostDelete" });
                            }
                        });
                    },
                    DeleteNew: ({ inEvent }) => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                        let JsonPK = inEvent.currentTarget.closest("tr").dataset.pk;

                        let jVarLocalHtmlCard = inEvent.currentTarget.closest(".card");
                        let jVarLocalPK = jVarLocalHtmlCard.dataset.pk;
                        let jVarLocalJsonConfig = jVarLocalHtmlCard.dataset.jsonconfig;
                        let jVarLocalItemConfig = jVarLocalHtmlCard.dataset.itemconfig;
                        let jVarLocalInsertKey = jVarLocalHtmlCard.dataset.insertkey;

                        Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!',
                            focusCancel: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/Row/Delete/WithInsertKey?JsonConfig=${jVarLocalJsonConfig}&ItemConfig=${jVarLocalItemConfig}&InsertKey=${jVarLocalInsertKey}&inPK=${jVarLocalPK}&inRowPK=${JsonPK}`)
                                    .then(response => {
                                        if (!response.ok) { throw new Error(response.statusText) };

                                        return response.json();
                                    }).then((FetchData) => {
                                        if ("KTF" in FetchData) {
                                            if (FetchData.KTF) {
                                                jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                                                jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                                                //   this.ModalPopUp.StartFunc({ inType: "PostDelete" });
                                                if ("KReason" in FetchData) {
                                                    this.ModalPopUp.StartFunc({ inType: "PostDelete + KReason", inKReason: FetchData.KReason });
                                                } else {
                                                    this.ModalPopUp.StartFunc({ inType: "PostDelete" });
                                                };
                                            } else {
                                                if ("KReason" in FetchData) {
                                                    this.ModalPopUp.StartFunc({ inType: "ShowReason", inKReason: FetchData.KReason });
                                                };
                                            };
                                        };
                                    });
                            }
                        });
                    },
                    Show: ({ inEvent }) => {
                        let jVarLocalcurrentTarget = inEvent.currentTarget;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let JsonPK = inEvent.currentTarget.closest("tr").dataset.pk;
                        let jVarLocalItemConfig = this.Api.UserData.CommonFuncs.PrepareJsonAndItemConfig({ inCurrentTarget: jVarLocalcurrentTarget });

                        let jVarLocalFolderName = jVarLocalItemConfig.FolderName;
                        let jVarLocalFileName = jVarLocalItemConfig.FileName;
                        let jVarLocalItemName = jVarLocalItemConfig.ItemName;
                        let jVarLocalScreenName = jVarLocalItemConfig.ScreenName;

                        fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/Row/Show?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&PK=${JsonPK}`)
                            .then(response => {
                                if (!response.ok) { throw new Error(response.statusText) };

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                                    jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();

                                    document.getElementById("KSHtmlFindRow").dataset.pk = JsonPK;
                                    this.Api.UserData.Table.Row.CommonFuncs.ForDataList.ReverseFunc();
                                };
                            });
                    },
                    Edit: {
                        PopUp: ({ inEvent }) => {
                            let LocalCurrentTarget = inEvent.currentTarget;
                            let JsonPK = parseInt(LocalCurrentTarget.closest("tr").dataset.pk);

                            let jVarLocalPopUpAlter = document.getElementById('AlterPopUpDataId');
                            let jVarLocalTemplate = document.getElementById("Vertical/KVertical/CardBody").innerHTML;

                            let jVarLocalGlobalPresentViewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData[0]));
                            jVarLocalGlobalPresentViewData.HTMLControlType = "Vertical"

                            this.Api.UserData.Table.Row.Edit.CommonFuncs.RowToVertical({
                                inTableData: jVarLocalGlobalPresentViewData.KData.TableData, inRowPk: JsonPK, inTableColumns: jVarLocalGlobalPresentViewData.KData.TableColumns,
                                inTableInfo: jVarLocalGlobalPresentViewData.KData.TableInfo
                            });

                            jVarLocalPopUpAlter.querySelector(".modal-body").innerHTML = Handlebars.compile(jVarLocalTemplate)(jVarLocalGlobalPresentViewData);
                            var myModal = new bootstrap.Modal(jVarLocalPopUpAlter, {
                                keyboard: false
                            });

                            myModal.show();
                        },
                        CommonFuncs: {
                            RowToVertical: ({ inTableData, inRowPk, inTableColumns, inTableInfo }) => {
                                let jVarLocalColumnIndexNeeded = inTableColumns.findIndex(element => element.DataAttribute === inTableInfo.kPK);
                                let jVarLocalTableRowNeeded = inTableData.find(element => {
                                    return parseInt(element.DisplayText[jVarLocalColumnIndexNeeded].CellValue) === inRowPk;
                                });

                                jVarLocalTableRowNeeded.DisplayText.forEach((element, LoopIndex) => {
                                    inTableColumns[LoopIndex].DefaultValue = element.CellValue;
                                });
                            }
                        }
                    },
                    Barcode: {
                        Print: ({ inEvent }) => {
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                            let JsonPK = inEvent.currentTarget.closest("tr").dataset.pk;
                            let jVarLocalItemConfig = this.Api.UserData.CommonFuncs.PrepareItemConfig();

                            let jVarLocalFolderName = jVarLocalItemConfig.FolderName;
                            let jVarLocalFileName = jVarLocalItemConfig.FileName;
                            let jVarLocalItemName = jVarLocalItemConfig.ItemName;
                            let jVarLocalScreenName = jVarLocalItemConfig.ScreenName;

                            Swal.fire({
                                title: 'Enter Number Of Copies',
                                input: 'text',
                                inputAttributes: {
                                    autocapitalize: 'off'
                                },
                                showCancelButton: true,
                                confirmButtonText: 'OK',
                                showLoaderOnConfirm: true,
                                preConfirm: (Copies) => {
                                    return fetch(`/${jVarLocalRoute}/Barcode/Barcode/Print?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&PK=${JsonPK}&inCopies=${Copies}`)
                                        .then(response => {
                                            if (!response.ok) {
                                                throw new Error(response.statusText)
                                            }
                                            return response.json()
                                        })
                                        .catch(error => {
                                            Swal.showValidationMessage(
                                                `Request failed: ${error}`
                                            )
                                        })
                                },
                                allowOutsideClick: () => !Swal.isLoading()
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        //title: `${result.value.login}'s avatar`,
                                        title: "Printed Successfully",
                                        imageUrl: result.value.avatar_url
                                    })
                                }
                            });
                        }
                    },
                    CommonFuncs: {
                        ForDataList: {
                            ReverseFunc: () => {
                                try {
                                    let jVarLocalDataListForReverse = document.getElementById("KCont1").querySelectorAll("input[list][data-datalistreverse='true']");

                                    let jVarLocalDataListValue;

                                    jVarLocalDataListForReverse.forEach((LoopItem) => {
                                        jVarLocalDataListValue = this.Api.UserData.Table.Row.CommonFuncs.ForDataList.collectionContains({
                                            collection: LoopItem.list.options,
                                            searchText: LoopItem.dataset.ksdatalistvalue
                                        });

                                        LoopItem.value = jVarLocalDataListValue;
                                    });

                                } catch (error) {
                                    console.log("error : ", error);
                                };

                            },
                            collectionContains: ({ collection, searchText }) => {
                                for (var i = 0; i < collection.length; i++) {

                                    //  console.log("--- : ", collection[i].text, searchText);

                                    if (collection[i].text === searchText) {
                                        return collection[i].value;
                                    }
                                }
                                return "";
                            }
                        }
                    }
                },
                Footer: {
                    Common: {
                        CheckBeforeSave: ({ inJVarTableFooter }) => {
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
                        },
                        jFPrepareDataFromFooterRow: ({ inTableID }) => {
                            let jvarLocalReturnArray = [];
                            let jvarLocalObject = {};
                            let jVarLocalFindOption;

                            inTableID.forEach((loopItem) => {
                                jvarLocalObject = {};
                                jvarLocalObject.name = loopItem.name;

                                if (loopItem.list === null) {
                                    jvarLocalObject.value = loopItem.value;
                                } else {
                                    jVarLocalFindOption = loopItem.list.querySelector(`option[value='${loopItem.value}']`);

                                    if (jVarLocalFindOption !== null) {
                                        jvarLocalObject.value = jVarLocalFindOption.innerText;
                                    }
                                };

                                jvarLocalReturnArray.push(jvarLocalObject);
                            });

                            return jvarLocalReturnArray;
                        },
                        SaveAndShowOnScreen: ({ inJVarParentElementToBeRetained, inDataToShow }) => {
                            inJVarParentElementToBeRetained.innerHTML = "";
                            let jVarLocalHTMLContent;
                            let jVarLocalDivToAppend = document.createElement("div");
                            jVarGlobalPresentViewData[0].KData.TableInfo.FooterType.CreateNewRow.Style = "";

                            jVarLocalHTMLContent = Handlebars.compile(jVarGlobalHBSData.Global.Common)(jVarGlobalPresentViewData);
                            jVarLocalDivToAppend.innerHTML = jVarLocalHTMLContent;

                            inJVarParentElementToBeRetained.appendChild(JVarGlobalAPICalls.HTMLPrepare.jFBS4Alerts.PrimaryClosableRet({ inJVarDataToDisplay: inDataToShow }));

                            inJVarParentElementToBeRetained.appendChild(jVarLocalDivToAppend);
                            inJVarParentElementToBeRetained.querySelectorAll("input[data-dataattribute]")[0].focus();
                        }
                    },
                    jFSaves: (inEvent) => {
                        inEvent.preventDefault();
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let jVarLocalHtmlCard = inEvent.currentTarget.closest(".card");
                        let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalTableFooterCreateRow = jVarLocalCurrentTarget.closest("[data-footertype='CreateNewRow']");

                        let jVarLocalPK = jVarLocalHtmlCard.dataset.pk;
                        let jVarLocalJsonConfig = jVarLocalHtmlCard.dataset.jsonconfig;
                        let jVarLocalItemConfig = jVarLocalHtmlCard.dataset.itemconfig;
                        let jVarLocalInsertKey = jVarLocalHtmlCard.dataset.insertkey;

                        if (this.Api.UserData.Table.Footer.Common.CheckBeforeSave({ inJVarTableFooter: jVarLocalTableFooterCreateRow })) {

                            let jvarLocalReturnArray = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

                            fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/Footer/Save?JsonConfig=${jVarLocalJsonConfig}&ItemConfig=${jVarLocalItemConfig}&InsertKey=${jVarLocalInsertKey}&inPK=${jVarLocalPK}`, {
                                method: "post",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(jvarLocalReturnArray)
                            })
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    if (dataFromApi.KTF === true) {
                                        if (dataFromApi.hasOwnProperty("DataFromServer")) {
                                            let jVarLocalElementToFocus;

                                            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(dataFromApi.DataFromServer);
                                            jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                                        } else {

                                        };
                                    } else {
                                        Swal.fire(dataFromApi.KReason);
                                    }
                                });
                        };
                    },
                    KeyPress: {
                        EnterToServer: ({ inEvent }) => {
                            if (inEvent.keyCode === 13) {

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                                let jVarLocalinEvent = inEvent.currentTarget;
                                let jVarLocalHtmlCard = jVarLocalinEvent.closest(".card");
                                let LocalClosestTableFooter = jVarLocalinEvent.closest("tr");

                                let LocalFooterInputElements;
                                let LocalDataFromServer;

                                let jVarLocalJsonConfig = jVarLocalHtmlCard.dataset.jsonconfig;
                                let jVarLocalItemConfig = jVarLocalHtmlCard.dataset.itemconfig;
                                let jVarLocalInsertKey = jVarLocalHtmlCard.dataset.insertkey;

                                let LocalObjectToPost = {};
                                LocalObjectToPost[jVarLocalinEvent.name] = jVarLocalinEvent.value;

                                fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/Footer/KeyPress/EnterToServer?JsonConfig=${jVarLocalJsonConfig}&ItemConfig=${jVarLocalItemConfig}&InsertKey=${jVarLocalInsertKey}`, {
                                    method: "post",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(LocalObjectToPost)
                                }).then(response => {
                                    if (!response.ok) { throw new Error(response.statusText) };

                                    return response.json();
                                }).then((FetchData) => {

                                    if (FetchData.KTF) {
                                        LocalDataFromServer = FetchData.DataFromServer[0];
                                        //loop the inputs on screen to fill data from server if any found

                                        if (LocalClosestTableFooter === null) {
                                            LocalFooterInputElements = jVarLocalHtmlCard.querySelectorAll("[data-dataattribute]");
                                        } else {
                                            LocalFooterInputElements = LocalClosestTableFooter.querySelectorAll("td [data-dataattribute]");
                                        };

                                        LocalFooterInputElements.forEach((LoopItem) => {
                                            if (LocalDataFromServer.hasOwnProperty(LoopItem.name)) {
                                                LoopItem.value = LocalDataFromServer[LoopItem.name];
                                            };
                                        });
                                    } else {
                                        Swal.fire(FetchData.KReason);
                                    }
                                }).catch(error => {
                                    console.log("jVarLocalRoot : ", error);
                                });
                            }
                        },
                        EnterOnClient: ({ inEvent }) => {
                            if (inEvent.keyCode === 13) {
                                let jVarLocalCurrentTarget = inEvent.currentTarget;
                                let jVarLocalHtmlCardBody = jVarLocalCurrentTarget.closest("tr");

                                let jvarLocalDataArray = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

                                let jVarLocalClosestFooter = inEvent.currentTarget.closest("tr");

                                let jVarLocalTableFooterCells = jVarLocalClosestFooter.querySelectorAll(" table tfoot tr[data-footertype] td input");

                                if ("clienteval" in jVarLocalCurrentTarget.dataset) {
                                    if ("enteronclient" in jVarLocalCurrentTarget.dataset) {
                                        if (jVarLocalCurrentTarget.dataset.enteronclient === "true") {
                                            let jVarLocalClientEval = inEvent.currentTarget.dataset.clienteval;

                                            for (let index = 0; index < jVarLocalTableFooterCells.length; index++) {
                                                jVarLocalClientEval = this.Api.UserData.Table.Footer.KeyPress.CommonFuncs.EnterOnClient.ForLoopFunc({
                                                    injVarClientEval: jVarLocalClientEval,
                                                    injVarTableFooterCells: jVarLocalTableFooterCells, inIndex: index
                                                });
                                            };
                                            inEvent.currentTarget.value = eval(jVarLocalClientEval);
                                        } else {
                                            let jVarLocalLocalStorageObject = JSON.parse(jVarLocalCurrentTarget.dataset.keshavsoft);

                                            if ("LocalStorage" in jVarLocalLocalStorageObject) {
                                                this.Api.UserData.Table.Footer.KeyPress.CommonFuncs.EnterOnClient.ForLocalStorage({
                                                    inLocalStorageObject: jVarLocalLocalStorageObject.LocalStorage,
                                                    inDataArray: jvarLocalDataArray,
                                                    inClosestControl: jVarLocalHtmlCardBody
                                                });
                                            };
                                        };
                                    }
                                } else {

                                };

                            }
                        },
                        SaveOnEnter: ({ inEvent }) => {
                            if (inEvent.keyCode === 13) {
                                inEvent.currentTarget.closest("tr").querySelector("td button").click();
                            };
                        },
                        CommonFuncs: {
                            EnterOnClient: {
                                PullFromDataList: ({ collection, searchText }) => {
                                    for (var i = 0; i < collection.length; i++) {
                                        if (collection[i].value.indexOf(searchText) > -1) {
                                            return collection[i].text;
                                        }
                                    }
                                    return "";
                                },
                                ForLoopFunc: ({ injVarClientEval, injVarTableFooterCells, inIndex }) => {
                                    let jVarLocalReturnData;

                                    // if (injVarTableFooterCells[inIndex].value === "") {
                                    //     injVarTableFooterCells[inIndex].value = 0;
                                    // }

                                    jVarLocalReturnData = injVarClientEval.replace(`{{${injVarTableFooterCells[inIndex].id}}}`, parseFloat(injVarTableFooterCells[inIndex].value));

                                    return jVarLocalReturnData;
                                },
                                compare: (a, b, keys) => keys.every(k => a[k] === b[k]),
                                DataListPopulate: ({ inDataList, inDataToPopulate }) => {
                                    let LocalDataList = inDataList;
                                    let LocalDataListOption;
                                    let LocalLoopArray;

                                    LocalDataList.innerHTML = "";

                                    inDataToPopulate.forEach(LoopItemSub => {
                                        LocalLoopArray = Object.values(LoopItemSub);
                                        LocalDataListOption = document.createElement("option");

                                        if (LocalLoopArray.length > 1) {
                                            LocalDataListOption.setAttribute("value", LocalLoopArray[1]);
                                            LocalDataListOption.innerHTML = LocalLoopArray[0];
                                        }

                                        LocalDataList.appendChild(LocalDataListOption);
                                    });
                                },
                                ForLocalStorage: ({ inLocalStorageObject, inDataArray, inClosestControl }) => {
                                    console.log("inLocalStorageObject : ", inLocalStorageObject);

                                    let jVarLocalLocalStorageNeeded = localStorage.getItem(inLocalStorageObject.PullKey);
                                    let jVarLocalFilter = inLocalStorageObject.FilterKeys.split(",");
                                    let jVarLocalTf = false;
                                    let jVarLocalDataToShow;
                                    let LocalFooterInputElements;

                                    let jVarLocalFilteredArray = JSON.parse(jVarLocalLocalStorageNeeded).filter(element => {
                                        jVarLocalTf = this.Api.UserData.Table.Footer.KeyPress.CommonFuncs.EnterOnClient.compare(element, inDataArray, jVarLocalFilter);

                                        return jVarLocalTf;
                                    });

                                    jVarLocalDataToShow = jVarLocalFilteredArray[0];
                                    //loop the inputs on screen to fill data from server if any found
                                    LocalFooterInputElements = inClosestControl.querySelectorAll("td [data-dataattribute]");
                                    console.log("LocalFooterInputElements : ", LocalFooterInputElements);

                                    LocalFooterInputElements.forEach((LoopItem) => {
                                        if (jVarLocalDataToShow.hasOwnProperty(LoopItem.name)) {
                                            LoopItem.value = jVarLocalDataToShow[LoopItem.name];
                                        };
                                    });


                                    //console.log("jVarLocalLocalStorageNeeded : ", jVarLocalLocalStorageNeeded, inLocalStorageObject, jVarLocalFilteredArray);

                                },
                                ForLocalStorageBuildDataListDynamically: ({ inLocalStorageObject, inDataArray, inClosestControl }) => {
                                    let jVarLocalLocalStorageNeeded = localStorage.getItem(inLocalStorageObject.PullKey);
                                    let jVarLocalFilter = inLocalStorageObject.FilterKeys.split(",");
                                    let jVarLocalReturnKeys = inLocalStorageObject.ReturnKeys;
                                    let jVarLocalTargetKey = inLocalStorageObject.TargetKey;

                                    let jVarLocalTargetControlName = inLocalStorageObject.TargetColumnDataAttribute;
                                    let jVarLocalTargetControl = inClosestControl.querySelector(`[name="${jVarLocalTargetControlName}"]`);

                                    let jVarLocalTargetControlDataList = jVarLocalTargetControl.list;

                                    let jVarLocalTf = false;

                                    let jVarLocalFilteredArray = JSON.parse(jVarLocalLocalStorageNeeded).filter(element => {
                                        jVarLocalTf = this.Api.UserData.Table.Footer.KeyPress.CommonFuncs.EnterOnClient.compare(element, inDataArray, jVarLocalFilter);

                                        return jVarLocalTf;
                                    });

                                    let jVarLocalValuesNeeded = jVarLocalFilteredArray.map(LoopItem => LoopItem[jVarLocalReturnKeys]);
                                    let jVarLocalValuesNeededUnique = [...new Set(jVarLocalValuesNeeded)];

                                    let jVarLocalLocalStorageDataForTarget = JSON.parse(localStorage.getItem(jVarLocalTargetKey)).filter(element => {
                                        if (jVarLocalValuesNeededUnique.find(e => e === element.pk) !== undefined) {
                                            return true;
                                        }
                                    });
                                    jVarLocalTargetControl.value = "";
                                    this.Api.UserData.Table.Footer.KeyPress.CommonFuncs.EnterOnClient.DataListPopulate({
                                        inDataList: jVarLocalTargetControlDataList,
                                        inDataToPopulate: jVarLocalLocalStorageDataForTarget
                                    });
                                }
                            }
                        }
                    }
                },
                Preview: {
                    BringHtml: ({ inEvent }) => {
                        let PromiseArray = [];
                        let JsonPK = document.getElementById("KSHtmlFindRow").dataset.pk;

                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jvarFolderName = document.getElementById("FolderSelected").value;
                        let jvarJsonFileName = document.getElementById("FileSelected").value;
                        let jVarLocalItemName = document.getElementById("ItemSelected").value;

                        PromiseArray.push(fetch(`${window.location.origin}/${jVarLocalRoute}/Ui/Preview/Bill`));
                        PromiseArray.push(fetch(`${window.location.origin}/${jVarLocalRoute}/Ui/Preview/Bill/PreviewHbs`));
                        PromiseArray.push(fetch(`${window.location.origin}/${jVarLocalRoute}/Api/Preview/ShowData?inFolderName=${jvarFolderName}&inJsonFileName=${jvarJsonFileName}&inItemName=${jVarLocalItemName}&&PK=${JsonPK}`));

                        Promise.all(PromiseArray)
                            .then(responses => {
                                return Promise.all(responses.map((LoopItem, LoopIndex) => {
                                    switch (LoopIndex) {
                                        case 0:
                                        case 1:
                                            return LoopItem.text();
                                            break;
                                        case 2:
                                            return LoopItem.json();

                                            break;
                                        default:
                                            break;
                                    };
                                }));
                            }).then(responses => {
                                // all responses are resolved successfully
                                for (let LoopIndex = 0; LoopIndex < responses.length; LoopIndex++) {
                                    const jVarLocalLoopValue = responses[LoopIndex];
                                    switch (LoopIndex) {
                                        case 0:
                                        case 1:
                                            document.getElementById("KCont1").innerHTML += jVarLocalLoopValue;
                                            break;
                                        case 2:
                                            jVarGlobalPresentViewData = jVarLocalLoopValue.DataFromServer;
                                            var template = Handlebars.compile(document.getElementById("PreviewHbsId").innerHTML);
                                            document.getElementById("divIdDoubleBillPreviews").innerHTML = template(jVarGlobalPresentViewData);
                                            break;
                                        default:
                                            break;
                                    };
                                }

                            });
                    },
                    ToPrinter: ({ PrintDivName }) => {
                        var prtGrid = document.getElementById(PrintDivName);

                        var prtwin = window.open('', 'PrintData', 'left=100,top=100,width=800,height=800,toobar=0,scrollbars=1, status=0,resizable=1');
                        prtwin.document.write('<style type="text/css" media="print,screen">.kinline{display: inline-grid;border-bottom: 300px} .kbackgroundClass{ position: absolute;text-align: center;z-index: -1;background: white;display: block;min-height: 20 %;min-width: 50 %;color: yellow;}.divClass {z-index: -1;} .bg-text {margin-left: 100px;margin-top: 200px;color: WHITESMOKE;font-size: 50px;transform: rotate(800deg);-webkit-transform: rotate(325deg);opacity :0.5;}</style>');

                        prtwin.document.write(prtGrid.outerHTML);
                        setTimeout(function () {
                            prtwin.document.close();
                            prtwin.focus();
                            prtwin.print();
                            prtwin.close();
                        }, 250);
                    }
                }
            },
            Vertical: {
                KeyPress: {
                    SaveOnEnter: ({ inEvent }) => {
                        console.log(inEvent.currentTarget);
                    },
                    EnterToServer: ({ inEvent }) => {
                        if (inEvent.keyCode === 13) {
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                            let LocalCurrentTarget = inEvent.currentTarget;

                            let jVarLocalHtmlCard = inEvent.currentTarget.closest(".card");

                            let jVarLocalJsonConfigAndItemConfig = this.Api.UserData.Vertical.CommonFuncs.PullCardDataAttributes.JsonConfigAndItemConfig({ inHtmlCard: jVarLocalHtmlCard });

                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Vertical/KeyPress/EnterToServer?inJsonConfig=${JSON.stringify(jVarLocalJsonConfigAndItemConfig.JsonConfig)}&inItemConfig=${JSON.stringify(jVarLocalJsonConfigAndItemConfig.ItemConfig)}`;
                            let LocalObjectToPost = {};
                            // LocalObjectToPost.DataToServer = {};
                            LocalObjectToPost[LocalCurrentTarget.name] = LocalCurrentTarget.value;

                            fetch(jVarLocalFetchUrl, {
                                method: "post",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(LocalObjectToPost)
                            }).then(response => {
                                if (!response.ok) { throw new Error(response.statusText) };

                                return response.json();
                            }).then((FetchData) => {
                                console.log("keshav table footer : ", FetchData);
                            }).catch(error => {
                                console.log("jVarLocalRoot : ", error);
                            });
                        }
                    }
                },
                CreateFromData: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                    let jVarLocalItemConfig = this.Api.UserData.CommonFuncs.PrepareItemConfig();

                    let jVarLocalFolderName = jVarLocalItemConfig.FolderName;
                    let jVarLocalFileName = jVarLocalItemConfig.FileName;
                    let jVarLocalItemName = jVarLocalItemConfig.ItemName;
                    let jVarLocalScreenName = jVarLocalItemConfig.ScreenName;

                    fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Vertical/CreateFromData/ShowWithDataPK?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`)
                        .then(response => {
                            if (!response.ok) { throw new Error(response.statusText) };

                            return response.json();
                        }).then((FetchData) => {
                            if (FetchData.KTF) {
                                jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                                jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                            };
                        }).catch(error => {
                            Swal.showValidationMessage(
                                `Request failed: ${error}`
                            );
                        });
                },
                Footer: {
                    Edit: {
                        StartFunc: ({ inEvent }) => {
                            let jVarLocalCurrentTarget = inEvent.currentTarget;
                            let jVarLocalCurrentTargetParentColumn = jVarLocalCurrentTarget.closest(".EditButtonColumn")
                            let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".card");
                            let jVarLocalFieldset = jVarLocalHtmlCard.querySelector("fieldset");
                            let jVarLocalUpateButtonColumn = jVarLocalHtmlCard.querySelector(".card-footer .UpdateButtonColumn");

                            jVarLocalFieldset.removeAttribute("disabled");
                            jVarLocalUpateButtonColumn.classList.remove("visually-hidden");

                            jVarLocalCurrentTargetParentColumn.classList.add("visually-hidden");
                        },
                        StartFunc1: ({ inEvent }) => {
                            let jVarLocalCurrentTarget = inEvent.currentTarget;
                            let jVarLocalCurrentTargetParentColumn = jVarLocalCurrentTarget.closest(".EditButtonColumn")
                            let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".card");
                            let jVarLocalFieldset = jVarLocalHtmlCard.querySelector("fieldset");
                            let jVarLocalUpateButtonColumn = jVarLocalHtmlCard.querySelector(".card-footer .UpdateButtonColumn");

                            jVarLocalFieldset.removeAttribute("disabled");
                            jVarLocalUpateButtonColumn.classList.remove("visually-hidden");

                            jVarLocalCurrentTargetParentColumn.classList.add("visually-hidden");
                        },
                        CommonFuncs: {
                            ChangeClasses: ({ inHtmlCard }) => {
                                let jVarLocalHtmlCard = inHtmlCard;
                                let jVarLocalFieldset = jVarLocalHtmlCard.querySelector("fieldset");
                                let jVarLocalUpateButton = jVarLocalHtmlCard.querySelector(".card-footer .UpdateButtonColumn");
                                let jVarLocalEditButton = jVarLocalHtmlCard.querySelector(".card-footer .EditButtonColumn");
                                let jVarLocalSuccessAlertColumn = jVarLocalHtmlCard.querySelector(".card-footer .SuccessAlertColumn");
                                console.log("jVarLocalEditButton : ", jVarLocalEditButton);
                                jVarLocalSuccessAlertColumn.classList.remove("visually-hidden");
                                jVarLocalHtmlCard.classList.add("border-success");
                                jVarLocalFieldset.setAttribute("disabled", "");
                                jVarLocalUpateButton.classList.add("visually-hidden");
                                jVarLocalEditButton.classList.remove("visually-hidden");
                            }
                        }
                    },
                    Update: {
                        StartFunc: ({ inEvent }) => {
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                            let jVarLocalHtmlCard = inEvent.currentTarget.closest(".card");
                            let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".card-body");

                            let jVarLocalJsonConfigAndItemConfig = this.Api.UserData.Vertical.CommonFuncs.PullCardDataAttributes.JsonConfigAndItemConfig({ inHtmlCard: jVarLocalHtmlCard });

                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Vertical/Update/${jVarLocalJsonConfigAndItemConfig.JsonConfig.inFolderName}/${jVarLocalJsonConfigAndItemConfig.JsonConfig.inJsonFileName}/${jVarLocalJsonConfigAndItemConfig.ItemConfig.inItemName}/${jVarLocalJsonConfigAndItemConfig.ItemConfig.inScreenName}/${jVarLocalJsonConfigAndItemConfig.pk}`;

                            let jVarLocalFetchPostData = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

                            fetch(jVarLocalFetchUrl, {
                                method: "post",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(jVarLocalFetchPostData)
                            }).then(response => response.json())
                                .then(dataFromApi => {
                                    console.log("dataFromApi : ", dataFromApi);
                                    this.Api.UserData.Vertical.Footer.Update.CommonFuncs.PostUpdate({
                                        inDataFromSave: dataFromApi,
                                        inHtmlCard: jVarLocalHtmlCard
                                    });

                                    if (dataFromApi.KTF) {
                                        // this.Api.UserData.Vertical.Footer.Update.CommonFuncs.ChangeClasses({ inHtmlCard: jVarLocalHtmlCard });
                                    };
                                });
                        },
                        StartFunc1: ({ inEvent }) => {
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                            let jVarLocalHtmlCard = inEvent.currentTarget.closest(".card");
                            let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".card-body");

                            let jVarLocalJsonConfigAndItemConfig = this.Api.UserData.Vertical.CommonFuncs.PullCardDataAttributes.JsonConfigAndItemConfig({ inHtmlCard: jVarLocalHtmlCard });

                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Vertical/Update/${jVarLocalJsonConfigAndItemConfig.JsonConfig.inFolderName}/${jVarLocalJsonConfigAndItemConfig.JsonConfig.inJsonFileName}/${jVarLocalJsonConfigAndItemConfig.ItemConfig.inItemName}/${jVarLocalJsonConfigAndItemConfig.ItemConfig.inScreenName}/${jVarLocalJsonConfigAndItemConfig.pk}`;

                            let jVarLocalFetchPostData = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

                            fetch(jVarLocalFetchUrl, {
                                method: "post",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(jVarLocalFetchPostData)
                            }).then(response => response.json())
                                .then(dataFromApi => {
                                    console.log("dataFromApi : ", dataFromApi);
                                    if (dataFromApi.KTF) {
                                        this.Api.UserData.Vertical.Footer.Update.CommonFuncs.ChangeClasses({ inHtmlCard: jVarLocalHtmlCard });
                                    };
                                });
                        },
                        CommonFuncs: {
                            ChangeClasses: ({ inHtmlCard }) => {
                                let jVarLocalHtmlCard = inHtmlCard;
                                let jVarLocalFieldset = jVarLocalHtmlCard.querySelector("fieldset");
                                let jVarLocalUpateButton = jVarLocalHtmlCard.querySelector(".card-footer .UpdateButtonColumn");
                                let jVarLocalEditButton = jVarLocalHtmlCard.querySelector(".card-footer .EditButtonColumn");
                                let jVarLocalSuccessAlertColumn = jVarLocalHtmlCard.querySelector(".card-footer .SuccessAlertColumn");
                                console.log("jVarLocalEditButton : ", jVarLocalEditButton);
                                jVarLocalSuccessAlertColumn.classList.remove("visually-hidden");
                                jVarLocalHtmlCard.classList.add("border-success");
                                jVarLocalFieldset.setAttribute("disabled", "");
                                jVarLocalUpateButton.classList.add("visually-hidden");
                                jVarLocalEditButton.classList.remove("visually-hidden");
                            },
                            PostUpdate: ({ inDataFromSave, inHtmlCard }) => {
                                if (inDataFromSave.KTF) {
                                    if (inDataFromSave.hasOwnProperty("DataFromServer")) {
                                        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(inDataFromSave.DataFromServer);
                                        return jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                                    } else {
                                        this.CommonFuncs.ChangeClasses.ToSuccess({ inHtmlCard });
                                    };
                                }
                            }
                        }
                    },
                    Save: {
                        StartFunc: (injVarThis) => {
                            let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".KTableDivClass");
                            let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".KCardBody");

                            if (this.Api.UserData.Vertical.Footer.Save.CommonFuncs.CheckBeforeSave(jVarLocalHtmlCardBody)) {
                                let jVarLocalFetchPostData = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });
                                this.Api.UserData.Vertical.Footer.Save.CommonFuncs.PullIpAddressThenSaveOnly({ inHtmlCard: jVarLocalHtmlCard, inFetchPostData: jVarLocalFetchPostData }).then(PromiseData => {
                                })
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
                        ForSubTable: {
                            StartFunc: (injVarThis) => {
                                let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                                let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".card-body");
                                //let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector("KCol-3");

                                if (this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.CheckBeforeSave(jVarLocalHtmlCardBody)) {
                                    let jVarLocalFetchPostData = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });
                                    this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.PullIpAddressThenSaveOnly({ inHtmlCard: jVarLocalHtmlCard, inFetchPostData: jVarLocalFetchPostData });
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
                                    return new Promise((resolve, reject) => {
                                        fetch("https://api.ipify.org/").then(response => response.text()).then((FetchIpData) => {
                                            jvarLocalReturnArray.push({ name: "ClientIP", value: FetchIpData });

                                            this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData }).then((PromiseData) => {
                                                resolve(PromiseData);
                                            }).catch((PromiseError) => {
                                                resolve(PromiseError);
                                            });
                                        }).catch((FetchIpError) => {
                                            this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.SaveOnlyFetch({ inHtmlCard, inFetchPostData }).then((PromiseData) => {
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
                                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Vertical/Save/SaveFirstRow?inJsonConfig=${JSON.stringify(jVarLocalJsonConfigAndItemConfig.JsonConfig)}&inItemConfig=${JSON.stringify(jVarLocalJsonConfigAndItemConfig.ItemConfig)}&InsertKey=${jVarLocalJsonConfigAndItemConfig.insertkey}`;

                                        fetch(jVarLocalFetchUrl, {
                                            method: "post",
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(inFetchPostData)
                                        })
                                            .then(response => response.json())
                                            .then(dataFromApi => {
                                                if (dataFromApi.KTF === false) {
                                                    Swal.fire(dataFromApi.KReason);
                                                    //this.CommonFuncs.ChangeClasses.ToDanger({ inJVarLocalHtmlCard: inHtmlCard });
                                                } else {
                                                    let jVarLocalKSHtmlFindRow = document.getElementById("KSHtmlFindRow");
                                                    if (jVarLocalKSHtmlFindRow !== null) {
                                                        jVarLocalKSHtmlFindRow.dataset.pk = dataFromApi.kPK;
                                                    };

                                                    this.Api.UserData.Vertical.Footer.Save.ForSubTable.CommonFuncs.PostSave({ inDataFromSave: dataFromApi, inHtmlCard });
                                                };
                                            });
                                    });
                                },
                                PostSave: ({ inDataFromSave, inHtmlCard }) => {
                                    if (inDataFromSave.KTF) {
                                        if (inDataFromSave.hasOwnProperty("DataFromServer")) {
                                            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(inDataFromSave.DataFromServer);
                                            jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                                        } else {
                                            this.CommonFuncs.ChangeClasses.ToSuccess({ inHtmlCard });
                                        };
                                    }
                                }
                            }
                        }
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
                    PreparePostData: {
                        ForSave: ({ jVarHtmlCardBody }) => {
                            let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

                            let jVarLocalFetchBodydata = {};

                            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;

                                switch (LoopItem.tagName) {
                                    case "INPUT":
                                        jVarLocalFetchBodydata[LoopItem.name] = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.CommonFuncs.ByTagName.ForTagInput({ inLoopItem: LoopItem });

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
                                                jVarLocalValue = this.Api.UserData.Vertical.CommonFuncs.PreparePostData.CommonFuncs.ByTagName.collectionContains({ collection: inLoopItem.list.options, searchText: inLoopItem.value });
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
                },
                CreateHtml: {
                    ForSubTable: () => {
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                        let jVarLocalItemConfig = this.Api.UserData.CommonFuncs.PrepareItemConfig();

                        let jVarLocalFolderName = jVarLocalItemConfig.FolderName;
                        let jVarLocalFileName = jVarLocalItemConfig.FileName;
                        let jVarLocalItemName = jVarLocalItemConfig.ItemName;
                        let jVarLocalScreenName = jVarLocalItemConfig.ScreenName;

                        fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Vertical/CreateFromData/ForSubTableWithUi?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`)
                            .then(response => {
                                if (!response.ok) { throw new Error(response.statusText) };

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                                    jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                                } else {
                                    Swal.fire(FetchData.KReason);
                                };
                            })
                            .catch(error => {
                                Swal.showValidationMessage(
                                    `Request failed: ${error}`
                                )
                            });
                    }
                }
            },
            CommonFuncs: {
                PrepareItemConfig: () => {
                    return {
                        FolderName: document.getElementById("FolderSelected").value,
                        FileName: document.getElementById("FileSelected").value,
                        ItemName: document.getElementById("ItemSelected").value,
                        ScreenName: document.getElementById("ScreenSelected").value
                    }
                },
                PrepareJsonAndItemConfig: ({ inCurrentTarget }) => {
                    let jVarLocalCard = inCurrentTarget.closest("div.card");
                    let jVarLocalCardDataset = jVarLocalCard.dataset;
                    let jVarLocalJsonConfig = JSON.parse(jVarLocalCardDataset.jsonconfig);
                    let jVarLocalItemConfig = JSON.parse(jVarLocalCardDataset.itemconfig);

                    let jVarLocalReturnData = {
                        FolderName: jVarLocalJsonConfig.inFolderName,
                        FileName: jVarLocalJsonConfig.inJsonFileName,
                        ItemName: jVarLocalItemConfig.inItemName,
                        ScreenName: jVarLocalItemConfig.inScreenName
                    };

                    return jVarLocalReturnData;
                }
            }
        },
        Reports: {
            ShowData: () => {
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                //let jVarLocalItemConfig = this.Api.Reports.CommonFuncs.PrepareItemConfig();

                //let jVarLocalItemName = jVarLocalItemConfig.ItemName;
                let jVarLocalItemName = "NormalLedger2";
                // let jVarLocalFromDate = document.getElementById("FromDate").value;
                // let jVarLocalToDate = document.getElementById("ToDate").value;
                let jVarLocalFetchBodydata = {};
                jVarLocalFetchBodydata.FromDate = document.getElementById("FromDate").value;
                jVarLocalFetchBodydata.ToDate = document.getElementById("ToDate").value;
                fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Reports/Ledger/ShowData?inItemName=${jVarLocalItemName}`, {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jVarLocalFetchBodydata)
                })
                    .then(response => {
                        if (!response.ok) { throw new Error(response.statusText) };

                        return response.json();
                    }).then((FetchData) => {
                        if (FetchData.KTF) {
                            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                            jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
                        };
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    });
            },
            VouchersConsider: () => {
                let jVarLocalHtmlRoute = jVarGlobalAdmin.Config.RouteStart.HtmlPath;
                let jVarLocalFetchUrl = `/${jVarLocalHtmlRoute}/Html/Admin/Reports/VouchersConsider.html`;

                fetch(`${jVarLocalFetchUrl}`)
                    .then(response => {
                        return jVarGlobalAdmin.Login.StatusCodeFuncs.Html.Code404({ inResponse: response });
                    }).then(dataForUi => {
                        if (dataForUi !== null) {
                            document.getElementById("KCont1").innerHTML = dataForUi;
                            let jVarLocalRoute = jVarGlobalAdmin.Config.RouteStart.Start;
                            let jVarLocalSubRoute = jVarGlobalAdmin.Config.RouteStart.SubRoute;
                            let LocalURL = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Items/ForDataList/?inFolderName=Reports&inJsonFileName=LedgerAuto.json`;

                            jVarGlobalAdmin.DataListFuncs.Fill.Items.SingleColumn({ inURL: LocalURL });

                        }
                    });
            },
            Update: {
                VouchersConsider: () => {
                    // let jVarLocalFetchUrl = jVarGlobalAdmin.Api.Columns.CommonFuncs.PrepareUrl.Use3Names({ inEndPointName: "ColumnData" });
                    let jVarLocalFetchUrl = this.Api.Reports.CommonFuncs.PrepareUrl.Use3Names({ inEndPointName: "VouchersConsider" });
                    let jVarLocalFetchBodydata = this.Api.Reports.CommonFuncs.PreparePostData.ForUpdate();

                    fetch(jVarLocalFetchUrl, {
                        method: "post",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(jVarLocalFetchBodydata)
                    })
                        .then(response => response.text())
                        .then(dataFromApi => {
                            let jVarLocalData = JSON.parse(dataFromApi);
                            console.log("jVarLocalData : ", jVarLocalData);
                            document.getElementById("VouchersConsiderCardId").classList.remove("border-success");
                            document.getElementById("VouchersConsiderCardId").classList.add("border-warning");
                        });
                },

            },
            CommonFuncs: {
                PrepareItemConfig: () => {
                    return {
                        ItemName: document.getElementById("ItemSelected").value,
                    }
                },
                PrepareUrl: {
                    Use3Names: () => {
                        let jVarLocalItemName = document.getElementById("ItemSelected").value;
                        let jVarLocalScreenName = document.getElementById("ScreenSelected").value;

                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                        return `/JSON/Api/Reports/Update/VouchersConsider?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;
                    },
                    Use3Names: ({ inEndPointName }) => {
                        let jVarLocalItemName = document.getElementById("ItemSelected").value;
                        let jVarLocalScreenName = document.getElementById("ScreenSelected").value;

                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        return `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Update/${inEndPointName}?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;
                    }
                },
                PreparePostData: {
                    ForUpdate: () => {
                        let jVarLocalHtmlNamesArray = document.getElementById("VouchersConsiderBodyId").querySelectorAll("[name]");

                        let jVarLocalFetchBodydata = {};

                        jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                            switch (LoopItem.type) {
                                case "checkbox":
                                    jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                    break;

                                default:
                                    jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                    break;
                            }
                        });

                        return jVarLocalFetchBodydata;
                    },
                    ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                        let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                        let jVarLocalFetchBodydata = {};

                        jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                            switch (LoopItem.type) {
                                case "checkbox":
                                    jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                    break;

                                default:
                                    jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                    break;
                            }
                        });
                        return jVarLocalFetchBodydata;
                    }
                },

                RemoveFormValidations: () => {
                    document.getElementById("ItemSelected").classList.remove("is-invalid");
                    document.getElementById("ItemSelected").classList.add("is-valid");

                    document.getElementById("ScreenSelected").classList.remove("is-invalid");
                    document.getElementById("ScreenSelected").classList.add("is-valid");

                }
            }
        },
        Menu: {
            Show: {
                ForTable: {
                    Recent: (inJVarThis) => {
                        this.NavBar.SetActiveItem(inJVarThis);

                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                        fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Menu/Show/ForTable/Recent`)
                            .then(response => {
                                if (!response.ok) { throw new Error(response.statusText) };

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                                    this.AppendToDOM.BuildFromArrayDataCommon();
                                };
                            })
                    }
                }
            }
        },
        PreLoad: {
            Masters: {
                FillDataFromServer: () => {
                    this.Api.PreLoad.Masters.CommonFuncs.ShowToastFuncs.ForDataList();

                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;

                    fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/Masters/PreLoad/ShowData`)
                        .then(response => {
                            if (!response.ok) { throw new Error(response.statusText) };

                            return response.json();
                        }).then((FetchData) => {
                            let jVarLocalDataListArray = FetchData.DataFromServer.filter(element => "DatalistID" in element);
                            let jVarLocalLocalStorageArray = FetchData.DataFromServer.filter(element => "LocalStorageKey" in element);

                            this.Api.PreLoad.Masters.CommonFuncs.InsertToDataList({ inData: jVarLocalDataListArray });
                            this.Api.PreLoad.Masters.CommonFuncs.InsertToLocalStorage({ inData: jVarLocalLocalStorageArray });
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
        },
        DataConfig: {
            DalPath: {
                Show: (injVarThis) => {
                    let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                    let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");

                    let jVarLocalRoute = this.Config.RouteStart.Start;

                    fetch(`/${jVarLocalRoute}/DataConfig/DalPath/Show`)
                        .then(response => {
                            if (!response.ok) { throw new Error(response.statusText) };

                            return response.json();
                        }).then((FetchData) => {
                            this.AdminApi.Config.TableColumns.ShowData.CommonFuncs.ShowOnScreen({ injVarData: FetchData, inJVarHtmlControl: jVarLocalHtmlFormControl });
                        }).catch(error => {
                            Swal.showValidationMessage(
                                `Request failed: ${error}`
                            )
                        });
                }

            }

        }
    };

    CommonFuncs = {
        PreparePostData: {
            ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                let jVarLocalFetchBodydata = {};

                jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                    switch (LoopItem.type) {
                        case "checkbox":
                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                            break;

                        default:
                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                            break;
                    }
                });

                return jVarLocalFetchBodydata;
            }
        },
        ChangeClasses: {
            Towarning: ({ inJVarLocalHtmlCard }) => {
                inJVarLocalHtmlCard.classList.remove("border-success");
                inJVarLocalHtmlCard.classList.add("border-warning");
            },
            ToDanger: ({ inJVarLocalHtmlCard }) => {
                inJVarLocalHtmlCard.classList.remove("border-success");
                inJVarLocalHtmlCard.classList.add("border-danger");
            },
            ToSuccess: ({ inHtmlCard }) => {
                inHtmlCard.classList.add("border-success");
            }
        },
        ShowSpinner: {
            ShowProcessStart: (inCurrentTarget) => {
                let jVarLocalShowProcess = inCurrentTarget.querySelector(".KSSpinner");
                let jVarLocalKSShowSvg = inCurrentTarget.querySelector(".KSShowSvg");
                //  console.log("jVarLocalShowProcess:", jVarLocalShowProcess);
                if (jVarLocalShowProcess !== null) {
                    jVarLocalShowProcess.classList.remove("visually-hidden");

                    if (jVarLocalKSShowSvg !== null) {
                        jVarLocalKSShowSvg.classList.add("visually-hidden");
                    };
                };
            },
            ShowProcessEnd: (inCurrentTarget) => {
                let jVarLocalShowProcess = inCurrentTarget.querySelector(".KSSpinner");
                let jVarLocalKSShowSvg = inCurrentTarget.querySelector(".KSShowSvg");
                jVarLocalShowProcess.classList.add("visually-hidden");

                if (jVarLocalKSShowSvg !== null) {
                    jVarLocalKSShowSvg.classList.remove("visually-hidden");
                };
                //jVarLocalKSShowSvg.classList.remove("visually-hidden");
            }
        }
    };

    AdminApi = {
        Config: {
            TableColumns: {
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });

                        if (jVarLocalUrlObject.KTF) {
                            let jVarLocalFetchUrl = this.AdminApi.Config.TableColumns.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inUrlObject: jVarLocalUrlObject });

                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    //this.AdminApi.Config.TableColumns.ShowData.CommonFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    //this.AdminApi.Config.TableColumns.ShowData.CommonFuncs.ChangeClasses({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    //         this.AdminApi.Config.TableColumns.ShowData.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                                    this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                });
                        };
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inUrlObject }) => {
                                let jVarLocalFolderName = inUrlObject.FolderName;
                                let jVarLocalFileName = inUrlObject.FileName;
                                let jVarLocalItemName = inUrlObject.ItemName;
                                let jVarLocalScreenName = inUrlObject.ScreenName;
                                let jVarLocalColumnName = inUrlObject.ColumnName;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/TableColumns/ShowData?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&inColumnName=${jVarLocalColumnName}`;

                                return jVarLocalFetchUrl;
                            }
                        },
                        ChangeClasses: ({ inJVarHtmlCard }) => {
                            console.log("inJVarHtmlCard : ", inJVarHtmlCard);
                            let jVarLocalFooterButtons = inJVarHtmlCard.querySelectorAll(".card-footer button");
                            console.log("jVarLocalFooterButtons : ", jVarLocalFooterButtons);
                            jVarLocalFooterButtons.forEach((LoopItem) => {
                                if (LoopItem.hasAttribute("disabled")) {
                                    LoopItem.attributes.removeNamedItem("disabled");
                                };
                            });
                        },
                        DefaultFocus: ({ inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            if (jVarLocalHtmlNamesArray.length > 0) {
                                jVarLocalHtmlNamesArray[0].focus();
                            };
                        },
                        ShowOnScreen: ({ injVarData, inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                if (injVarData.hasOwnProperty(LoopItem.name)) {
                                    this.AdminApi.Config.TableColumns.ShowData.CommonFuncs.ShowOnScreenSwitch({ inLoopItem: LoopItem, injVarData });
                                };
                            });
                        },
                        ShowOnScreenSwitch: ({ inLoopItem, injVarData }) => {
                            switch (inLoopItem.type) {
                                case "checkbox":
                                    inLoopItem.checked = injVarData[inLoopItem.name];
                                    break;

                                default:
                                    inLoopItem.value = injVarData[inLoopItem.name];
                                    break;
                            }
                        },

                    }
                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.Config.TableColumns.Update.CommonFuncs.CheckBeforeFetch();
                        let jVarLocalFetchUrl = this.AdminApi.Config.TableColumns.Update.CommonFuncs.PrepareUrl.ForUpdate({ inUrlObject: jVarLocalUrlObject });;
                        let jVarLocalFetchBodydata = this.AdminApi.Config.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.text())
                            .then(dataFromApi => {
                                let jVarLocalData = JSON.parse(dataFromApi);

                                if (jVarLocalData.KTF) {
                                    //this.AdminApi.Config.TableColumns.Update.CommonFuncs.ChangeClasses({ inJVarLocalHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                                    this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });
                                }
                            });
                    },
                    CommonFuncs: {
                        CheckBeforeFetch: () => {
                            let jVarReturnObject = {
                                KTF: false,
                                FolderName: document.getElementById("FolderSelected").value,
                                FileName: document.getElementById("FileSelected").value,
                                ItemName: document.getElementById("ItemSelected").value,
                                ScreenName: document.getElementById("ScreenSelected").value,
                                ColumnName: ""
                            };

                            let jVarLocalColumnSelected = document.getElementById("ColumnSelected");

                            if (jVarLocalColumnSelected !== null) {
                                jVarReturnObject.ColumnName = jVarLocalColumnSelected.value;
                            };

                            if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarReturnObject.ItemName })) {
                                if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ScreenSelected").list, inSearchValue: jVarReturnObject.ScreenName })) {
                                    jVarReturnObject.KTF = true;
                                } else {
                                    document.getElementById("ScreenSelected").focus();
                                    document.getElementById("ScreenSelected").classList.add("is-invalid");
                                };
                            } else {
                                document.getElementById("ItemSelected").focus();
                                document.getElementById("ItemSelected").classList.add("is-invalid");
                            };

                            if (jVarLocalColumnSelected !== null) {
                                if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ColumnSelected").list, inSearchValue: jVarReturnObject.ColumnName })) {
                                    jVarReturnObject.KTF = true;
                                } else {
                                    jVarReturnObject.KTF = false;
                                    document.getElementById("ColumnSelected").focus();
                                    document.getElementById("ColumnSelected").classList.add("is-invalid");
                                };
                            };

                            return jVarReturnObject;
                        },
                        PrepareUrl: {
                            ForUpdate: ({ inUrlObject }) => {
                                let jVarLocalFolderName = inUrlObject.FolderName;
                                let jVarLocalFileName = inUrlObject.FileName;
                                let jVarLocalItemName = inUrlObject.ItemName;
                                let jVarLocalScreenName = inUrlObject.ScreenName;
                                let jVarLocalColumnName = inUrlObject.ColumnName;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/TableColumns/Update?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&inColumnName=${jVarLocalColumnName}`;

                                return jVarLocalFetchUrl;
                            },
                        },
                        ChangeClasses: ({ inJVarLocalHtmlCard }) => {
                            inJVarLocalHtmlCard.classList.remove("border-success");
                            inJVarLocalHtmlCard.classList.add("border-warning");
                        },
                    }
                }
            },
            TableInfo: {
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        let jVarLocalFetchUrl = this.AdminApi.Config.TableInfo.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inUrlObject: jVarLocalUrlObject });

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                            .then(response => response.json())
                            .then(dataFromApi => {
                                this.AdminApi.Config.TableInfo.ShowData.CommonFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });

                                this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                            });
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inUrlObject }) => {
                                let jVarLocalFolderName = inUrlObject.FolderName;
                                let jVarLocalFileName = inUrlObject.FileName;
                                let jVarLocalItemName = inUrlObject.ItemName;
                                let jVarLocalScreenName = inUrlObject.ScreenName;
                                let jVarLocalColumnName = inUrlObject.ColumnName;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/TableInfo/ShowData?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;

                                return jVarLocalFetchUrl;
                            },

                        },
                        DefaultFocus: ({ inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            if (jVarLocalHtmlNamesArray.length > 0) {
                                jVarLocalHtmlNamesArray[0].focus();
                            };
                        },
                        ShowOnScreen: ({ injVarData, inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");
                            let jVarLocalFetchBodydata = {};

                            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                if (injVarData.hasOwnProperty(LoopItem.name)) {
                                    this.AdminApi.Config.TableInfo.ShowData.CommonFuncs.ShowOnScreenSwitch({ inLoopItem: LoopItem, injVarData });
                                };
                            });

                            return jVarLocalFetchBodydata;
                        },
                        ShowOnScreenSwitch: ({ inLoopItem, injVarData }) => {
                            switch (inLoopItem.type) {
                                case "checkbox":
                                    inLoopItem.checked = injVarData[inLoopItem.name];
                                    break;

                                default:
                                    inLoopItem.value = injVarData[inLoopItem.name];
                                    break;
                            }
                        },

                    },


                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.Config.TableInfo.Update.CommonFuncs.CheckBeforeFetch();
                        let jVarLocalFetchUrl = this.AdminApi.Config.TableInfo.Update.CommonFuncs.PrepareUrl.ForUpdate({ inUrlObject: jVarLocalUrlObject });
                        let jVarLocalFetchBodydata = this.AdminApi.Config.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });;

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.json())
                            .then(dataFromApi => {
                                //console.log("dataFromApi : ", dataFromApi);
                                let jVarLocalData = dataFromApi;
                                if (jVarLocalData.KTF) {

                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });
                                    this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });
                                }
                            });
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForUpdate: ({ inUrlObject }) => {
                                //console.log("inUrlObject", inUrlObject);
                                let jVarLocalFolderName = inUrlObject.FolderName;
                                let jVarLocalFileName = inUrlObject.FileName;
                                let jVarLocalItemName = inUrlObject.ItemName;
                                let jVarLocalScreenName = inUrlObject.ScreenName;
                                let jVarLocalColumnName = inUrlObject.ColumnName;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/TableInfo/Update?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;

                                return jVarLocalFetchUrl;
                            },

                        },
                        CheckBeforeFetch: () => {
                            // console.log("class");
                            let jVarReturnObject = { KTF: false, FolderName: "", FileName: "", ItemName: "", ScreenName: "", ColumnName: "" };

                            jVarReturnObject.FolderName = document.getElementById("FolderSelected").value;
                            jVarReturnObject.FileName = document.getElementById("FileSelected").value;
                            jVarReturnObject.ItemName = document.getElementById("ItemSelected").value;
                            jVarReturnObject.ScreenName = document.getElementById("ScreenSelected").value;

                            if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("FolderSelected").list, inSearchValue: jVarReturnObject.FolderName })) {
                                if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("FileSelected").list, inSearchValue: jVarReturnObject.FileName })) {
                                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarReturnObject.ItemName })) {
                                        if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ScreenSelected").list, inSearchValue: jVarReturnObject.ScreenName })) {
                                            jVarReturnObject.KTF = true;
                                        } else {
                                            document.getElementById("ScreenSelected").focus();
                                            document.getElementById("ScreenSelected").classList.add("is-invalid");
                                        };
                                    } else {
                                        document.getElementById("ItemSelected").focus();
                                        document.getElementById("ItemSelected").classList.add("is-invalid");
                                    };
                                } else {
                                    document.getElementById("FileSelected").focus();
                                    document.getElementById("FileSelected").classList.add("is-invalid");
                                };
                            } else {
                                document.getElementById("FolderSelected").focus();
                                document.getElementById("FolderSelected").classList.add("is-invalid");
                            };

                            return jVarReturnObject;
                        },
                        ChangeClasses: ({ inJVarLocalHtmlCard }) => {
                            inJVarLocalHtmlCard.classList.remove("border-success");
                            inJVarLocalHtmlCard.classList.add("border-warning");
                        }
                    }
                }
            },
            SubTableColumns: {
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });

                        if (jVarLocalUrlObject.KTF) {
                            let jVarLocalFetchUrl = this.AdminApi.Config.SubTableColumns.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });

                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                });
                        };
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inUrlObject }) => {
                                let jVarLocalFolderName = inUrlObject.FolderName;
                                let jVarLocalFileName = inUrlObject.FileName;
                                let jVarLocalItemName = inUrlObject.ItemName;
                                let jVarLocalScreenName = inUrlObject.ScreenName;
                                let jVarLocalColumnName = inUrlObject.ColumnName;
                                let jVarLocalSubTableColumnName = inUrlObject.SubTableColumnName;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                // console.log("jVarLocalFetchUrl",jVarLocalFetchUrl);
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/SubTableColumns/ShowData?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&inColumnName=${jVarLocalColumnName}&inSubTableColumnName=${jVarLocalSubTableColumnName}`;

                                return jVarLocalFetchUrl;
                            },

                        },
                        ShowOnScreen: ({ injVarData, inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");
                            let jVarLocalFetchBodydata = {};

                            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                if (injVarData.hasOwnProperty(LoopItem.name)) {
                                    this.AdminApi.Config.SubTableColumns.ShowData.CommonFuncs.ShowOnScreenSwitch({ inLoopItem: LoopItem, injVarData });
                                };
                            });

                            return jVarLocalFetchBodydata;
                        },
                        ShowOnScreenSwitch: ({ inLoopItem, injVarData }) => {
                            switch (inLoopItem.type) {
                                case "checkbox":
                                    inLoopItem.checked = injVarData[inLoopItem.name];
                                    break;

                                default:
                                    inLoopItem.value = injVarData[inLoopItem.name];
                                    break;
                            }
                        },

                        ChangeClasses: ({ inJVarHtmlCard }) => {
                            if (inJVarHtmlCard.querySelector(".card-footer button").hasAttribute("disabled")) {
                                inJVarHtmlCard.querySelector(".card-footer button").attributes.removeNamedItem("disabled");
                            };
                        },
                        DefaultFocus: ({ inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            if (jVarLocalHtmlNamesArray.length > 0) {
                                jVarLocalHtmlNamesArray[0].focus();
                            };
                        },


                    },
                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");

                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });


                        let jVarLocalFetchUrl = this.AdminApi.Config.SubTableColumns.Update.CommonFuncs.PrepareUrl({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });
                        let jVarLocalFetchBodydata = this.AdminApi.Config.SubTableColumns.Update.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                        console.log("jVarLocalUrlObject : ", jVarLocalUrlObject);
                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.text())
                            .then(dataFromApi => {
                                let jVarLocalData = JSON.parse(dataFromApi);

                                if (jVarLocalData.KTF) {
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                                    this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });
                                };
                            });
                    },
                    CommonFuncs: {
                        PrepareUrl: ({ inUrlObject }) => {
                            let jVarLocalFolderName = inUrlObject.FolderName;
                            let jVarLocalFileName = inUrlObject.FileName;
                            let jVarLocalItemName = inUrlObject.ItemName;
                            let jVarLocalScreenName = inUrlObject.ScreenName;
                            let jVarLocalColumnName = inUrlObject.ColumnName;
                            let jVarLocalSubTableColumnName = inUrlObject.SubTableColumnName;

                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/SubTableColumns/Update?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&inColumnName=${jVarLocalColumnName}&inSubTableColumnName=${jVarLocalSubTableColumnName}`;


                            return jVarLocalFetchUrl;
                        },
                        PreparePostData: {
                            ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                                let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                                let jVarLocalFetchBodydata = {};

                                jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                    switch (LoopItem.type) {
                                        case "checkbox":
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                            break;

                                        default:
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                            break;
                                    }
                                });

                                return jVarLocalFetchBodydata;
                            }
                        },

                        ChangeClasses: ({ inJVarLocalHtmlCard }) => {
                            inJVarLocalHtmlCard.classList.remove("border-success");
                            inJVarLocalHtmlCard.classList.add("border-warning");
                        }
                    }
                }
            },
            ReturnData: {
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });


                        if (jVarLocalUrlObject.KTF) {
                            let jVarLocalFetchUrl = this.AdminApi.Config.ReturnData.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inUrlObject: jVarLocalUrlObject });

                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                });
                        };
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inUrlObject }) => {
                                let jVarLocalFolderName = inUrlObject.FolderName;
                                let jVarLocalFileName = inUrlObject.FileName;
                                let jVarLocalItemName = inUrlObject.ItemName;
                                let jVarLocalScreenName = inUrlObject.ScreenName;


                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/ReturnData/ShowData?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;

                                return jVarLocalFetchUrl;
                            }
                        },
                        ChangeClasses: ({ inJVarHtmlCard }) => {
                            console.log("inJVarHtmlCard : ", inJVarHtmlCard);
                            let jVarLocalFooterButtons = inJVarHtmlCard.querySelectorAll(".card-footer button");
                            console.log("jVarLocalFooterButtons : ", jVarLocalFooterButtons);
                            jVarLocalFooterButtons.forEach((LoopItem) => {
                                if (LoopItem.hasAttribute("disabled")) {
                                    LoopItem.attributes.removeNamedItem("disabled");
                                };
                            });
                        },
                        DefaultFocus: ({ inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            if (jVarLocalHtmlNamesArray.length > 0) {
                                jVarLocalHtmlNamesArray[0].focus();
                            };
                        },
                        ShowOnScreen: ({ injVarData, inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                if (injVarData.hasOwnProperty(LoopItem.name)) {
                                    this.AdminApi.Config.ReturnData.ShowData.CommonFuncs.ShowOnScreenSwitch({ inLoopItem: LoopItem, injVarData });
                                };
                            });
                        },
                        ShowOnScreenSwitch: ({ inLoopItem, injVarData }) => {
                            switch (inLoopItem.type) {
                                case "checkbox":
                                    inLoopItem.checked = injVarData[inLoopItem.name];
                                    break;

                                default:
                                    inLoopItem.value = injVarData[inLoopItem.name];
                                    break;
                            }
                        },

                    }
                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        let jVarLocalFetchUrl = this.AdminApi.Config.ReturnData.Update.CommonFuncs.PrepareUrl.ForUpdate({ inUrlObject: jVarLocalUrlObject });;
                        let jVarLocalFetchBodydata = this.AdminApi.Config.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.text())
                            .then(dataFromApi => {
                                let jVarLocalData = JSON.parse(dataFromApi);

                                if (jVarLocalData.KTF) {
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                                    this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });
                                }
                                // document.getElementById("ParentClassesCardId").classList.remove("border-success");
                                // document.getElementById("ParentClassesCardId").classList.add("border-warning");
                            });
                    },
                    CommonFuncs: {
                        CheckBeforeFetch: () => {
                            let jVarReturnObject = {
                                KTF: false,
                                FolderName: document.getElementById("FolderSelected").value,
                                FileName: document.getElementById("FileSelected").value,
                                ItemName: document.getElementById("ItemSelected").value,
                                ScreenName: document.getElementById("ScreenSelected").value,

                            };

                            if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarReturnObject.ItemName })) {
                                if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ScreenSelected").list, inSearchValue: jVarReturnObject.ScreenName })) {
                                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ColumnSelected").list, inSearchValue: jVarReturnObject.ColumnName })) {
                                        jVarReturnObject.KTF = true;
                                    } else {
                                        document.getElementById("ColumnSelected").focus();
                                        document.getElementById("ColumnSelected").classList.add("is-invalid");
                                    };
                                } else {
                                    document.getElementById("ScreenSelected").focus();
                                    document.getElementById("ScreenSelected").classList.add("is-invalid");
                                };
                            } else {
                                document.getElementById("ItemSelected").focus();
                                document.getElementById("ItemSelected").classList.add("is-invalid");
                            };

                            return jVarReturnObject;
                        },
                        PrepareUrl: {
                            ForUpdate: ({ inUrlObject }) => {
                                let jVarLocalFolderName = inUrlObject.FolderName;
                                let jVarLocalFileName = inUrlObject.FileName;
                                let jVarLocalItemName = inUrlObject.ItemName;
                                let jVarLocalScreenName = inUrlObject.ScreenName;


                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/ReturnData/Update?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;

                                return jVarLocalFetchUrl;
                            },
                        },
                        ChangeClasses: ({ inJVarLocalHtmlCard }) => {
                            inJVarLocalHtmlCard.classList.remove("border-success");
                            inJVarLocalHtmlCard.classList.add("border-warning");
                        },

                    }
                }
            },
            Preload: {
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        console.log("jVarLocalUrlObject", jVarLocalUrlObject);
                        if (jVarLocalUrlObject.KTF) {
                            let jVarLocalFetchUrl = this.AdminApi.Config.Preload.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inUrlObject: jVarLocalUrlObject });

                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                });
                        };
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inUrlObject }) => {
                                let jVarLocalItemName = inUrlObject.ItemName;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/Preload/ShowData?inItemName=${jVarLocalItemName}`;
                                console.log("jVarLocalFetchUrl", jVarLocalFetchUrl);
                                return jVarLocalFetchUrl;
                            }
                        },
                        ChangeClasses: ({ inJVarHtmlCard }) => {
                            console.log("inJVarHtmlCard : ", inJVarHtmlCard);
                            let jVarLocalFooterButtons = inJVarHtmlCard.querySelectorAll(".card-footer button");
                            console.log("jVarLocalFooterButtons : ", jVarLocalFooterButtons);
                            jVarLocalFooterButtons.forEach((LoopItem) => {
                                if (LoopItem.hasAttribute("disabled")) {
                                    LoopItem.attributes.removeNamedItem("disabled");
                                };
                            });
                        },
                        DefaultFocus: ({ inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            if (jVarLocalHtmlNamesArray.length > 0) {
                                jVarLocalHtmlNamesArray[0].focus();
                            };
                        },
                        ShowOnScreen: ({ injVarData, inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                if (injVarData.hasOwnProperty(LoopItem.name)) {
                                    this.AdminApi.Config.ReturnData.ShowData.CommonFuncs.ShowOnScreenSwitch({ inLoopItem: LoopItem, injVarData });
                                };
                            });
                        },
                        ShowOnScreenSwitch: ({ inLoopItem, injVarData }) => {
                            switch (inLoopItem.type) {
                                case "checkbox":
                                    inLoopItem.checked = injVarData[inLoopItem.name];
                                    break;

                                default:
                                    inLoopItem.value = injVarData[inLoopItem.name];
                                    break;
                            }
                        },

                    }
                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        let jVarLocalFetchUrl = this.AdminApi.Config.Preload.Update.CommonFuncs.PrepareUrl.ForUpdate({ inUrlObject: jVarLocalUrlObject });;
                        let jVarLocalFetchBodydata = this.AdminApi.Config.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.text())
                            .then(dataFromApi => {
                                let jVarLocalData = JSON.parse(dataFromApi);

                                if (jVarLocalData.KTF) {
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                                    this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });
                                }
                                // document.getElementById("ParentClassesCardId").classList.remove("border-success");
                                // document.getElementById("ParentClassesCardId").classList.add("border-warning");
                            });
                    },
                    CommonFuncs: {
                        CheckBeforeFetch: () => {
                            let jVarReturnObject = {
                                KTF: false,
                                FolderName: document.getElementById("FolderSelected").value,
                                FileName: document.getElementById("FileSelected").value,
                                ItemName: document.getElementById("ItemSelected").value,
                                ScreenName: document.getElementById("ScreenSelected").value,

                            };

                            if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarReturnObject.ItemName })) {
                                if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ScreenSelected").list, inSearchValue: jVarReturnObject.ScreenName })) {
                                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ColumnSelected").list, inSearchValue: jVarReturnObject.ColumnName })) {
                                        jVarReturnObject.KTF = true;
                                    } else {
                                        document.getElementById("ColumnSelected").focus();
                                        document.getElementById("ColumnSelected").classList.add("is-invalid");
                                    };
                                } else {
                                    document.getElementById("ScreenSelected").focus();
                                    document.getElementById("ScreenSelected").classList.add("is-invalid");
                                };
                            } else {
                                document.getElementById("ItemSelected").focus();
                                document.getElementById("ItemSelected").classList.add("is-invalid");
                            };

                            return jVarReturnObject;
                        },
                        PrepareUrl: {
                            ForUpdate: ({ inUrlObject }) => {
                                let jVarLocalItemName = inUrlObject.ItemName;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Config/Preload/Update?inItemName=${jVarLocalItemName}`;

                                return jVarLocalFetchUrl;
                            },
                        },
                        ChangeClasses: ({ inJVarLocalHtmlCard }) => {
                            inJVarLocalHtmlCard.classList.remove("border-success");
                            inJVarLocalHtmlCard.classList.add("border-warning");
                        },

                    }
                }
            },
            CommonFuncs: {
                PreparePostData: {
                    ForUpdateTakeInput: ({ inJVarHtmlControl }) => {

                        let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                        let jVarLocalFetchBodydata = {};

                        jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                            switch (LoopItem.type) {
                                case "checkbox":
                                    jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                    break;

                                default:
                                    jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                    break;
                            }
                        });
                        console.log("jVarLocalFetchBodydata : ", jVarLocalFetchBodydata);

                        return jVarLocalFetchBodydata;
                    }
                }

            }
        },
        Fix: {
            CommonFuncs: {
                PrepareUrl: {
                    ForShowData: ({ inUrlObject }) => {
                        let jVarLocalFolderName = inUrlObject.FolderName;
                        let jVarLocalFileName = inUrlObject.FileName;
                        let jVarLocalItemName = inUrlObject.ItemName;
                        let jVarLocalScreenName = inUrlObject.ScreenName;
                        let jVarLocalColumnName = inUrlObject.ColumnName;

                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Fix?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;

                        return jVarLocalFetchUrl;
                    },
                    ForDisplayJson: ({ inUrlObject }) => {
                        let jVarLocalFolderName = inUrlObject.FolderName;
                        let jVarLocalFileName = inUrlObject.FileName;
                        let jVarLocalItemName = inUrlObject.ItemName;
                        let jVarLocalScreenName = inUrlObject.ScreenName;

                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Fix/FromDisplayJson?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;

                        return jVarLocalFetchUrl;
                    }
                },
            },
            FetchFunc: (inEvent) => {
                let jVarLocalCurrentTarget = inEvent.currentTarget;
                let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");

                let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: jVarLocalHtmlKSCard });
                let jVarLocalFetchUrl = this.AdminApi.Fix.CommonFuncs.PrepareUrl.ForShowData({ inUrlObject: jVarLocalUrlObject });

                fetch(`${jVarLocalFetchUrl}`)
                    .then(response => response.json())
                    .then(dataFromApi => {
                        if (dataFromApi.KTF) {
                            // Swal.fire({
                            //     position: 'middle',
                            //     icon: 'success',
                            //     title: 'Your fix has been saved',
                            //     showConfirmButton: false,
                            //     timer: 3000
                            // });

                            Swal.fire(JSON.stringify(dataFromApi.KResult));
                        };
                    });
            },
            FromDisplayJson: {
                FetchFunc: (inEvent) => {
                    let jVarLocalCurrentTarget = inEvent.currentTarget;
                    let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");

                    let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: jVarLocalHtmlKSCard });
                    let jVarLocalFetchUrl = this.AdminApi.Fix.CommonFuncs.PrepareUrl.ForDisplayJson({ inUrlObject: jVarLocalUrlObject });

                    fetch(`${jVarLocalFetchUrl}`)
                        .then(response => response.json())
                        .then(dataFromApi => {
                            //console.log("dataFromApi : ", dataFromApi);

                            if (dataFromApi.KTF) {
                                Swal.fire({
                                    position: 'middle',
                                    icon: 'success',
                                    title: 'Your fix has been saved',
                                    showConfirmButton: false,
                                    timer: 3000
                                });
                            };

                            //this.AdminApi.Fix.CommonFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                        });
                }
            }
        },
        Reports: {
            Items: {
                ForDataList: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    let LocalURL = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ForDataList/ShowItemNames?inFolderName=Reports&inJsonFileName=LedgerAuto.json`;

                    this.DataListFuncs.Fill.Items.SingleColumn({ inURL: LocalURL });
                }
            },
            ForDataList: (inEvent) => {
                if (inEvent !== undefined) { if (inEvent.key !== "Enter") { return } };

                let jVarLocalItemName = document.getElementById("ItemSelected").value;
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarLocalItemName })) {
                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ForDataList/VouchersConsider?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inItemName=${jVarLocalItemName}`;

                    fetch(jVarLocalFetchUrl)

                        .then(response => response.text())
                        .then(dataFromApi => {
                            this.DataListFuncs.ValueAndText({ inDataList: document.getElementById("PkList"), inData: JSON.parse(dataFromApi) });
                            //document.getElementById("KCont1").innerHTML = data;
                            document.getElementById("ItemSelected").classList.remove("is-invalid");
                            document.getElementById("ItemSelected").classList.add("is-valid");
                            document.getElementById("PkSelected").focus();
                        });
                } else {
                    document.getElementById("ItemSelected").focus();
                    //document.getElementById("FiltersItemRow").classList.add("was-validated");
                    document.getElementById("ItemSelected").classList.add("is-invalid");
                };
            },
            ForPk: {
                ForDataList: (inEvent) => {
                    if (inEvent !== undefined) { if (inEvent.key !== "Enter") { return } };

                    let jVarLocalReportName = document.getElementById("ItemSelected").value;
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarLocalReportName })) {
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ForDataList/VouchersConsider?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inReportName=${jVarLocalReportName}`;

                        fetch(jVarLocalFetchUrl)

                            .then(response => response.text())
                            .then(dataFromApi => {
                                this.DataListFuncs.ValueAndText({ inDataList: document.getElementById("PkList"), inData: JSON.parse(dataFromApi) });
                                document.getElementById("ItemSelected").classList.remove("is-invalid");
                                document.getElementById("ItemSelected").classList.add("is-valid");
                                document.getElementById("PkSelected").focus();
                            });
                    } else {
                        document.getElementById("ItemSelected").focus();
                        document.getElementById("ItemSelected").classList.add("is-invalid");
                    };
                }
            },
            ForColumn: {
                ForDataList: (inEvent) => {
                    if (inEvent !== undefined) { if (inEvent.key !== "Enter") { return } };

                    let jVarLocalReportName = document.getElementById("ItemSelected").value;
                    let jVarLocalPk = document.getElementById("PkSelected").value;
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarLocalReportName })) {
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ForDataList/Columns?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPk}`;

                        fetch(jVarLocalFetchUrl)
                            .then(response => response.json())
                            .then(dataFromApi => {
                                this.DataListFuncs.ValueAndTextEmptyBefore({ inDataList: document.getElementById("ColumnList"), inData: dataFromApi });
                                //document.getElementById("KCont1").innerHTML = data;
                                document.getElementById("PkSelected").classList.remove("is-invalid");
                                document.getElementById("PkSelected").classList.add("is-valid");
                                document.getElementById("ColumnSelected").focus();
                            });
                    } else {
                        document.getElementById("PkSelected").focus();
                        //document.getElementById("FiltersItemRow").classList.add("was-validated");
                        document.getElementById("PkSelected").classList.add("is-invalid");
                    };
                }
            },
            ForJoinTables: {
                ForDataList: (inEvent) => {
                    if (inEvent !== undefined) { if (inEvent.key !== "Enter") { return } };

                    let jVarLocalReportName = document.getElementById("ItemSelected").value;
                    let jVarLocalPk = document.getElementById("PkSelected").value;
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarLocalReportName })) {
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ForDataList/JoinTables?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPk}`;

                        fetch(jVarLocalFetchUrl)
                            .then(response => response.json())
                            .then(dataFromApi => {
                                console.log("dataFromApi", dataFromApi);
                                this.DataListFuncs.SingleValueEmptyBefore({ inDataList: document.getElementById("JoinTablesList"), inData: dataFromApi });
                                //document.getElementById("KCont1").innerHTML = data;
                                document.getElementById("PkSelected").classList.remove("is-invalid");
                                document.getElementById("PkSelected").classList.add("is-valid");
                                document.getElementById("JoinTablesSelected").focus();
                            });
                    } else {
                        document.getElementById("PkSelected").focus();
                        //document.getElementById("FiltersItemRow").classList.add("was-validated");
                        document.getElementById("PkSelected").classList.add("is-invalid");
                    };
                }
            },
            ForJoinTableColumns: {
                ForDataList: (inEvent) => {
                    if (inEvent !== undefined) { if (inEvent.key !== "Enter") { return } };

                    let jVarLocalReportName = document.getElementById("ItemSelected").value;
                    let jVarLocalPk = document.getElementById("PkSelected").value;
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarLocalReportName })) {
                        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ForDataList/JoinTablesColumns?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPk}`;

                        fetch(jVarLocalFetchUrl)
                            .then(response => response.json())
                            .then(dataFromApi => {
                                this.DataListFuncs.ValueAndTextEmptyBefore({ inDataList: document.getElementById("JoinTablesColumnsList"), inData: dataFromApi });
                                //document.getElementById("KCont1").innerHTML = data;
                                document.getElementById("PkSelected").classList.remove("is-invalid");
                                document.getElementById("PkSelected").classList.add("is-valid");
                                document.getElementById("JoinTablesColumnsSelected").focus();
                            });
                    } else {
                        document.getElementById("PkSelected").focus();
                        //document.getElementById("FiltersItemRow").classList.add("was-validated");
                        document.getElementById("PkSelected").classList.add("is-invalid");
                    };
                }
            },
            Delete: {
                Columns: () => {
                    let jVarLocalItemName = document.getElementById("ItemSelected").value;
                    let jVarLocalPk = document.getElementById("PkSelected").value;
                    let jVarLocalColumnName = document.getElementById("ColumnSelected").value;
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Delete/Columns?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inItemName=${jVarLocalItemName}&inPkName=${jVarLocalPk}&inColumnsPk=${jVarLocalColumnName}`)

                        .then(response => {
                            if (!response.ok) { throw new Error(response.statusText) };

                            return response.json();
                        }).then((FetchData) => {
                            console.log("FetchData : ", FetchData);
                            if (FetchData.KTF) {

                            }
                        })
                        .catch(error => { });


                }
            },
            TableColumns: {
                ForDataList: () => {
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                    let jVarLocalItemSelected = document.getElementById("ItemSelected");
                    let jVarLocalColumnSelected = document.getElementById("ColumnSelected");

                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: jVarLocalItemSelected })) {
                        let LocalURL = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/TableColumns/ForDataList/ShowItemNames?inReportName=${jVarLocalItemSelected.value}`;

                        fetch(LocalURL)
                            .then(response => {
                                return this.Login.StatusCodeFuncs.Code403({ inResponse: response });
                            })
                            .then(dataFromApi => {
                                if (dataFromApi !== null) {
                                    this.DataListFuncs.ValueAndTextEmptyBefore({ inDataList: jVarLocalColumnSelected.list, inData: dataFromApi });
                                    jVarLocalColumnSelected.focus();
                                };
                            });
                    };
                },
                ShowData: (injVarThis) => {
                    let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                    let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                    let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;
                    let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });

                    if (jVarLocalUrlObject.KTF) {
                        let jVarLocalFetchUrl = this.AdminApi.Reports.TableColumns.CommonFuncs.PrepareUrl.ForShowData({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });
                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                            .then(response => response.json())
                            .then(dataFromApi => {
                                this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                            });
                    }
                },
                Update: (injVarThis) => {
                    let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                    let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                    let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                    let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                    // let jVarLocalUrlObject = this.AdminApi.Reports.TableColumns.CommonFuncs.CheckBeforeFetch();
                    let jVarLocalFetchBodydata = this.AdminApi.Reports.TableColumns.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                    let jVarLocalFetchUrl = this.AdminApi.Reports.TableColumns.CommonFuncs.PrepareUrl.ForUpdate({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });

                    fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                        method: "post",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(jVarLocalFetchBodydata)
                    })
                        .then(response => response.json())
                        .then(dataFromApi => {
                            // console.log("dataFromApi : ", dataFromApi);
                            this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                            this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });

                        });

                },
                CommonFuncs: {
                    PrepareUrl: {
                        ForShowData: ({ inUrlObject }) => {
                            let jVarLocalReportName = inUrlObject.ReportName;
                            let jVarLocalColumnName = inUrlObject.ColumnName;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/TableColumns/ShowData?inReportName=${jVarLocalReportName}&inColumnName=${jVarLocalColumnName}`;

                            return jVarLocalFetchUrl;
                        },
                        ForUpdate: ({ inUrlObject }) => {
                            let jVarLocalReportName = inUrlObject.ReportName;
                            let jVarLocalColumnName = inUrlObject.ColumnName;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/TableColumns/Update/DisplayType?inReportName=${jVarLocalReportName}&inColumnName=${jVarLocalColumnName}`;

                            return jVarLocalFetchUrl;
                        },
                        PreparePostData: {
                            ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                                let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                                let jVarLocalFetchBodydata = {};

                                jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                    switch (LoopItem.type) {
                                        case "checkbox":
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                            break;

                                        default:
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                            break;
                                    }
                                });
                                return jVarLocalFetchBodydata;
                            }
                        },

                    },
                    PreparePostData: {
                        ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            let jVarLocalFetchBodydata = {};

                            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                switch (LoopItem.type) {
                                    case "checkbox":
                                        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                        break;

                                    default:
                                        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                        break;
                                }
                            });
                            return jVarLocalFetchBodydata;
                        }
                    },
                }
            },
            VouchersConsider: {
                JoinTablesColumns: {
                    ShowData: {
                        FetchFunc: (injVarThis) => {
                            let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                            let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                            let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                            let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                            if (jVarLocalUrlObject.KTF) {

                                let jVarLocalFetchUrl = this.AdminApi.Reports.JoinTablesColumns.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });
                                console.log("jVarLocalFetchUrl : ", jVarLocalFetchUrl);
                                fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                    .then(response => response.json())
                                    .then(dataFromApi => {
                                        this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                        this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                        this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    });
                            }
                        },
                        CommonFuncs: {
                            PrepareUrl: {
                                ForShowData: ({ inUrlObject }) => {
                                    let jVarLocalReportName = inUrlObject.ReportName;
                                    let jVarLocalPkName = inUrlObject.PkName;
                                    let jVarLocalJoinTablesColumnsSelected = inUrlObject.JoinTablesColumnsSelect;

                                    let jVarLocalRoute = this.Config.RouteStart.Start;
                                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ShowData?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}&inJoinTablesColumnsSelected=${jVarLocalJoinTablesColumnsSelected}`;

                                    return jVarLocalFetchUrl;
                                }
                            }
                        }
                    },
                    Update: {
                        FetchPost: (injVarThis) => {
                            let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                            let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                            let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                            let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                            console.log("jVarLocalUrlObject : ", jVarLocalUrlObject);
                            let jVarLocalFetchUrl = this.AdminApi.Reports.JoinTablesColumns.Update.CommonFuncs.PrepareUrl({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });;
                            let jVarLocalFetchBodydata = this.AdminApi.Reports.JoinTablesColumns.Update.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                                method: "post",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(jVarLocalFetchBodydata)
                            })
                                .then(response => response.text())
                                .then(dataFromApi => {
                                    let jVarLocalData = JSON.parse(dataFromApi);

                                    if (jVarLocalData.KTF) {
                                        this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                                        this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });
                                    }
                                });
                        },
                        CommonFuncs: {
                            PrepareUrl: ({ inUrlObject }) => {
                                let jVarLocalReportName = inUrlObject.ReportName;
                                let jVarLocalPkName = inUrlObject.PkName;
                                let jVarLocalJoinTablesColumnsSelected = inUrlObject.JoinTablesColumnsSelect;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Update?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}&inJoinTablesColumnsSelected=${jVarLocalJoinTablesColumnsSelected}`;

                                return jVarLocalFetchUrl;
                            },
                            ChangeClasses: ({ jVarLocalHtmlCard }) => {
                                jVarLocalHtmlCard.classList.remove("border-success");
                                jVarLocalHtmlCard.classList.add("border-warning");
                            },
                            PreparePostData: {
                                ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                                    let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                                    let jVarLocalFetchBodydata = {};

                                    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                        switch (LoopItem.type) {
                                            case "checkbox":
                                                jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                                break;

                                            default:
                                                jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                                break;
                                        }
                                    });
                                    return jVarLocalFetchBodydata;
                                }
                            },

                        }
                    }
                },
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        if (jVarLocalUrlObject.KTF) {
                            let jVarLocalFetchUrl = this.AdminApi.Reports.VouchersConsider.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });
                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                });
                        }
                    },
                    FetchFuncAdvanced: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        if (jVarLocalUrlObject.KTF) {
                            let jVarLocalFetchUrl = this.AdminApi.Reports.VouchersConsider.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });
                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    //alert("fdsfds");
                                    this.AdminApi.Reports.VouchersConsider.ShowData.CommonFuncs.FetchFuncAdvanced.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    //alert("end");
                                    this.AdminApi.Reports.CommonFuncs.ChangeClasses({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.Reports.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                });
                        }
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inShowDataEndPoint, inUrlObject }) => {
                                let jVarLocalReportName = inUrlObject.ReportName;
                                let jVarLocalPkName = inUrlObject.PkName;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ShowData?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}`;

                                return jVarLocalFetchUrl;
                            }
                        },
                        FetchFuncAdvanced: {
                            ShowOnScreen: ({ injVarData, inJVarHtmlControl }) => {
                                let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");
                                let jVarLocalHtmlFolderName = inJVarHtmlControl.querySelector("[name=FolderName]");
                                let jVarLocalHtmlFileName = inJVarHtmlControl.querySelector("[name=FileName]");
                                let jVarLocalFolderArray;
                                console.log(":hai", injVarData);

                                if (injVarData.hasOwnProperty("JsonFileName")) {
                                    jVarLocalFolderArray = injVarData.JsonFileName.split("/");

                                    // jVarLocalHtmlFolderName.value = jVarLocalFolderArray[0];
                                    // jVarLocalHtmlFileName.value = jVarLocalFolderArray[1];

                                    jVarLocalHtmlFolderName.value = injVarData.FolderName;
                                    jVarLocalHtmlFileName.value = injVarData.FileName;


                                    //console.log(":jVarLocalHtmlNamesArray", jVarLocalHtmlNamesArray);
                                }


                                let jVarLocalFetchBodydata = {};

                                jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                    if (injVarData.hasOwnProperty(LoopItem.name)) {
                                        this.AdminApi.Reports.CommonFuncs.ShowOnScreenSwitch({ inLoopItem: LoopItem, injVarData });
                                    };
                                });

                                return jVarLocalFetchBodydata;
                            }
                        }
                    }
                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        let jVarLocalFetchUrl = this.AdminApi.Reports.VouchersConsider.Update.CommonFuncs.PrepareUrl({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });;
                        let jVarLocalFetchBodydata = this.AdminApi.Reports.VouchersConsider.Update.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.text())
                            .then(dataFromApi => {
                                let jVarLocalData = JSON.parse(dataFromApi);

                                if (jVarLocalData.KTF) {
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                                    this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });
                                }
                            });
                    },
                    FetchPostAdvanced: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        let jVarLocalFetchUrl = this.AdminApi.Reports.VouchersConsider.Update.CommonFuncs.PrepareUrl({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });;
                        //let jVarLocalFetchBodydata = this.AdminApi.Reports.VouchersConsider.Update.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                        let jVarLocalFetchBodydata = this.AdminApi.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                        jVarLocalFetchBodydata = this.AdminApi.Reports.VouchersConsider.Update.CommonFuncs.PreparePostData.ForAdvanced({ injVarFetchBodydata: jVarLocalFetchBodydata });

                        console.log("jVarLocalFetchBodydata ", jVarLocalFetchBodydata);

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.text())
                            .then(dataFromApi => {
                                let jVarLocalData = JSON.parse(dataFromApi);

                                if (jVarLocalData.KTF) {
                                    this.AdminApi.Reports.VouchersConsider.Update.CommonFuncs.ChangeClasses({ inJVarLocalHtmlCard: jVarLocalHtmlCard });
                                }
                            });

                    },
                    CommonFuncs: {
                        PrepareUrl: ({ inUrlObject }) => {
                            let jVarLocalReportName = inUrlObject.ReportName;
                            let jVarLocalPkName = inUrlObject.PkName;

                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Update?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}`;

                            return jVarLocalFetchUrl;
                        },
                        ChangeClasses: ({ inJVarLocalHtmlCard }) => {
                            inJVarLocalHtmlCard.classList.remove("border-success");
                            inJVarLocalHtmlCard.classList.add("border-warning");
                        },
                        PreparePostData: {
                            ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                                let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                                let jVarLocalFetchBodydata = {};

                                jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                    switch (LoopItem.type) {
                                        case "checkbox":
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                            break;

                                        default:
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                            break;
                                    }
                                });

                                return jVarLocalFetchBodydata;
                            },
                            ForAdvanced: ({ injVarFetchBodydata }) => {
                                if (injVarFetchBodydata.hasOwnProperty("FolderName") && injVarFetchBodydata.hasOwnProperty("FileName")) {
                                    injVarFetchBodydata.JsonFileName = `${injVarFetchBodydata.FolderName}/${injVarFetchBodydata.FileName}`;
                                    injVarFetchBodydata.FolderName = "";
                                    injVarFetchBodydata.FileName = "";
                                };

                                return injVarFetchBodydata;
                            }
                        }
                    }
                },
            },
            VouchersConsiderColumns: {
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        if (jVarLocalUrlObject.KTF) {
                            let jVarLocalFetchUrl = this.AdminApi.Reports.VouchersConsiderColumns.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });
                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                });
                        }
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inUrlObject }) => {
                                let jVarLocalReportName = inUrlObject.ReportName;
                                let jVarLocalPkName = inUrlObject.PkName;
                                let jVarLocalColumnsPk = inUrlObject.ColumnsPk;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ShowData?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}&inColumnsPk=${jVarLocalColumnsPk}`;

                                return jVarLocalFetchUrl;
                            }
                        }
                    }
                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        let jVarLocalFetchUrl = this.AdminApi.Reports.VouchersConsiderColumns.Update.CommonFuncs.PrepareUrl({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });;
                        let jVarLocalFetchBodydata = this.AdminApi.Reports.VouchersConsiderColumns.Update.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.text())
                            .then(dataFromApi => {
                                let jVarLocalData = JSON.parse(dataFromApi);

                                if (jVarLocalData.KTF) {
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                                    this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });

                                }
                                // document.getElementById("ParentClassesCardId").classList.remove("border-success");
                                // document.getElementById("ParentClassesCardId").classList.add("border-warning");
                            });
                    },

                    CommonFuncs: {
                        PrepareUrl: ({ inShowDataEndPoint, inUrlObject }) => {
                            let jVarLocalReportName = inUrlObject.ReportName;
                            let jVarLocalPkName = inUrlObject.PkName;
                            let jVarLocalColumnsPk = inUrlObject.ColumnsPk;

                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Update?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}&inColumnsPk=${jVarLocalColumnsPk}`;

                            return jVarLocalFetchUrl;
                        },
                        ChangeClasses: ({ inJVarLocalHtmlCard }) => {
                            inJVarLocalHtmlCard.classList.remove("border-success");
                            inJVarLocalHtmlCard.classList.add("border-warning");
                        },
                        PreparePostData: {
                            ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                                let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                                let jVarLocalFetchBodydata = {};

                                jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                    switch (LoopItem.type) {
                                        case "checkbox":
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                            break;

                                        default:
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                            break;
                                    }
                                });
                                return jVarLocalFetchBodydata;
                            }
                        },

                    }
                }
            },
            JoinTables: {
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        if (jVarLocalUrlObject.KTF) {

                            let jVarLocalFetchUrl = this.AdminApi.Reports.JoinTables.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });
                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                });
                        }
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inUrlObject }) => {
                                let jVarLocalReportName = inUrlObject.ReportName;
                                let jVarLocalPkName = inUrlObject.PkName;
                                let jVarLocalJoinTablesSelected = inUrlObject.JoinTablesSelect;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ShowData?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}&inJoinTablesSelected=${jVarLocalJoinTablesSelected}`;

                                return jVarLocalFetchUrl;
                            }
                        }
                    }
                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        console.log("jVarLocalUrlObject : ", jVarLocalUrlObject);
                        let jVarLocalFetchUrl = this.AdminApi.Reports.JoinTables.Update.CommonFuncs.PrepareUrl({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });;
                        let jVarLocalFetchBodydata = this.AdminApi.Reports.JoinTables.Update.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.text())
                            .then(dataFromApi => {
                                let jVarLocalData = JSON.parse(dataFromApi);

                                if (jVarLocalData.KTF) {
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                                    this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });
                                }
                            });
                    },

                    CommonFuncs: {
                        PrepareUrl: ({ inUrlObject }) => {
                            let jVarLocalReportName = inUrlObject.ReportName;
                            let jVarLocalPkName = inUrlObject.PkName;
                            let jVarLocalJoinTablesSelected = inUrlObject.JoinTablesSelect;

                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Update?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}&inJoinTablesSelected=${jVarLocalJoinTablesSelected}`;

                            return jVarLocalFetchUrl;
                        },
                        ChangeClasses: ({ jVarLocalHtmlCard }) => {
                            jVarLocalHtmlCard.classList.remove("border-success");
                            jVarLocalHtmlCard.classList.add("border-warning");
                        },
                        PreparePostData: {
                            ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                                let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                                let jVarLocalFetchBodydata = {};

                                jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                    switch (LoopItem.type) {
                                        case "checkbox":
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                            break;

                                        default:
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                            break;
                                    }
                                });
                                return jVarLocalFetchBodydata;
                            }
                        },
                        CheckBeforeFetch: () => {
                            let jVarReturnObject = {
                                KTF: false,
                                ItemName: document.getElementById("ItemSelected").value,
                                PkSelected: document.getElementById("PkSelected").value,
                                JoinTablesSelected: document.getElementById("JoinTablesSelected").value

                            };

                            if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarReturnObject.ItemName })) {
                                if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("PkSelected").list, inSearchValue: jVarReturnObject.PkSelected })) {
                                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("JoinTablesSelected").list, inSearchValue: jVarReturnObject.JoinTablesSelected })) {
                                        jVarReturnObject.KTF = true;
                                    } else {
                                        document.getElementById("PkSelected").focus();
                                        document.getElementById("PkSelected").classList.add("is-invalid");
                                    };
                                } else {
                                    document.getElementById("ItemSelected").focus();
                                    document.getElementById("ItemSelected").classList.add("is-invalid");
                                };
                            } else {
                                document.getElementById("JoinTablesSelected").focus();
                                document.getElementById("JoinTablesSelected").classList.add("is-invalid");
                            };
                            return jVarReturnObject;
                        }
                    }
                }
            },
            JoinTablesColumns: {
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        if (jVarLocalUrlObject.KTF) {

                            let jVarLocalFetchUrl = this.AdminApi.Reports.JoinTablesColumns.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });
                            console.log("jVarLocalFetchUrl : ", jVarLocalFetchUrl);
                            fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                                .then(response => response.json())
                                .then(dataFromApi => {
                                    this.AdminApi.CommonFuncs.ShowOnScreenFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.ShowData({ inJVarHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });
                                });
                        }
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inUrlObject }) => {
                                let jVarLocalReportName = inUrlObject.ReportName;
                                let jVarLocalPkName = inUrlObject.PkName;
                                let jVarLocalJoinTablesColumnsSelected = inUrlObject.JoinTablesColumnsSelect;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/ShowData?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}&inJoinTablesColumnsSelected=${jVarLocalJoinTablesColumnsSelected}`;

                                return jVarLocalFetchUrl;
                            }
                        }
                    }
                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        console.log("jVarLocalUrlObject : ", jVarLocalUrlObject);
                        let jVarLocalFetchUrl = this.AdminApi.Reports.JoinTablesColumns.Update.CommonFuncs.PrepareUrl({ inShowDataEndPoint: jVarLocalEndPoint, inUrlObject: jVarLocalUrlObject });;
                        let jVarLocalFetchBodydata = this.AdminApi.Reports.JoinTablesColumns.Update.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.text())
                            .then(dataFromApi => {
                                let jVarLocalData = JSON.parse(dataFromApi);

                                if (jVarLocalData.KTF) {
                                    this.AdminApi.CommonFuncs.ChangeClassesFuncs.Update({ inJVarLocalHtmlCard: jVarLocalHtmlCard });

                                    this.ModalPopUp.StartFunc({ inType: "AdminPostUpdate" });
                                }
                            });
                    },
                    CommonFuncs: {
                        PrepareUrl: ({ inUrlObject }) => {
                            let jVarLocalReportName = inUrlObject.ReportName;
                            let jVarLocalPkName = inUrlObject.PkName;
                            let jVarLocalJoinTablesColumnsSelected = inUrlObject.JoinTablesColumnsSelect;

                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Update?inReportName=${jVarLocalReportName}&inPkName=${jVarLocalPkName}&inJoinTablesColumnsSelected=${jVarLocalJoinTablesColumnsSelected}`;

                            return jVarLocalFetchUrl;
                        },
                        ChangeClasses: ({ jVarLocalHtmlCard }) => {
                            jVarLocalHtmlCard.classList.remove("border-success");
                            jVarLocalHtmlCard.classList.add("border-warning");
                        },
                        PreparePostData: {
                            ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                                let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                                let jVarLocalFetchBodydata = {};

                                jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                    switch (LoopItem.type) {
                                        case "checkbox":
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                            break;

                                        default:
                                            jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                            break;
                                    }
                                });
                                return jVarLocalFetchBodydata;
                            }
                        },

                    }
                }
            },
            CommonFuncs: {
                ShowOnScreen: ({ injVarData, inJVarHtmlControl }) => {
                    let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");
                    let jVarLocalFetchBodydata = {};

                    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                        if (injVarData.hasOwnProperty(LoopItem.name)) {
                            this.AdminApi.Reports.CommonFuncs.ShowOnScreenSwitch({ inLoopItem: LoopItem, injVarData });
                        };
                    });

                    return jVarLocalFetchBodydata;
                },
                ShowOnScreenSwitch: ({ inLoopItem, injVarData }) => {
                    switch (inLoopItem.type) {
                        case "checkbox":
                            inLoopItem.checked = injVarData[inLoopItem.name];
                            break;

                        default:
                            inLoopItem.value = injVarData[inLoopItem.name];
                            break;
                    }
                },
                ChangeClasses: ({ inJVarHtmlCard }) => {
                    // if (inJVarHtmlCard.querySelector(".card-footer button").hasAttribute("disabled")) {
                    //     inJVarHtmlCard.querySelector(".card-footer button").attributes.removeNamedItem("disabled");
                    // };
                    console.log("inJVarHtmlCard : ", inJVarHtmlCard);
                    let jVarLocalFooterButtons = inJVarHtmlCard.querySelectorAll(".card-footer button");

                    jVarLocalFooterButtons.forEach((LoopItem) => {
                        if (LoopItem.hasAttribute("disabled")) {
                            LoopItem.attributes.removeNamedItem("disabled");
                        };
                    });

                },
                DefaultFocus: ({ inJVarHtmlControl }) => {
                    let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                    if (jVarLocalHtmlNamesArray.length > 0) {
                        jVarLocalHtmlNamesArray[0].focus();
                    };
                },

            },
            Duplicate: {
                VouchersConsider: {
                    ArrayItem: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        console.log("jVarLocalCurrentTarget : ", jVarLocalCurrentTarget);
                        let jVarLocalItemName = document.getElementById("ItemSelected").value;
                        let LocalFromName = document.getElementById("PkSelected").value;
                        let LocalToName = document.getElementById("PkDuplicate").value;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                        console.log("LocalFromName", LocalFromName);
                        fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Duplicate/VouchersConsider/ArrayItem?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inItemName=${jVarLocalItemName}&inFromName=${LocalFromName}&inToName=${LocalToName}`)

                            .then(response => {
                                if (!response.ok) { throw new Error(response.statusText) };

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    let jVarLocalModalRef = jVarLocalCurrentTarget.closest(".modal");
                                    var modal = bootstrap.Modal.getInstance(jVarLocalModalRef)
                                    modal.hide();
                                    Swal.fire('success');
                                }
                            }).catch(error => { });
                    }
                },
                Items: () => {
                    let LocalFromName = document.getElementById("ItemSelected").value;
                    let LocalToName = document.getElementById("ItemDuplicate").value;
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                    fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Duplicate/Items?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inFromName=${LocalFromName}&inToName=${LocalToName}`)
                        .then(response => {
                            if (!response.ok) { throw new Error(response.statusText) };

                            return response.json();
                        }).then((FetchData) => {
                            console.log("FetchData : ", FetchData);
                            if (FetchData.KTF) {

                            }
                        }).catch(error => { });
                },
                Screens: () => {
                    let jVarLocalItemName = document.getElementById("ItemSelected").value;
                    let LocalFromName = document.getElementById("PkSelected").value;
                    let LocalToName = document.getElementById("PkDuplicate").value;
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                    console.log("LocalFromName", LocalFromName);
                    fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Duplicate/Screens?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inItemName=${jVarLocalItemName}&inFromName=${LocalFromName}&inToName=${LocalToName}`)

                        .then(response => {
                            if (!response.ok) { throw new Error(response.statusText) };

                            return response.json();
                        }).then((FetchData) => {
                            console.log("FetchData : ", FetchData);
                            if (FetchData.KTF) {

                            }
                        }).catch(error => { });
                },
                Columns: () => {
                    let jVarLocalItemName = document.getElementById("ItemSelected").value;
                    let jVarLocalPkName = document.getElementById("PkSelected").value;
                    let LocalFromName = document.getElementById("ColumnSelected").value;
                    let LocalToName = document.getElementById("ColumnpkDuplicate").value;
                    let jVarLocalRoute = this.Config.RouteStart.Start;
                    let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                    fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Duplicate/Columns?inFolderName=Reports&inJsonFileName=LedgerAuto.json&inItemName=${jVarLocalItemName}&inPkName=${jVarLocalPkName}&inFromName=${LocalFromName}&inToName=${LocalToName}`)
                        .then(response => {
                            if (!response.ok) { throw new Error(response.statusText) };

                            return response.json();
                        }).then((FetchData) => {
                            if (FetchData.KTF) {

                            }
                        }).catch(error => { });
                },
                TableColumn: {
                    FetchToServer: () => {
                        let jVarLocalItemName = document.getElementById("ItemSelected").value;
                        let LocalFromName = document.getElementById("ColumnSelected").value;
                        let LocalToName = document.getElementById("ColumnpkDuplicate").value;
                        let LocalEndPoint = "TableColumn";
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/Duplicate/Columns/${LocalEndPoint}/${jVarLocalItemName}/${LocalFromName}/${LocalToName}`)
                            .then(response => {
                                if (!response.ok) { throw new Error(response.statusText) };

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {

                                }
                            }).catch(error => { });
                    }
                }
            }
        },
        ReportFuncs: {
            TableInfo: {
                ShowData: {
                    FetchFunc: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });
                        let jVarLocalFetchUrl = this.AdminApi.ReportFuncs.TableInfo.ShowData.CommonFuncs.PrepareUrl.ForShowData({ inUrlObject: jVarLocalUrlObject });

                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`)
                            .then(response => response.json())
                            .then(dataFromApi => {
                                //  console.log("dataFromApi : ", dataFromApi);
                                this.AdminApi.ReportFuncs.TableInfo.ShowData.CommonFuncs.ShowOnScreen({ injVarData: dataFromApi, inJVarHtmlControl: jVarLocalHtmlFormControl });

                                this.AdminApi.ReportFuncs.TableInfo.ShowData.CommonFuncs.ChangeClasses({ inJVarHtmlCard: jVarLocalHtmlCard });
                                this.AdminApi.ReportFuncs.TableInfo.ShowData.CommonFuncs.DefaultFocus({ inJVarHtmlControl: jVarLocalHtmlFormControl });

                            });
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForShowData: ({ inUrlObject }) => {
                                console.log("inUrlObject", inUrlObject);

                                let jVarLocalItemName = inUrlObject.ReportName;



                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/TableInfo/ShowData?inReportName=${jVarLocalItemName}`;
                                console.log("jVarLocalFetchUrl", jVarLocalFetchUrl);
                                return jVarLocalFetchUrl;
                            }
                        },
                        ChangeClasses: ({ inJVarHtmlCard }) => {
                            if (inJVarHtmlCard.querySelector(".card-footer button").hasAttribute("disabled")) {
                                inJVarHtmlCard.querySelector(".card-footer button").attributes.removeNamedItem("disabled");
                            };
                        },
                        DefaultFocus: ({ inJVarHtmlControl }) => {
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                            if (jVarLocalHtmlNamesArray.length > 0) {
                                jVarLocalHtmlNamesArray[0].focus();
                            };
                        },
                        ShowOnScreen: ({ injVarData, inJVarHtmlControl }) => {
                            console.log("inJVarHtmlControl", inJVarHtmlControl);
                            let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");
                            let jVarLocalFetchBodydata = {};

                            jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                                if (injVarData.hasOwnProperty(LoopItem.name)) {
                                    this.AdminApi.ReportFuncs.TableInfo.ShowData.CommonFuncs.ShowOnScreenSwitch({ inLoopItem: LoopItem, injVarData });
                                };
                            });

                            return jVarLocalFetchBodydata;
                        },
                        ShowOnScreenSwitch: ({ inLoopItem, injVarData }) => {
                            switch (inLoopItem.type) {
                                case "checkbox":
                                    inLoopItem.checked = injVarData[inLoopItem.name];
                                    break;

                                default:
                                    inLoopItem.value = injVarData[inLoopItem.name];
                                    break;
                            }
                        },

                    }
                },
                Update: {
                    FetchPost: (injVarThis) => {
                        let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
                        let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
                        let jVarLocalEndPoint = jVarLocalHtmlCard.dataset.kqueryobject;

                        let jVarLocalUrlObject = this.AdminApi.CommonFuncs.CheckBeforeFetch({ inHtmlParentControl: document.getElementById("KDataListNavBar") });

                        let jVarLocalFetchUrl = this.AdminApi.ReportFuncs.TableInfo.Update.CommonFuncs.PrepareUrl.ForUpdate({ inUrlObject: jVarLocalUrlObject });
                        let jVarLocalFetchBodydata = this.AdminApi.Config.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });;
                        console.log("jVarLocalEndPoint : ", jVarLocalEndPoint, jVarLocalFetchBodydata);
                        fetch(`${jVarLocalFetchUrl}&inKQueryObject=${jVarLocalEndPoint}`, {
                            method: "post",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(jVarLocalFetchBodydata)
                        })
                            .then(response => response.json())
                            .then(dataFromApi => {
                                let jVarLocalData = dataFromApi;
                                if (jVarLocalData.KTF) {

                                    //this.AdminApi.Config.TableInfo.Update.CommonFuncs.ChangeClasses({ inJVarLocalHtmlCard: jVarLocalHtmlCard });
                                    this.AdminApi.CommonFuncs.ChangeClasses({ inJVarLocalHtmlCard: jVarLocalHtmlCard });
                                }
                            });
                    },
                    CommonFuncs: {
                        PrepareUrl: {
                            ForUpdate: ({ inUrlObject }) => {
                                let jVarLocalItemName = inUrlObject.ReportName;

                                let jVarLocalRoute = this.Config.RouteStart.Start;
                                let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Reports/TableInfo/Update?inReportName=${jVarLocalItemName}`;

                                return jVarLocalFetchUrl;
                            }
                        },
                        CheckBeforeFetch: () => {
                            // console.log("class");
                            let jVarReturnObject = { KTF: false, FolderName: "", FileName: "", ItemName: "", ScreenName: "", ColumnName: "" };

                            jVarReturnObject.FolderName = document.getElementById("FolderSelected").value;
                            jVarReturnObject.FileName = document.getElementById("FileSelected").value;
                            jVarReturnObject.ItemName = document.getElementById("ItemSelected").value;
                            jVarReturnObject.ScreenName = document.getElementById("ScreenSelected").value;

                            if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("FolderSelected").list, inSearchValue: jVarReturnObject.FolderName })) {
                                if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("FileSelected").list, inSearchValue: jVarReturnObject.FileName })) {
                                    if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ItemSelected").list, inSearchValue: jVarReturnObject.ItemName })) {
                                        if (this.DataListFuncs.SearchFuncs.SingleValue({ inDataList: document.getElementById("ScreenSelected").list, inSearchValue: jVarReturnObject.ScreenName })) {
                                            jVarReturnObject.KTF = true;
                                        } else {
                                            document.getElementById("ScreenSelected").focus();
                                            document.getElementById("ScreenSelected").classList.add("is-invalid");
                                        };
                                    } else {
                                        document.getElementById("ItemSelected").focus();
                                        document.getElementById("ItemSelected").classList.add("is-invalid");
                                    };
                                } else {
                                    document.getElementById("FileSelected").focus();
                                    document.getElementById("FileSelected").classList.add("is-invalid");
                                };
                            } else {
                                document.getElementById("FolderSelected").focus();
                                document.getElementById("FolderSelected").classList.add("is-invalid");
                            };

                            return jVarReturnObject;
                        },
                        ChangeClasses: ({ inJVarHtmlCard }) => {
                            if (inJVarHtmlCard.querySelector(".card-footer button").hasAttribute("disabled")) {
                                inJVarHtmlCard.querySelector(".card-footer button").attributes.removeNamedItem("disabled");
                            };
                        },


                    }
                }
            },
        },
        CommonFuncs: {
            CheckBeforeFetch: ({ inHtmlParentControl }) => {
                let jVarLocalHtmlInputs = inHtmlParentControl.querySelectorAll("input[list]");
                let jVarReturnObject = { KTF: true };

                jVarLocalHtmlInputs.forEach((LoopItem) => {
                    if (this.DataListFuncs.SearchFuncs.CheckInDataList({ inHtmlControl: LoopItem })) {
                        jVarReturnObject[LoopItem.name] = LoopItem.value;
                    } else {
                        jVarReturnObject.KTF = false;
                    }
                });

                return jVarReturnObject;
            },
            PreparePostData: {
                ForUpdateTakeInput: ({ inJVarHtmlControl }) => {
                    let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                    let jVarLocalFetchBodydata = {};

                    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                        switch (LoopItem.type) {
                            case "checkbox":
                                jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                                break;

                            default:
                                jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                                break;
                        }
                    });

                    return jVarLocalFetchBodydata;
                }
            },
            ChangeClasses: ({ inJVarLocalHtmlCard }) => {
                inJVarLocalHtmlCard.classList.remove("border-success");
                inJVarLocalHtmlCard.classList.add("border-warning");
            },
            ChangeClassesFuncs: {
                ShowData: ({ inJVarHtmlCard }) => {
                    let jVarLocalFooterButtons = inJVarHtmlCard.querySelectorAll(".card-footer button");

                    jVarLocalFooterButtons.forEach((LoopItem) => {
                        if (LoopItem.hasAttribute("disabled")) {
                            LoopItem.attributes.removeNamedItem("disabled");
                        };
                    });
                },
                Update: ({ inJVarLocalHtmlCard }) => {
                    inJVarLocalHtmlCard.classList.remove("border-success");
                    inJVarLocalHtmlCard.classList.add("border-warning");
                }
            },
            ShowOnScreenFuncs: {
                ShowOnScreen: ({ injVarData, inJVarHtmlControl }) => {
                    let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
                        if (injVarData.hasOwnProperty(LoopItem.name)) {
                            this.AdminApi.CommonFuncs.ShowOnScreenFuncs.CommonFuncs.ShowOnScreenSwitch({ inLoopItem: LoopItem, injVarData });
                        };
                    });
                },
                CommonFuncs: {
                    ShowOnScreenSwitch: ({ inLoopItem, injVarData }) => {
                        switch (inLoopItem.type) {
                            case "checkbox":
                                inLoopItem.checked = injVarData[inLoopItem.name];
                                break;

                            default:
                                inLoopItem.value = injVarData[inLoopItem.name];
                                break;
                        }
                    }
                }
            },
            DefaultFocus: ({ inJVarHtmlControl }) => {
                let jVarLocalHtmlNamesArray = inJVarHtmlControl.querySelectorAll("[name]");

                if (jVarLocalHtmlNamesArray.length > 0) {
                    jVarLocalHtmlNamesArray[0].focus();
                };
            }
        },
        Utilities: {
            Insert: {
                Folders: {
                    PullData: () => {
                        let jVarLocalFolderName =
                            document.getElementById("FolderSelected").value;
                        let LocalToName = document.getElementById("FolderDuplicate").value;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        fetch(
                            `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/Folder/Insert?inFolderName=${jVarLocalFolderName}&ToName=${LocalToName}`
                        ).then((response) => {
                            if (!response.ok) {
                                throw new Error(response.statusText);
                            }

                            return response.json();
                        }).then((FetchData) => {
                            console.log("FetchData : ", FetchData);
                            if (FetchData.KTF) {
                                var myModalEl = document.getElementById("FoldersModal");
                                var modal = bootstrap.Modal.getInstance(myModalEl); // Ret
                                modal.hide();
                                this.ModalPopUp.StartFunc({
                                    inType: "CreateSuccessForFolder",
                                });
                                jVarGlobalClientObject.DataApi.Folders.PullData();
                            }
                        }).catch((error) => { });
                    },
                    FetchFunc: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");

                        Swal.fire({
                            title: 'New folder name',
                            html: `<input type="text" id="FolderSelected" class="swal2-input" placeholder="Insert FileName "> `,
                            confirmButtonText: 'Insert',
                            focusConfirm: false,

                            preConfirm: () => {
                                const FolderName = Swal.getPopup().querySelector('#FolderSelected').value

                                return { FolderName: FolderName }
                            }
                        }).then((result) => {
                            let jVarLocalFolderName = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass").value;

                            let LocalToName = result.value.FolderName;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/Folder/Insert?inFolderName=${jVarLocalFolderName}&ToName=${LocalToName}`).
                                then((response) => {
                                    if (!response.ok) {
                                        throw new Error(response.statusText);
                                    }

                                    return response.json();
                                })
                                .then((FetchData) => {
                                    if (FetchData.KTF) {
                                        this.ModalPopUp.StartFunc({ inType: "CreateSuccess" });
                                    }
                                })
                                .catch((error) => { });
                        });
                    }
                },
                Files: {
                    PullData: () => {
                        let jVarLocalFolderName = document.getElementById("FolderSelected").value;
                        let LocalFromName = document.getElementById("FileSelected").value;

                        let LocalToName = document.getElementById("FileDuplicate").value;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        fetch(
                            `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/File/Insert?inFolderName=${jVarLocalFolderName}&FromName=${LocalFromName}&ToName=${LocalToName}`
                        )
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error(response.statusText);
                                }

                                return response.json();
                            })
                            .then((FetchData) => {
                                //                                console.log("FetchData : ", FetchData);
                                if (FetchData.KTF) {
                                    var myModalEl = document.getElementById("FilesModal");
                                    var modal = bootstrap.Modal.getInstance(myModalEl); // Ret
                                    modal.hide();
                                    this.ModalPopUp.StartFunc({ inType: "CreateSuccess" });
                                }
                            })
                            .catch((error) => { });
                    },
                    FetchFunc: (inEvent) => {
                        console.log("inEvent", inEvent);
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");
                        Swal.fire({
                            title: 'New FileName',
                            html: `<input type="text" id="FileDuplicate" class="swal2-input" placeholder="Insert FileName "> `,

                            confirmButtonText: 'Insert',
                            focusConfirm: false,

                            preConfirm: () => {
                                const FileName = Swal.getPopup().querySelector('#FileDuplicate').value

                                return { FileName: FileName }
                            }
                        }).then((result) => {
                            let jVarLocalFolderName = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass").value;
                            let LocalFromName = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass").value;

                            let LocalToName = result.value.FileName;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/File/Insert?inFolderName=${jVarLocalFolderName}&FromName=${LocalFromName}&ToName=${LocalToName}`;

                            fetch(jVarLocalFetchUrl).then((response) => {
                                if (!response.ok) throw new Error(response.statusText);

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    var myModalEl = document.getElementById("FilesModal");
                                    var modal = bootstrap.Modal.getInstance(myModalEl); // Ret
                                    modal.hide();
                                    this.ModalPopUp.StartFunc({ inType: "CreateSuccess" });
                                }
                            }).catch((error) => { });
                        })
                    }
                },
                Items: {
                    PullData: () => {
                        let jVarLocalFolderName =
                            document.getElementById("FolderSelected").value;
                        let jVarLocalFileName =
                            document.getElementById("FileSelected").value;

                        let LocalFromName = document.getElementById("ItemSelected").value;
                        let LocalToName = document.getElementById("ItemDuplicate").value;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        fetch(
                            `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/Items/Insert?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&FromName=${LocalFromName}&ToName=${LocalToName}`
                        )
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error(response.statusText);
                                }

                                return response.json();
                            })
                            .then((FetchData) => {
                                console.log("FetchData : ", FetchData);
                                if (FetchData.KTF) {
                                    var myModalEl = document.getElementById("ItemsModal");
                                    var modal = bootstrap.Modal.getInstance(myModalEl); // Ret
                                    modal.hide();
                                    this.ModalPopUp.StartFunc({ inType: "CreateSuccessForItem" });
                                }
                            })
                            .catch((error) => { });
                    },
                    ForDataListRelative: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        //let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let jVarLocalFolderHtmlControl =
                            document.getElementById("FolderSelected");
                        let jVarLocalFileHtmlControl =
                            document.getElementById("FileSelected");

                        let jVarLocalItemHtmlControl = document.getElementById(
                            jVarLocalCurrentTarget.dataset.datalistid
                        );
                        console.log("item", jVarLocalItemHtmlControl.list);

                        if (
                            this.DataListFuncs.SearchFuncs.CheckInDataList({
                                inHtmlControl: jVarLocalFolderHtmlControl,
                            })
                        ) {
                            if (
                                this.DataListFuncs.SearchFuncs.CheckInDataList({
                                    inHtmlControl: jVarLocalFileHtmlControl,
                                })
                            ) {
                                let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Items/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}`;

                                fetch(jVarLocalFetchUrl)
                                    .then((response) => response.text())
                                    .then((dataFromApi) => {
                                        this.DataListFuncs.SingleValueEmptyBefore({
                                            inDataList: jVarLocalItemHtmlControl.list,
                                            inData: JSON.parse(dataFromApi),
                                        });

                                        if (jVarLocalItemHtmlControl.list.options.length === 1) {
                                            jVarLocalItemHtmlControl.value =
                                                jVarLocalItemHtmlControl.list.options[0].value;
                                            this.DataApi.Screens.ForDataList();
                                        } else {
                                            jVarLocalItemHtmlControl.focus();
                                        }
                                    });
                            }
                        }
                    },
                    FetchFunc: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");
                        Swal.fire({
                            title: 'New ItemName',
                            html: `<input type="text" id="ItemDuplicate" class="swal2-input" placeholder="Insert ItemName "> `,

                            confirmButtonText: 'Insert',
                            focusConfirm: false,

                            preConfirm: () => {
                                const ItemName = Swal.getPopup().querySelector('#ItemDuplicate').value

                                return { ItemName: ItemName }
                            }
                        }).then((result) => {
                            let jVarLocalFolderName = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass").value;
                            let jVarLocalFileName = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass").value;
                            let LocalFromName = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass").value;

                            let LocalToName = result.value.ItemName;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/Data/Items/Insert?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&FromName=${LocalFromName}&ToName=${LocalToName}`;

                            fetch(jVarLocalFetchUrl).then((response) => {
                                if (!response.ok) {
                                    throw new Error(response.statusText);
                                }

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    this.ModalPopUp.StartFunc({ inType: "CreateSuccessForItem" });
                                }
                            }).catch((error) => { });
                        })
                    }
                },
                Screens: {
                    PullData: () => {
                        let jVarLocalFolderName =
                            document.getElementById("FolderSelected").value;
                        let jVarLocalFileName =
                            document.getElementById("FileSelected").value;
                        let jVarLocalItemName =
                            document.getElementById("ItemSelected").value;
                        let LocalFromName = document.getElementById("ScreenSelected").value;
                        let LocalToName = document.getElementById("ScreenDuplicate").value;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        fetch(
                            `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/Screens/Insert?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&FromName=${LocalFromName}&ToName=${LocalToName}`
                        )
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error(response.statusText);
                                }

                                return response.json();
                            })
                            .then((FetchData) => {
                                console.log("FetchData : ", FetchData);
                                if (FetchData.KTF) {
                                    var myModalEl = document.getElementById("ScreensModal");
                                    var modal = bootstrap.Modal.getInstance(myModalEl); // Ret
                                    modal.hide();
                                    this.ModalPopUp.StartFunc({
                                        inType: "CreateSuccessForScreen",
                                    });
                                }
                            })
                            .catch((error) => { });
                    },
                    FetchFunc: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");

                        Swal.fire({
                            title: 'New ScreenName',
                            html: `<input type="text" id="ScreenDuplicate" class="swal2-input" placeholder="Insert ScreenName "> `,
                            confirmButtonText: 'Insert',
                            focusConfirm: false,
                            preConfirm: () => {
                                const ScreenName = Swal.getPopup().querySelector('#ScreenDuplicate').value

                                return { ScreenName: ScreenName }
                            }
                        }).then((result) => {
                            let jVarLocalFolderName = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass").value;
                            let jVarLocalFileName = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass").value;
                            let jVarLocalItemName = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass").value;

                            let LocalToName = result.value.ScreenName;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                            fetch(
                                `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/Screens/Insert?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&ToName=${LocalToName}`
                            )
                                .then((response) => {
                                    if (!response.ok) {
                                        throw new Error(response.statusText);
                                    }

                                    return response.json();
                                })
                                .then((FetchData) => {
                                    if (FetchData.KTF) {
                                        this.ModalPopUp.StartFunc({ inType: "CreateSuccessForScreen" });
                                    }
                                })
                                .catch((error) => { });
                        })
                    }
                },
                Columns: {
                    PullData: () => {
                        let jVarLocalFolderName =
                            document.getElementById("FolderSelected").value;
                        let jVarLocalFileName =
                            document.getElementById("FileSelected").value;
                        let jVarLocalItemName =
                            document.getElementById("ItemSelected").value;
                        let jVarLocalScreenName =
                            document.getElementById("ScreenSelected").value;
                        let LocalFromName = document.getElementById("ColumnSelected").value;
                        let LocalToName = document.getElementById("ColumnDuplicate").value;
                        let jVarLocalRoute = this.Config.RouteStart.Start;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        fetch(
                            `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/Columns/Insert?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&FromName=${LocalFromName}&ToName=${LocalToName}`
                        )
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error(response.statusText);
                                }

                                return response.json();
                            })
                            .then((FetchData) => {
                                console.log("FetchData : ", FetchData);
                                if (FetchData.KTF) {
                                }
                            })
                            .catch((error) => { });
                    },
                    ForDataListRelative: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalRoute = this.Config.RouteStart.Start;

                        let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
                        let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                        let jVarLocalFolderHtmlControl =
                            document.getElementById("FolderSelected");
                        let jVarLocalFileHtmlControl =
                            document.getElementById("FileSelected");
                        let jVarLocalItemHtmlControl =
                            document.getElementById("ReportsItemInputId");

                        let jVarLocalColumnHtmlControl = document.getElementById(
                            jVarLocalCurrentTarget.dataset.datacolumnlistid
                        );

                        if (
                            this.DataListFuncs.SearchFuncs.CheckInDataList({
                                inHtmlControl: jVarLocalFolderHtmlControl,
                            })
                        ) {
                            if (
                                this.DataListFuncs.SearchFuncs.CheckInDataList({
                                    inHtmlControl: jVarLocalFileHtmlControl,
                                })
                            ) {
                                if (
                                    this.DataListFuncs.SearchFuncs.CheckInDataList({
                                        inHtmlControl: jVarLocalItemHtmlControl,
                                    })
                                ) {
                                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Columns/ForDataList?inFolderName=${jVarLocalFolderHtmlControl.value}&inJsonFileName=${jVarLocalFileHtmlControl.value}&inItemName=${jVarLocalItemHtmlControl.value}`;

                                    fetch(jVarLocalFetchUrl)
                                        .then((response) => response.text())
                                        .then((dataFromApi) => {
                                            this.DataListFuncs.SingleValueEmptyBefore({
                                                inDataList: jVarLocalColumnHtmlControl.list,
                                                inData: JSON.parse(dataFromApi),
                                            });

                                            jVarLocalColumnHtmlControl.focus();
                                            if (
                                                jVarLocalColumnHtmlControl.list.options.length === 1
                                            ) {
                                                jVarLocalColumnHtmlControl.value =
                                                    jVarLocalColumnHtmlControl.list.options[0].value;
                                            }
                                        });
                                }
                            }
                        }
                    },
                    FetchFunc: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");

                        Swal.fire({
                            title: 'New ColumnName',
                            html: `<input type="text" id="ColumnDuplicate" class="swal2-input" placeholder="Insert ColumnName "> `,
                            confirmButtonText: 'Insert',
                            focusConfirm: false,
                            preConfirm: () => {
                                const ColumnName = Swal.getPopup().querySelector('#ColumnDuplicate').value

                                return { ColumnName: ColumnName }
                            }
                        }).then((result) => {
                            let jVarLocalFolderName = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass").value;
                            let jVarLocalFileName = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass").value;
                            let jVarLocalItemName = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass").value;
                            let jVarLocalScreenName = jVarLocalHtmlKSCard.querySelector(".ScreenSelectedClass").value;

                            let LocalToName = result.value.ColumnName;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                            fetch(
                                `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/Columns/Insert?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&ToName=${LocalToName}`
                            )
                                .then((response) => {
                                    if (!response.ok) {
                                        throw new Error(response.statusText);
                                    }

                                    return response.json();
                                })
                                .then((FetchData) => {
                                    if (FetchData.KTF) {
                                        this.ModalPopUp.StartFunc({ inType: "CreateSuccessForScreen" });
                                    }
                                })
                                .catch((error) => { });
                        })
                    }
                },
                SubTableColumns: {
                    FetchFunc: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");

                        Swal.fire({
                            title: 'New SubTableName',
                            confirmButtonText: 'Insert',
                            focusConfirm: false
                        }).then((result) => {
                            let jVarLocalFolderName = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass").value;
                            let jVarLocalFileName = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass").value;
                            let jVarLocalItemName = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass").value;
                            let jVarLocalScreenName = jVarLocalHtmlKSCard.querySelector(".ScreenSelectedClass").value;
                            let jVarLocalColumnName = jVarLocalHtmlKSCard.querySelector(".ColumnSelectedClass").value;

                            let LocalToName = result.value.ColumnName;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                            fetch(
                                `/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Insert/SubTableColumns?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&inColumnName=${jVarLocalColumnName}`
                            ).then((response) => {
                                if (!response.ok) {
                                    throw new Error(response.statusText);
                                }

                                return response.json();
                            }).then((FetchData) => {
                                if (FetchData.KTF) {
                                    this.ModalPopUp.StartFunc({ inType: "CreateSuccessForScreen" });
                                }
                            }).catch((error) => { });
                        });
                    }
                },
                SubTable: {
                    Columns: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");

                        Swal.fire({
                            title: 'New SubTableColumnName',
                            html: `<input type="text" id="SubTableColumnInsert" class="swal2-input" placeholder="Insert NewSubTableColumnName "> `,
                            confirmButtonText: 'Insert',
                            focusConfirm: false,
                            preConfirm: () => {
                                const ColumnName = Swal.getPopup().querySelector('#SubTableColumnInsert').value

                                return { ColumnName: ColumnName }
                            }
                        }).then((result) => {

                            let jVarLocalFolderName = jVarLocalHtmlKSCard.querySelector(".FolderSelectedClass").value;
                            let jVarLocalFileName = jVarLocalHtmlKSCard.querySelector(".FileSelectedClass").value;
                            let jVarLocalItemName = jVarLocalHtmlKSCard.querySelector(".ItemSelectedClass").value;
                            let jVarLocalScreenName = jVarLocalHtmlKSCard.querySelector(".ScreenSelectedClass").value;
                            let jVarLocalColumnName = jVarLocalHtmlKSCard.querySelector(".ColumnSelectedClass").value;
                            let LocalToName = result.value.ColumnName;

                            //let InsertSubTableColumnName = document.getElementById("SubTableColumnInsert").value;
                            // let LocalFromName = document.getElementById("SubTableColumnSelected").value;
                            // let LocalToName = document.getElementById("SubTableColumnInsert").value;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

                            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/Data/Config/SubTable/Columns/Insert?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&inColumnName=${jVarLocalColumnName}&inSubTableColumnName=${LocalToName}`)
                                .then(response => {
                                    if (!response.ok) { throw new Error(response.statusText) };

                                    return response.json();
                                }).then((FetchData) => {
                                    console.log("FetchData : ", FetchData);
                                    if (FetchData.KTF) {

                                    }
                                }).catch(error => { });
                        })

                    }
                }
            },
            Duplicate: {
                Preload: {
                    FetchFunc: (inEvent) => {
                        let jVarLocalCurrentTarget = inEvent.currentTarget;
                        console.log("jVarLocalCurrentTarget", jVarLocalCurrentTarget);
                        let jVarLocalHtmlKSCard = jVarLocalCurrentTarget.closest(".KSCard");

                        Swal.fire({
                            title: 'New folder name',
                            html: `<input type="text" id="ToName" class="swal2-input" placeholder="Insert FileName "> `,
                            confirmButtonText: 'Insert',
                            focusConfirm: false,

                            preConfirm: () => {
                                const ToName = Swal.getPopup().querySelector('#ToName').value

                                return { ToName: ToName }
                            }
                        }).then((result) => {
                            console.log("result", result);
                            const FromName = jVarLocalHtmlKSCard.querySelector('.ItemSelectedClass').value

                            let LocalToName = result.value.ToName;
                            let jVarLocalRoute = this.Config.RouteStart.Start;
                            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;
                            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Utility/Json/PreLoad/Duplicate?FromName=${FromName}&ToName=${LocalToName}`).
                                then((response) => {
                                    if (!response.ok) {
                                        throw new Error(response.statusText);
                                    }

                                    return response.json();
                                })
                                .then((FetchData) => {
                                    if (FetchData.KTF) {
                                        this.ModalPopUp.StartFunc({ inType: "CreateSuccess" });
                                    }
                                })
                                .catch((error) => { });

                        })
                    }
                }
            }
        }
    };

    Duplicate = {
        Files: () => {
            let jVarLocalFolderName = document.getElementById("FolderSelected").value;
            let LocalFromName = document.getElementById("FileSelected").value;
            // let LocalFromName = document.getElementById("ItemSelected").value;
            let LocalToName = document.getElementById("FileDuplicate").value;
            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Duplicate/Files?inFolderName=${jVarLocalFolderName}&FromName=${LocalFromName}&ToName=${LocalToName}`)

                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    console.log("FetchData : ", FetchData);
                    if (FetchData.KTF) {

                    }
                })
                .catch(error => { });
        },
        Items: () => {
            let jVarLocalFolderName = document.getElementById("FolderSelected").value;
            let jVarLocalFileName = document.getElementById("FileSelected").value;
            let LocalFromName = document.getElementById("ItemSelected").value;
            let LocalToName = document.getElementById("ItemDuplicate").value;
            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Duplicate/Items?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&FromName=${LocalFromName}&ToName=${LocalToName}`)

                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    console.log("FetchData : ", FetchData);
                    if (FetchData.KTF) {

                    }
                })
                .catch(error => { });


        },
        Screens: () => {
            let jVarLocalFolderName = document.getElementById("FolderSelected").value;
            let jVarLocalFileName = document.getElementById("FileSelected").value;
            let jVarLocalItemName = document.getElementById("ItemSelected").value;
            let LocalFromName = document.getElementById("ScreenSelected").value;
            let LocalToName = document.getElementById("ScreenDuplicate").value;
            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Duplicate/Screens?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&FromName=${LocalFromName}&ToName=${LocalToName}`)

                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    console.log("FetchData : ", FetchData);
                    if (FetchData.KTF) {

                    }
                })
                .catch(error => { });


        },
        Columns: () => {
            let jVarLocalFolderName = document.getElementById("FolderSelected").value;
            let jVarLocalFileName = document.getElementById("FileSelected").value;
            let jVarLocalItemName = document.getElementById("ItemSelected").value;
            let jVarLocalScreenName = document.getElementById("ScreenSelected").value;
            let LocalFromName = document.getElementById("ColumnSelected").value;
            let LocalToName = document.getElementById("ColumnDuplicate").value;
            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Duplicate/Columns?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&FromName=${LocalFromName}&ToName=${LocalToName}`)

                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    console.log("FetchData : ", FetchData);
                    if (FetchData.KTF) {

                    }
                })
                .catch(error => { });


        },
        SubTableColumns: () => {
            let jVarLocalFolderName = document.getElementById("FolderSelected").value;
            let jVarLocalFileName = document.getElementById("FileSelected").value;
            let jVarLocalItemName = document.getElementById("ItemSelected").value;
            let jVarLocalScreenName = document.getElementById("ScreenSelected").value;
            let jVarLocalColumnName = document.getElementById("ColumnSelected").value;
            let LocalFromName = document.getElementById("SubTableColumnSelected").value;
            let LocalToName = document.getElementById("SubTableColumnDuplicate").value;
            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Duplicate/SubTableColumns?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&inColumnName=${jVarLocalColumnName}&FromName=${LocalFromName}&ToName=${LocalToName}`)

                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    console.log("FetchData : ", FetchData);
                    if (FetchData.KTF) {

                    }
                })
                .catch(error => { });


        }
    };

    Insert = {
        SubTableColumns: () => {
            let jVarLocalFolderName = document.getElementById("FolderSelected").value;
            let jVarLocalFileName = document.getElementById("FileSelected").value;
            let jVarLocalItemName = document.getElementById("ItemSelected").value;
            let jVarLocalScreenName = document.getElementById("ScreenSelected").value;
            let jVarLocalColumnName = document.getElementById("ColumnSelected").value;
            let InsertSubTableColumnName = document.getElementById("SubTableColumnInsert").value;
            // let LocalFromName = document.getElementById("SubTableColumnSelected").value;
            // let LocalToName = document.getElementById("SubTableColumnInsert").value;
            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Insert/SubTableColumns?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&inColumnName=${jVarLocalColumnName}&inSubTableColumnName=${InsertSubTableColumnName}`)

                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    console.log("FetchData : ", FetchData);
                    if (FetchData.KTF) {

                    }
                })
                .catch(error => { });
        }
    };

    Alter = {
        Items: () => {
            let jVarLocalFolderName = document.getElementById("FolderSelected").value;
            let jVarLocalFileName = document.getElementById("FileSelected").value;
            let LocalFromName = document.getElementById("ItemSelected").value;
            let LocalToName = document.getElementById("ItemAlter").value;

            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Alter/Items?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&FromName=${LocalFromName}&ToName=${LocalToName}`)

                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    console.log("FetchData : ", FetchData);
                    if (FetchData.KTF) {

                    }
                })
                .catch(error => { });


        },
        Screens: () => {
            let jVarLocalFolderName = document.getElementById("FolderSelected").value;
            let jVarLocalFileName = document.getElementById("FileSelected").value;
            let jVarLocalItemName = document.getElementById("ItemSelected").value;
            let LocalFromName = document.getElementById("ScreenSelected").value;
            let LocalToName = document.getElementById("ScreenAlter").value;
            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Alter/Screens?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&FromName=${LocalFromName}&ToName=${LocalToName}`)

                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    console.log("FetchData : ", FetchData);
                    if (FetchData.KTF) {

                    }
                })
                .catch(error => { });


        },
        Columns: () => {
            let jVarLocalFolderName = document.getElementById("FolderSelected").value;
            let jVarLocalFileName = document.getElementById("FileSelected").value;
            let jVarLocalItemName = document.getElementById("ItemSelected").value;
            let jVarLocalScreenName = document.getElementById("ScreenSelected").value;
            let LocalFromName = document.getElementById("ColumnSelected").value;
            let LocalToName = document.getElementById("ColumnAlter").value;
            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalAdminSubRoute = this.Config.RouteStart.AdminSubRoute;

            fetch(`/${jVarLocalRoute}/${jVarLocalAdminSubRoute}/Alter/Columns?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}&FromName=${LocalFromName}&ToName=${LocalToName}`)

                .then(response => {
                    if (!response.ok) { throw new Error(response.statusText) };

                    return response.json();
                }).then((FetchData) => {
                    console.log("FetchData : ", FetchData);
                    if (FetchData.KTF) {

                    }
                })
                .catch(error => { });


        }
    };

    Reports = {
        Show: (inEvent) => {
            inEvent.preventDefault();

            let jVarLocalcurrentTarget = inEvent.currentTarget;
            let jVarLocalReportName = document.getElementById("ReportNameSelected").value;
            let jVarLocalRoute = this.Config.RouteStart.Start;
            this.CommonFuncs.ShowSpinner.ShowProcessStart(jVarLocalcurrentTarget);

            let LocalFetchURL = `${window.location.origin}/${jVarLocalRoute}/Reports/Show?inReportName=${jVarLocalReportName}`

            fetch(LocalFetchURL).then(response => {
                if (response.status === 403) {
                    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: false });
                    myModal.show();

                    return null;
                };
                const contentType = response.headers.get("content-type");

                if (contentType && contentType.indexOf("text/html") !== -1) {
                    return response.text();
                } else {
                    return response.json();
                };
            }).then(FetchData => {
                if (typeof FetchData === "string") {
                    this.Reports.CommonFuncs.Show.PostFetch.Forstring({
                        inFetchData: FetchData,
                        inJVarLocalcurrentTarget: jVarLocalcurrentTarget
                    });
                } else {
                    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                    this.AppendToDOM.BuildFromArrayDataCommon();
                    this.CommonFuncs.ShowSpinner.ShowProcessEnd(jVarLocalcurrentTarget);
                };
            });
        },
        ShowWithFilters: (inEvent) => {
            inEvent.preventDefault();
            let jVarLocalHtmlCard = inEvent.currentTarget.closest(".card");
            let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
            let jVarLocalReportName = document.getElementById("ReportNameSelected").value;

            let jVarLocalFetchBodydata = this.CommonFuncs.PreparePostData.ForUpdateTakeInput({ inJVarHtmlControl: jVarLocalHtmlFormControl });

            let jVarLocalRoute = this.Config.RouteStart.Start;

            let LocalFetchURL = `${window.location.origin}/${jVarLocalRoute}/Reports/Show?inReportName=${jVarLocalReportName}`;

            fetch(LocalFetchURL, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jVarLocalFetchBodydata)
            }).then(response => {
                if (response.status === 403) {
                    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: false });
                    myModal.show();

                    return null;
                };
                const contentType = response.headers.get("content-type");

                if (contentType && contentType.indexOf("text/html") !== -1) {
                    return response.text();
                } else {
                    console.log("js");
                    return response.json();
                };
            }).then(FetchData => {
                if (typeof FetchData === "string") {
                    document.getElementById("KCont1").innerHTML = FetchData;
                } else {
                    jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                    this.AppendToDOM.BuildFromArrayDataCommonWithOutClear();
                };
            });
        },
        CommonFuncs: {
            Show: {
                PostFetch: {
                    Forstring: ({ inFetchData, inJVarLocalcurrentTarget }) => {
                        let jVarLocalDivWithContainer = document.createElement("div");
                        jVarLocalDivWithContainer.classList.add("container");
                        jVarLocalDivWithContainer.innerHTML = inFetchData;
                        document.getElementById("KCont1").innerHTML = "";

                        document.getElementById("KCont1").appendChild(jVarLocalDivWithContainer);
                        this.CommonFuncs.ShowSpinner.ShowProcessEnd(inJVarLocalcurrentTarget);
                    }
                }
            }
        }
    }

    DataListFuncs = {
        Fill: {
            Items: {
                SingleColumn: ({ inURL }) => {
                    fetch(inURL)
                        .then(response => {
                            if (response.status === 403) {
                                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: false });
                                myModal.show();

                                return null;
                            };

                            return response.json();
                        })
                        .then(dataFromApi => {
                            if (dataFromApi !== null) {
                                this.DataListFuncs.SingleValue({ inDataList: document.getElementById("ItemsList"), inData: dataFromApi });
                                document.getElementById("ItemSelected").focus();
                            };
                        });
                },
                ValueAndText: ({ inURL }) => {
                    fetch(inURL)
                        .then(response => {
                            if (response.status === 403) {
                                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: false });
                                myModal.show();

                                return null;
                            };

                            return response.json();
                        })
                        .then(dataFromApi => {
                            if (dataFromApi !== null) {
                                this.DataListFuncs.SingleValue({ inDataList: document.getElementById("ItemsList"), inData: dataFromApi });
                                document.getElementById("ItemSelected").focus();
                            };
                        });
                }
            }
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
        SingleValueEmptyBefore: ({ inDataList, inData }) => {
            let jVarLocaldatalistOption;
            inDataList.innerText = "";
            inData.forEach((item, index) => {
                jVarLocaldatalistOption = document.createElement("option");
                jVarLocaldatalistOption.setAttribute("value", item);
                inDataList.appendChild(jVarLocaldatalistOption);
            });

        },
        ValueAndText: ({ inDataList, inData }) => {
            let jVarLocaldatalistOption;
            if (Array.isArray(inData)) {
                inData.forEach((item, index) => {
                    jVarLocaldatalistOption = document.createElement("option");
                    jVarLocaldatalistOption.setAttribute("value", item[0]);
                    jVarLocaldatalistOption.innerText = item[1];
                    inDataList.appendChild(jVarLocaldatalistOption);
                });

            } else {
                // console.log("input is not an Array");
            };
        },
        ValueAndTextEmptyBefore: ({ inDataList, inData }) => {
            inDataList.innerText = "";
            this.DataListFuncs.ValueAndText({ inDataList, inData });
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

    Print = {
        Ui: {
            BringHtml: ({ inEvent }) => {
                let PromiseArray = [];
                let JsonPK = inEvent.currentTarget.closest("tr").dataset.pk;
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jvarFolderName = document.getElementById("FolderSelected").value;
                let jvarJsonFileName = document.getElementById("FileSelected").value;
                let jVarLocalItemName = document.getElementById("ItemSelected").value;

                console.log("jVarLocalRoute", document.getElementById("FileSelected").value, document.getElementById("ItemSelected").value);

                PromiseArray.push(fetch(`${window.location.origin}/${jVarLocalRoute}/Ui/Preview/Bill`));
                PromiseArray.push(fetch(`${window.location.origin}/${jVarLocalRoute}/Ui/Preview/Bill/PreviewHbs`));
                PromiseArray.push(fetch(`${window.location.origin}/${jVarLocalRoute}/Api/Preview/ShowData?inFolderName=${jvarFolderName}&inJsonFileName=${jvarJsonFileName}&inItemName=${jVarLocalItemName}&&PK=${JsonPK}`));

                Promise.all(PromiseArray)
                    .then(responses => {
                        return Promise.all(responses.map((LoopItem, LoopIndex) => {
                            switch (LoopIndex) {
                                case 0:
                                case 1:
                                    return LoopItem.text();
                                    break;
                                case 2:
                                    return LoopItem.json();

                                    break;
                                default:
                                    break;
                            };
                        }));
                    }).then(responses => {
                        // all responses are resolved successfully
                        for (let LoopIndex = 0; LoopIndex < responses.length; LoopIndex++) {
                            const jVarLocalLoopValue = responses[LoopIndex];
                            switch (LoopIndex) {
                                case 0:
                                case 1:
                                    document.getElementById("KCont1").innerHTML += jVarLocalLoopValue;
                                    break;
                                case 2:
                                    console.log("jVarLocalLoopValue", jVarLocalLoopValue)
                                    jVarGlobalPresentViewData = jVarLocalLoopValue.DataFromServer;
                                    var template = Handlebars.compile(document.getElementById("PreviewHbsId").innerHTML);
                                    document.getElementById("divIdDoubleBillPreviews").innerHTML = template(jVarGlobalPresentViewData);
                                    break;
                                default:
                                    break;
                            };
                        }

                    });
            },
            FromPublic: ({ inEvent }) => {
                let PromiseArray = [];
                let jVarLocalCurrentTarget = inEvent.currentTarget;

                let JsonPK = jVarLocalCurrentTarget.closest("tr").dataset.pk;
                let jVarLocalRoute = this.Config.RouteStart.Start;
                let jvarFolderName = document.getElementById("FolderSelected").value;
                let jvarJsonFileName = document.getElementById("FileSelected").value;
                let jVarLocalItemName = document.getElementById("ItemSelected").value;
                let jVarLocalCookieFirmDetails = localStorage.getItem("FirmDetails");
                let jVarLocalDataPk = JSON.parse(jVarLocalCookieFirmDetails);

                let jVarLocalUrlFromPrepareForUrl = this.Print.Ui.CommonFuncs.FromPublic.PrepareForUrl({ inCurrentTarget: jVarLocalCurrentTarget });

                let jVarLocalFetchForHbs = `${window.location.origin}/${jVarLocalRoute}/Html/UserData/JSON/${jVarLocalDataPk.kPK}/${jVarLocalUrlFromPrepareForUrl}/previewhbs.html`;

                let jVarLocalHbsHtml;
                let jVarLocalToShowHtml;

                PromiseArray.push(fetch(jVarLocalFetchForHbs));
                PromiseArray.push(fetch(`${window.location.origin}/${jVarLocalRoute}/Api/Preview/ShowData?inFolderName=${jvarFolderName}&inJsonFileName=${jvarJsonFileName}&inItemName=${jVarLocalItemName}&&PK=${JsonPK}`));

                Promise.all(PromiseArray)
                    .then(responses => {
                        return Promise.all(responses.map((LoopItem, LoopIndex) => {
                            switch (LoopIndex) {
                                case 0:
                                    return LoopItem.text();
                                    break;
                                case 1:
                                    return LoopItem.json();

                                    break;
                                default:
                                    break;
                            };
                        }));
                    }).then(responses => {
                        // all responses are resolved successfully
                        for (let LoopIndex = 0; LoopIndex < responses.length; LoopIndex++) {
                            const jVarLocalLoopValue = responses[LoopIndex];
                            switch (LoopIndex) {
                                case 0:
                                    jVarLocalHbsHtml = jVarLocalLoopValue;
                                    break;
                                case 1:
                                    jVarGlobalPresentViewData = jVarLocalLoopValue.DataFromServer;
                                    var template = Handlebars.compile(jVarLocalHbsHtml);
                                    jVarLocalToShowHtml = template(jVarGlobalPresentViewData);
                                    document.getElementById("KCont1").insertAdjacentHTML("beforeend", jVarLocalToShowHtml);
                                    break;
                                default:
                                    break;
                            };
                        }

                    });
            },
            StartFunc: ({ inEvent }) => {
                this.Login.ClientSideCookieFuncs.CheckToken();
                let jVarLocalCurrentTarget = inEvent.currentTarget;

                let JsonPK = jVarLocalCurrentTarget.closest("tr").dataset.pk;
                let jVarLocalCookieFirmDetails = localStorage.getItem("FirmDetails");
                let jVarLocalDataPk = JSON.parse(jVarLocalCookieFirmDetails);

                let jVarLocalDataSetValues = this.Print.Ui.CommonFuncs.FromPublic.PullFromDataSet({ inCurrentTarget: jVarLocalCurrentTarget });

                this.Print.Ui.CommonFuncs.FromPublic.FetchUrls({
                    inDataSetValues: jVarLocalDataSetValues,
                    inJsonPK: JsonPK,
                    inDataPk: jVarLocalDataPk.kPK
                });

            },
            FromSearchRow: ({ inEvent }) => {
                let jVarLocalCurrentTarget = inEvent.currentTarget;

                let jVarLocalCookieFirmDetails = localStorage.getItem("FirmDetails");
                let jVarLocalDataPk = JSON.parse(jVarLocalCookieFirmDetails);

                let jVarLocalDataSetValues = this.Print.Ui.CommonFuncs.FromPublic.PullFromDataSet({ inCurrentTarget: jVarLocalCurrentTarget });

                this.Print.Ui.CommonFuncs.FromPublic.FetchUrls({
                    inDataSetValues: jVarLocalDataSetValues,
                    inJsonPK: jVarLocalDataSetValues.JsonPk,
                    inDataPk: jVarLocalDataPk.kPK
                });
            },
            CommonFuncs: {
                FromPublic: {
                    PrepareForUrl: ({ inCurrentTarget }) => {
                        let jVarClosestCard = inCurrentTarget.closest(".KTableDivClass");
                        let jVarLocalJsonConfig = JSON.parse(jVarClosestCard.dataset.jsonconfig);
                        let jVarLocalItemConfig = JSON.parse(jVarClosestCard.dataset.itemconfig);

                        let jVarLocalFolderName = jVarLocalJsonConfig.inFolderName;
                        let jVarLocalJsonFileName = jVarLocalJsonConfig.inJsonFileName;
                        let jVarLocalItemName = jVarLocalItemConfig.inItemName;
                        let jVarLocalScreenName = jVarLocalItemConfig.inScreenName;

                        let jVarLocalFetchForHbs = `${jVarLocalFolderName}/${jVarLocalJsonFileName}/${jVarLocalItemName}/${jVarLocalScreenName}`;

                        return jVarLocalFetchForHbs;
                    },
                    PullFromDataSet: ({ inCurrentTarget }) => {
                        let jVarClosestCard = inCurrentTarget.closest(".KTableDivClass");
                        let jVarLocalJsonConfig = JSON.parse(jVarClosestCard.dataset.jsonconfig);
                        let jVarLocalItemConfig = JSON.parse(jVarClosestCard.dataset.itemconfig);

                        let jVarLocalFolderName = jVarLocalJsonConfig.inFolderName;
                        let jVarLocalJsonFileName = jVarLocalJsonConfig.inJsonFileName;
                        let jVarLocalItemName = jVarLocalItemConfig.inItemName;
                        let jVarLocalScreenName = jVarLocalItemConfig.inScreenName;
                        let jVarLocalJsonPk;

                        if ("pk" in jVarClosestCard.dataset) {
                            jVarLocalJsonPk = jVarClosestCard.dataset.pk;
                        }

                        //  let jVarLocalFetchForHbs = `${jVarLocalFolderName}/${jVarLocalJsonFileName}/${jVarLocalItemName}/${jVarLocalScreenName}`;

                        return {
                            FolderName: jVarLocalFolderName,
                            JsonFileName: jVarLocalJsonFileName,
                            ItemName: jVarLocalItemName,
                            ScreenName: jVarLocalScreenName,
                            JsonPk: jVarLocalJsonPk
                        };
                    },
                    FetchUrls: ({ inDataSetValues, inJsonPK, inDataPk }) => {
                        let PromiseArray = [];
                        let jVarLocalRoute = this.Config.RouteStart.Start;

                        let jVarLocalFetchForHbs = `${window.location.origin}/${jVarLocalRoute}/Html/UserData/JSON/${inDataPk}/${inDataSetValues.FolderName}/${inDataSetValues.JsonFileName}/${inDataSetValues.ItemName}/${inDataSetValues.ScreenName}/previewhbs.html`;

                        let jVarLocalHbsHtml;
                        let jVarLocalToShowHtml;

                        PromiseArray.push(fetch(jVarLocalFetchForHbs));
                        PromiseArray.push(fetch(`${window.location.origin}/${jVarLocalRoute}/Api/Preview/ShowData?inFolderName=${inDataSetValues.FolderName}&inJsonFileName=${inDataSetValues.JsonFileName}&inItemName=${inDataSetValues.ItemName}&&PK=${inJsonPK}`));

                        Promise.all(PromiseArray)
                            .then(responses => {
                                return Promise.all(responses.map((LoopItem, LoopIndex) => {
                                    switch (LoopIndex) {
                                        case 0:
                                            return LoopItem.text();
                                            break;
                                        case 1:
                                            return LoopItem.json();

                                            break;
                                        default:
                                            break;
                                    };
                                }));
                            }).then(responses => {
                                // all responses are resolved successfully
                                for (let LoopIndex = 0; LoopIndex < responses.length; LoopIndex++) {
                                    const jVarLocalLoopValue = responses[LoopIndex];
                                    switch (LoopIndex) {
                                        case 0:
                                            jVarLocalHbsHtml = jVarLocalLoopValue;
                                            break;
                                        case 1:
                                            jVarGlobalPresentViewData = jVarLocalLoopValue.DataFromServer;
                                            var template = Handlebars.compile(jVarLocalHbsHtml);
                                            document.getElementById("KCont1").querySelectorAll(".ForPrintDiv").forEach(el => el.remove());
                                            //console.log("jVarLocalForPrintDivClass : ", jVarLocalForPrintDivClass);
                                            jVarLocalToShowHtml = template(jVarGlobalPresentViewData);

                                            document.getElementById("KCont1").insertAdjacentHTML("beforeend", jVarLocalToShowHtml);

                                            window.print();
                                            break;
                                        default:
                                            break;
                                    };
                                }

                            });
                    }
                }
            }
        },
        ToPrinter: ({ PrintDivName }) => {
            var prtGrid = document.getElementById(PrintDivName);

            var prtwin = window.open('', 'PrintData', 'left=100,top=100,width=800,height=800,toobar=0,scrollbars=1, status=0,resizable=1');
            prtwin.document.write('<style type="text/css" media="print,screen">.kinline{display: inline-grid;border-bottom: 300px} .kbackgroundClass{ position: absolute;text-align: center;z-index: -1;background: white;display: block;min-height: 20 %;min-width: 50 %;color: yellow;}.divClass {z-index: -1;} .bg-text {margin-left: 100px;margin-top: 200px;color: WHITESMOKE;font-size: 50px;transform: rotate(800deg);-webkit-transform: rotate(325deg);opacity :0.5;}</style>');

            prtwin.document.write(prtGrid.outerHTML);
            setTimeout(function () {
                prtwin.document.close();
                prtwin.focus();
                prtwin.print();
                prtwin.close();
            }, 250);
        }
    };

    Preview = {
        Bulk: (injVarThis) => {
            let jVarLocalHtmlCard = injVarThis.currentTarget.closest(".card");
            // console.log("jVarLocalHtmlCard",jVarLocalHtmlCard)
            let jVarLocalHtmlFormControl = jVarLocalHtmlCard.querySelector(".card-body");
            let jVarLocalRoute = this.Config.RouteStart.Start;
            let jVarLocalSubRoute = this.Config.RouteStart.SubRoute;
            let jVarLocalReportName
            fetch(`${window.location.origin}/${jVarLocalRoute}/${jVarLocalSubRoute}/Preview/Bulk?inReportName=${jVarLocalReportName}`, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jVarLocalFetchBodydata)
            })
                .then(response => response.text())
                .then(dataFromApi => {
                    let jVarLocalData = JSON.parse(dataFromApi);
                    // console.log("jVarLocalData : ", jVarLocalData);
                    document.getElementById("ColumnCardId").classList.remove("border-success");
                    document.getElementById("ColumnCardId").classList.add("border-warning");
                });

        }
    }
};

class KSCommonFuncs {
    static SelectionMenu = {
        PrepareObject: () => {
            let jVarReturnObject = {
                FolderName: document.getElementById("FolderSelected").value,
                FileName: document.getElementById("FileSelected").value,
                ItemName: document.getElementById("ItemSelected").value,
                ScreenName: document.getElementById("ScreenSelected").value
            };

            return jVarReturnObject;
        },
        PrepareQueryString: ({ inMenuObject }) => {
            let jVarLocalQueryStringToReturn = "";

            Object.entries(inMenuObject).forEach(
                ([key, value]) => {
                    if (jVarLocalQueryStringToReturn.length === 0) {
                        jVarLocalQueryStringToReturn = `${key}=${value}`
                    } else {
                        jVarLocalQueryStringToReturn += `&${key}=${value}`
                    };
                }
            );

            return jVarLocalQueryStringToReturn;
        },
        NavigateToUrl: (inUrl) => {
            let jVarLocalNavObject = this.SelectionMenu.PrepareObject();
            let jVarLocalQueryString = this.SelectionMenu.PrepareQueryString({ inMenuObject: jVarLocalNavObject });

            window.location.href = `${inUrl}.html?${jVarLocalQueryString}`;
        },
        FillNavMenuWithValues: () => {
            let jVarCommonUrlSearch = decodeURI(document.location.search).split("?");
            if (jVarCommonUrlSearch.length > 2) {
                let jVarCommonUrlSearchArray = jVarCommonUrlSearch[1].split("&");
                let jVarLocalHtmlParentControl = document.getElementById("KDataListNavBar");
                let jVarLocalHtmlInputs = jVarLocalHtmlParentControl.querySelectorAll("input[list]");
                let jVarCommonSearchToObject = {};
                let jVarLoopSplit;

                jVarCommonUrlSearchArray.forEach(element => {
                    jVarLoopSplit = element.split("=");
                    jVarCommonSearchToObject[jVarLoopSplit[0]] = jVarLoopSplit[1];
                });

                jVarLocalHtmlInputs.forEach((LoopItem) => {
                    if (LoopItem.name in jVarCommonSearchToObject) {
                        LoopItem.value = jVarCommonSearchToObject[LoopItem.name];
                    };
                });
            };
        }
    }
};
