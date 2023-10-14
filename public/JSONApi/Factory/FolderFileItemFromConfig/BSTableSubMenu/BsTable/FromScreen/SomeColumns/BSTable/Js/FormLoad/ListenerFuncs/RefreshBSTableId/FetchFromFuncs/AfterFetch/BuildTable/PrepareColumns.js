import ColumnPk from "./TableColumns/ColumnPk.json" assert { type: "json" };

let StartFunc = ({ data }) => {
    let jVarLocalColumns = data;
    let jVarLocalReturnArray = [];
    console.log("ColumnPk : ", ColumnPk);

    jVarLocalReturnArray.push(ColumnPk);
    // jVarLocalReturnArray = jVarLocalColumns.map(element => {
    //     return {
    //         title: element.DataAttribute,
    //         field: element.DataAttribute
    //     };
    // });

    jVarLocalReturnArray.unshift({
        title: '#',
        align: 'left',
        formatter: jFLocalSerialColumn
    });

    jVarLocalReturnArray.push({
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

let jFLocalSerialColumn = (value, row, index) => {
    return index + 1;
};

export { StartFunc };