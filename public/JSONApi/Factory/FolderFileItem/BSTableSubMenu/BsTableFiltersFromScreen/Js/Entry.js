import { StartFunc as StartFuncReportButtonId } from "./AddListeners/ReportButtonId/EntryFile.js";
import { StartFunc as StartFuncFilterDataId } from "./AddListeners/FilterDataId/EntryFile.js";
import { StartFunc as StartFuncImmuteShowButtonId } from "./AddListeners/ImmuteShowButtonId/EntryFile.js";

let StartFunc = async () => {
    StartFuncReportButtonId().then(()=>{
        
    StartFuncFilterDataId();
    StartFuncImmuteShowButtonId();
})
};

export { StartFunc };