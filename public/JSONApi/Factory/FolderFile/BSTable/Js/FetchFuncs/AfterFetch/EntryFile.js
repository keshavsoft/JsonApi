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
    jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    var $table = $('#table');
    $table.bootstrapTable({ data: jVarLocalDataToShow });

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

let jFLocalPrepareHeaderForDataOnly = ({ data }) => {
    console.log("data", data[0]);
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    let jVarLocalColumns = Object.keys(data[0]);
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element;
        jVarLocalNewTh.dataset.field = element;
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
}

export { StartFunc }