import { StartFunc as StartFuncFilterDataId } from "./FilterDataId/EntryFile.js";
import { StartFunc as StartFuncImmuteShowButtonId } from "./ImmuteShowButtonId/EntryFile.js";

const StartFunc = () => {
    StartFuncFilterDataId();
    StartFuncImmuteShowButtonId();

};

export { StartFunc };