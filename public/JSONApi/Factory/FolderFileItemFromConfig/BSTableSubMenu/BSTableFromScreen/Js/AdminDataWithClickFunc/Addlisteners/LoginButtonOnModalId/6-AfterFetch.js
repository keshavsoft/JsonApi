// import { StartFunc as StartFuncFormLoad } from "../../../FormLoad/StartFunc.js";
let StartFunc = ({ inFromFetch, inFormLoadFuncToRun, inBodyData }) => {
    if (inFromFetch.KTF) {
        let inUserName = inBodyData.inUserName;

        var myModalEl = document.getElementById('LoginModalId');

        var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

        modal.hide();

        jFLocalFirmDetails({ inUserName, inFirmDetails: inFromFetch });
        inFormLoadFuncToRun();
    } else {
        document.getElementById("KUserNameInput").classList.add("is-invalid");
    };
};

const jFLocalFirmDetails = ({ inUserName, inFirmDetails }) => {
    localStorage.setItem("kUserName", inUserName);
    localStorage.setItem("FirmDetails", JSON.stringify(inFirmDetails));
};
export { StartFunc };