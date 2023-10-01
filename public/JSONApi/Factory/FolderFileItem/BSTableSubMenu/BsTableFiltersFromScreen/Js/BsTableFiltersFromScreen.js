import { StartFunc as StartFuncShowOnDomEntry } from "./ShowOnDom/Entry.js";
import { StartFunc as AddListenersEntry } from "./AddListeners/Entry.js";

const StartFunc = async () => {
    
    StartFuncShowOnDomEntry().then(() => {
        AddListenersEntry();
    });
};
StartFunc();