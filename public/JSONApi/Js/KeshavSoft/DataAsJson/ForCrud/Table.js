import { jFShowFoldersInMenu } from "../ForDataHtml/Header/FromFolder.js";
import { StartFunc as ShowDataFuncsStartFunc } from "./Table/FetchFuns.js";
import { jFAddtoPrintButtonInTable } from "./Table/AddListeners.js";
import { StartFunc as CardHeaderStartFunc } from "./Table/AddListenersFuncs/Card/CardHeader/ButtonClicks.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

ShowDataFuncsStartFunc({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
}).then(p => {
    if (p) {
        jFAddtoPrintButtonInTable();
        CardHeaderStartFunc();
        // let jVarLocalPrintButtons = document.querySelectorAll(".Options.Print");
        // //MainTable Body Row Options Print
        // jVarLocalPrintButtons.forEach((spanElement) => {
        //     spanElement.addEventListener("click", (event) => {

        //         console.log("event : ", event.currentTarget);
        //     });
        // });

    };
    //  console.log("p : ", p);
});