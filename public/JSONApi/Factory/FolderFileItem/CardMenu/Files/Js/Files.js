import { StartFunc as StartFuncFormLoad } from "./FormLoad/Entry.js";
import { StartFunc as StartFuncBreadcrumb } from "./Breadcrumb/Entery.js";

let StartFunc = () => {
    StartFuncFormLoad().then(() => {
        StartFuncBreadcrumb();

    });
};

StartFunc();