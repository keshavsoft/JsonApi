// import { StartFunc as StartFuncFromSave } from "./FromSave/ChangeRowColour/EntryFile.js";

let StartFunc = () => {
    let jVarLocalFromSave = getUrlQueryParams({ inGetKey: "FromSave" });
    let jVarLocalSavedPk = getUrlQueryParams({ inGetKey: "SavedPk" });

    if (jVarLocalFromSave) {
      //  StartFuncFromSave({ inRowPk: jVarLocalSavedPk });
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }