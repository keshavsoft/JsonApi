const StartFunc = () => {
    let jVarLocalTokenName = "KToken";
    let jVarLocalLoginModalId = "LoginModalId";
    let jVarLocalkUserName = "kUserName";
    let jVarLocalHeaderLoginButtonId = "HeaderLoginButtonId";
    let jVarLocalHeaderUserIdDropDown = "HeaderUserIdDropDown";
    let jVarLocalNavBarId = "NavBarId";

    let jVarLocalCookieValue = jFLocalgetCookie(jVarLocalTokenName);

    if (jVarLocalCookieValue === null) {
        localStorage.removeItem(jVarLocalkUserName);
        localStorage.removeItem("FirmDetails");
        jFDeleteCookie(jVarLocalTokenName);
        let jVarLocalHtmlModal = document.getElementById(jVarLocalLoginModalId);

        if (jVarLocalHtmlModal === null === false) {
            var myModal = new bootstrap.Modal(jVarLocalHtmlModal, { keyboard: true, focus: true });

            myModal.show();
        };

        return false;
    } else {
        jFInHeader({
            inLocalStorageKey: jVarLocalkUserName,
            inHeaderLoginButtonId: jVarLocalHeaderLoginButtonId,
            inHeaderUserIdDropDown: jVarLocalHeaderUserIdDropDown,
            inNavBarId: jVarLocalNavBarId
        });

        return true;
    };
};

let jFDeleteCookie = (inTokenName) => {
    document.cookie = `${inTokenName}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

let jFLocalgetCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

let jFInHeader = ({ inLocalStorageKey, inHeaderLoginButtonId, inHeaderUserIdDropDown, inNavBarId }) => {
    let LocalUserName = localStorage.getItem(inLocalStorageKey);
    let jVarLocalHeaderLoginButtonId = document.getElementById(inHeaderLoginButtonId);

    if (jVarLocalHeaderLoginButtonId !== null) {
        jVarLocalHeaderLoginButtonId.classList.add("visually-hidden");
        document.getElementById("HeaderUserIdLi").classList.remove("visually-hidden");

        if (LocalUserName !== null) {
            document.getElementById(inHeaderUserIdDropDown).innerHTML =
                document.getElementById(inHeaderUserIdDropDown).innerHTML.replace("UserName", LocalUserName);

            document.getElementById(inNavBarId).classList.remove("bg-danger");
            document.getElementById(inNavBarId).classList.add("bg-dark");
        };
    };
};

export { StartFunc };