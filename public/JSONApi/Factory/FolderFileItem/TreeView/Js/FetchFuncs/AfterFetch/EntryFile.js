import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../Booking/FromLocalStorage/Customers/AsArray.js";
import { StartFunc as StartFuncForTree } from "./../../ForTree/EntryFileForObject.js";
let StartFunc = () => {
    let jVarLocalDataToShow = StartFuncFromLocalStorage();
    // console.log("------- : ", jVarLocalDataToShow);
    // var $table = $('#table');

    // $table.bootstrapTable({ data: jVarLocalDataToShow });

    StartFuncForTree({ data: jVarLocalDataToShow });
};

export { StartFunc }