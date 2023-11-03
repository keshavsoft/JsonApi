import { StartFunc as StartFuncForTree } from "./ForTree/EntryFile.js";

let jFCreateFoldersToDom = async () => {
    let jVarLocalFetchUrl = `/JSONApi/Api/Data/FromFolder/TreeWitData`;
    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();

    if (dataFromApi !== null) {
        StartFuncForTree({ inData: dataFromApi });
    };
};

export { jFCreateFoldersToDom }