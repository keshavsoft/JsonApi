import { StartFunc as StartFuncExtractValue } from "./ExtractValue.js";

const StartFunc = ({ jVarHtmlCardBody }) => {
    let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

    let jVarLocalFetchBodydata = {};

    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
        jVarLocalFetchBodydata[LoopItem.name] = StartFuncExtractValue({ inLoopItem: LoopItem });
    });

    return jVarLocalFetchBodydata;
};

export { StartFunc }