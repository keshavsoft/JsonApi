class jVarGlobalLoginFuncsClass {
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
                let jVarLocalCookieValue = this.Login.ClientSideCookieFuncs.getCookie("KToken");
                console.log("jVarLocalCookieValue : ", jVarLocalCookieValue);
                if (jVarLocalCookieValue === null) {
                    localStorage.removeItem("kUserName");
                    localStorage.removeItem("FirmDetails");
                    this.Login.ClientSideCookieFuncs.DeleteCookie();

                    var myModal = new bootstrap.Modal(document.getElementById("LoginModalId"), { keyboard: true, focus: true });

                    myModal.show();
                } else {
                    this.Login.ShowLoginDetailsOnDOM.InHeader();
                };
            },
            DeleteCookie: () => {
                document.cookie = "KToken=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;";
            }
        }
    };
};

let jVarGlobalLoginFuncs = new jVarGlobalLoginFuncsClass();