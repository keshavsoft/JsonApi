import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc/EntryFile.js";
import { StartFunc as StartFuncDelete } from "../Delete/Entry.js";

let StartFunc = async () => {
    let jVarLocalFilerButton = document.getElementById("FilterDataId");
    jVarLocalFilerButton.addEventListener("click", async () => {
        StartFuncButtonClickFunc().then(() => {
            StartFuncDelete();
        })
    });
};

export { StartFunc }