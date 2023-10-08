import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc/EntryFile.js";
import { StartFunc as StartFuncDelete } from "../Delete/Entry.js";

let StartFunc = () => {
    let jVarLocalHtmlId = "ImmuteShowButtonId";
    let jVarLocalFilerButton = document.getElementById(jVarLocalHtmlId);
    
    jVarLocalFilerButton.addEventListener("click", async () => {
        StartFuncButtonClickFunc().then(() => {
            StartFuncDelete();
        })
    });;
};

export { StartFunc }