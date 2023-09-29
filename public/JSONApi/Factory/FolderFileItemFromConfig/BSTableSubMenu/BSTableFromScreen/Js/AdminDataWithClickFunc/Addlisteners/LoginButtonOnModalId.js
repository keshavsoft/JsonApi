const StartFunc = () => {
    let jVarLocalLoginModalButtonId = document.getElementById("LoginButtonOnModalId");

    if (jVarLocalLoginModalButtonId === null === false) {
        jVarLocalLoginModalButtonId.addEventListener("click", jFLocalLoginButtonClick);
    };
};

const jFLocalLoginButtonClick = () => {
    let jVarLocalObject = {};

    jVarLocalObject.UserName = document.getElementById("KUserNameInput").value;
    jVarLocalObject.Password = document.getElementById("KPasswordInput").value;

    if (jVarLocalObject.UserName !== "" && jVarLocalObject.Password !== "") {
        jVarLocalCheckUserNamePassword({ inUserName: jVarLocalObject.UserName, inPassword: jVarLocalObject.Password });
    };
};

const jVarLocalCheckUserNamePassword = async ({ inUserName, inPassword }) => {
    let jVarLocalUserCheckRoute = "JSONApi";

    let jVarLocalFetchUrl = `/${jVarLocalUserCheckRoute}/Validate/Users/InUserDataJson/ForUserNameAndPassword/TokenToCookie`;

    let response = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inUserName, inPassWord: inPassword })
    });
    let FetchDataJson = await response.json();

    if (FetchDataJson !== null) {
        if (FetchDataJson.KTF) {
            var myModalEl = document.getElementById('LoginModalId');

            var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

            modal.hide();

            jFLocalFirmDetails({ inUserName, inFirmDetails: FetchDataJson });
            // window.location.href = "";
            // this.Login.ClientSideCookieFuncs.CheckToken();
        } else {
            document.getElementById("KUserNameInput").classList.add("is-invalid");
        };
    };
};

const jFLocalFirmDetails = ({ inUserName, inFirmDetails }) => {
    localStorage.setItem("kUserName", inUserName);
    localStorage.setItem("FirmDetails", JSON.stringify(inFirmDetails));
};

export { StartFunc };