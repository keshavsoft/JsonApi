let StartFunc = ({ data }) => {
    let jVarLocalColumns = data;
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = jVarLocalColumns.map(element => {
        return {

            title: element[0].DataAttribute,
            field: element[0].DisplayName,
            formatter: kFormatter
        };
    });

    jVarLocalReturnArray.push(
        {

            field: 'operate',
            title: 'Item Operate',
            align: 'center',
            clickToSelect: false,
            clickToSelect: false,
            events: window.operateEvents,
            formatter: operateFormatter
        });

    return jVarLocalReturnArray;
};

function operateFormatter(value, row, index) {
    return [
        `<a class="DeleteButtonClass" href="#" data-pk=${row.pk} title="Remove">`,
        '<i class="fa fa-trash"></i>',
        '</a>',
    ].join('')
};

function kFormatter(value, row, index) {
    return value
};

// function formatter (cell, row, rowIndex, formatExtraData) {
//     return rowIndex + 1;
//   }

export { StartFunc }