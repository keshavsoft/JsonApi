let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });
    // jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    var $table = $('#table');
    $table.bootstrapTable(
        {
            data: jVarLocalDataToShow,
            columns: jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow[0]})
        });

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

let jFLocalPrepareHeaderForDataOnly1 = ({ data }) => {
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
let jFLocalPrepareHeaderForDataOnly = ({ data }) => {
    // let data = jVarGlobalPresentViewData;
    let jVarLocalColumns = Object.keys(data);
    let jVarLocalReturnArray = [];
    jVarLocalReturnArray = jVarLocalColumns.map(element => {
        return {
            title: element,
            field: element,
            formatter: kFormatter
        };
    });

    jVarLocalReturnArray.push(
        {
            field: 'operate',
            title: 'Item Operate',
            align: 'center',
            clickToSelect: false,
            events: window.operateEvents,
            formatter: operateFormatter
        });

    return jVarLocalReturnArray;
};

function operateFormatter(value, row, index) {
    return [
        '<a class="like" href="#" onclick="jFLocal1()" title="Like">',
        '<i class="fa fa-heart">Show</i>',
        '</a>  ',
        '<a class="remove" href="#" title="Remove">',
        '<i class="fa fa-trash">Delete</i>',
        '</a>',
    ].join('')
};

function kFormatter(value, row, index) {
    return value;
};


export { StartFunc }