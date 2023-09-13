let StartFunc = ({ inDataToShow }) => {
    // if (inDataToShow.KTF === false) {
    //     Swal.fire({
    //         title: 'Error',
    //         text: `${inDataToShow.KReason}`,
    //         icon: 'error',
    //     });

    //     return;
    // }

    let jVarLocalItemNameParam = getUrlQueryParams({ inGetKey: "inItemName" });
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow: inDataToShow.JsonData.QrCodeDetails });
    jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    var $table = $('#table');
    console.log("jVarLocalDataToShow",jVarLocalDataToShow);
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

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalPrepareHeaderForDataOnly = ({ data }) => {
    console.log("data", data);
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