import { StartFunc as StartFuncEntryFile } from "./FormLoad/FetchFuncs/EntryFile.js";
import { StartFunc as StartFuncMenuId } from "./FormLoad/FetchFuncs/MenuId/EntryFile.js";

let StartFunc = () =>{

    StartFuncEntryFile();
    StartFuncMenuId();

};

StartFunc();