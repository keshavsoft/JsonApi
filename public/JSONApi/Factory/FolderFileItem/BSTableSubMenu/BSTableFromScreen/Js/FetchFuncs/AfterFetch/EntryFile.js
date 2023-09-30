let StartFunc = () => {
    let jVarLocalDataToShow = jVarGlobalPresentViewData;

    // jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow });

    var $table = $('#table');

    $table.bootstrapTable({
        data: jVarLocalDataToShow.DataFromServer[0].KData.TableData,
        columns: jFLocalPrepareHeaderForDataOnly()
    });
};

let jFLocalPrepareHeaderForDataOnly = () => {
    let data = jVarGlobalPresentViewData;

    let jVarLocalColumns = data.DataFromServer[0].KData.TableColumns;
    let jVarLocalReturnArray = [];
    jVarLocalReturnArray = jVarLocalColumns.map(element => {
        return {
            title: element.DisplayName,
            field: element.DataAttribute,
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
        '<a class="remove" href="javascript:void(0)" title="Remove">',
        '<i class="fa fa-trash"></i>',
        '</a>'
    ].join('')
};

function kFormatter(value, row, index) {
    return value;
};

let jFLocal1 = () => {
    console.log("ssssssss");
};

export { StartFunc }