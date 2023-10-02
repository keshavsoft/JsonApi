import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "./KSMainTableRowDeleteClass/1-ClickAssign.js";

let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow[0] })
    });

    StartFuncKSMainTableRowDeleteClass();
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
        `<a class="KSMainTableRowDelete" data-pk=${row.pk} href="#" title="Remove">`,
        '<i class="fa fa-trash">Delete</i>',
        '</a>',
    ].join('')
};

function kFormatter(value, row, index) {
    return value;
};
export { StartFunc }