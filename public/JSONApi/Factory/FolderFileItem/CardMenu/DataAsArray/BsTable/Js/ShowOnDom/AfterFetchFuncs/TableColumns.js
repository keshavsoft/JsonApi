
let StartFunc = ({ data }) => {
    let jVarLocalColumns = Object.keys(data[0]);

    console.log("jVarLocalColumns::", jVarLocalColumns);


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
function kFormatter(value, row, index) {
    return value
};

function operateFormatter(value, row, index) {
    return [
        `<a class="DeleteButtonClass" href="#" data-FolderName=${row.FolderName} data-FileName=${row.FileName} data-ItemName=${row.ItemName} data-pk=${row.pk} title="Remove">`,
        '<i class="fa fa-trash"></i>',
        '</a>'
    ].join('')
}

export { StartFunc };