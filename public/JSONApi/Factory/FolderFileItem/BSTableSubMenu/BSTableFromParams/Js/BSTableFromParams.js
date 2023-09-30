import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom({}).then(() => {
            jFLocalHookListeners();
            StartFuncAfterDomLoad();
            // var $table = $('#table');
        });
    };
};

let jFLocalHookListeners = () => {

    let jVarLocalDeleteClass = document.getElementsByClassName("remove");
    console.log("jVarLocalDeleteClass", jVarLocalDeleteClass);
    for (var i = 0; i < jVarLocalDeleteClass.length; i++) {
        jVarLocalDeleteClass[i].addEventListener("click", (event) => jFLocalButtonClick({ inEvent: event }));
    };
};

let jFLocalButtonClick = ({ inEvent }) => {
    console.log("inEvent", inEvent);
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalClosestTr = jVarLocalCurrentTarget.closest('tr');
    console.log("jVarLocalClosestTr", jVarLocalClosestTr);

};

StartFunc();