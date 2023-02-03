import { jFShowFoldersInMenu } from "../ForDataHtml/Header/FromFolder.js";
import { StartFunc as PrintStartFunc } from "./Print/FetchFuns.js";

jFShowFoldersInMenu({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
});

PrintStartFunc({
    inProjectName: jVarGlobalProject,
    inSubRoute: jVarGlobalSubRoute
}).then(p => {
    if (p) {
        console.log("p : ", p);

        // let jVarLocalPrintButtons = document.querySelectorAll(".Options.Print");
        // //MainTable Body Row Options Print
        // jVarLocalPrintButtons.forEach((spanElement) => {
        //     spanElement.addEventListener("click", (event) => {
        //         jFPrintFromData({
        //             inEvent: event,
        //             inProjectName: jVarLocalRoute
        //         })
        //     });
        // });

    };

});