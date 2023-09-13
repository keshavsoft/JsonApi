import { StartFunc as StartFuncForTree } from "./../../ForTree/EntryFileForObject.js";
let StartFunc = ({ inDataToShow }) => {
    if (inDataToShow.KTF === false) {
        Swal.fire({
            title: 'Error',
            text: `${inDataToShow.KReason}`,
            icon: 'error',
        });
        
        return;
    }
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow: inDataToShow.JsonData });
    // console.log("------- : ", jVarLocalDataToShow);
    // var $table = $('#table');

    // $table.bootstrapTable({ data: jVarLocalDataToShow });

    StartFuncForTree({ data: jVarLocalDataToShow });
};

let jFLocalToArray = ({ inDataToShow }) => {
    let jVarLocalArray = [];
    Object.entries(inDataToShow).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

export { StartFunc }