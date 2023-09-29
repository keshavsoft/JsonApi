import { StartFunc as StartFuncCheckLogin } from "./Check/CheckLogin.js";
import { StartFunc as StartFuncLoginFetch } from "./LoginFetch.js";

let StartFunc = ({ inFormLoadFuncToRun }) => {

    jFLocalShow();

    let jVarLocalFromCheck = StartFuncCheckLogin();

    if (jVarLocalFromCheck === false) {
        StartFuncLoginFetch({ inFormLoadFuncToRun });

    };

    return jVarLocalFromCheck;
};


let jFLocalShow = () => {
    var myModal = document.getElementById('LoginModalId')

    myModal.addEventListener('shown.bs.modal', function () {
        let jVarLocalKUserNameInputValue = jFLocalFromDomKUserNameInput();

        if (jVarLocalKUserNameInputValue === "") {
            jFLocalHtmlFocusKUserNameInput();
        } else {
            jFLocalHtmlFocusKPasswordInput();
        };
    });

    let jFLocalHtmlFocusKUserNameInput = () => {
        let jVarLocalHtmlId = 'KUserNameInput';
        let jVarLocalKUserNameInput = document.getElementById(jVarLocalHtmlId);
        jVarLocalKUserNameInput.focus();
    };

    let jFLocalHtmlFocusKPasswordInput = () => {
        let jVarLocalHtmlId = 'KPasswordInput';
        let jVarLocalKPasswordInput = document.getElementById(jVarLocalHtmlId);
        jVarLocalKPasswordInput.focus();
    };

    let jFLocalFromDomKUserNameInput = () => {
        let jVarLocalHtmlKUserNameInput = 'KUserNameInput';
        let jVarHtmlKUserNameInput = document.getElementById(jVarLocalHtmlKUserNameInput);
        let jVarHtmlKUserNameInputValue = jVarHtmlKUserNameInput.value.trim();
        return jVarHtmlKUserNameInputValue;
    };

};
// StartFunc().then();

export { StartFunc };
