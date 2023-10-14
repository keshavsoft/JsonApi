let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow[0] })
    });
    jFLocalToSpinner();
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
    console.log("data", data);
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    let jVarLocalColumns = Object.keys(data);
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element;
        jVarLocalNewTh.dataset.field = element;
        jVarLocalNewTh.setAttribute("data-filter-control", "input")
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
}

function kFormatter(value, row, index) {
    return value;
};

let jFLocalPrepareHeaderForDataOnly1 = ({ data }) => {
    // let data = jVarGlobalPresentViewData;
    let jVarLocalColumns = Object.keys(data);
    let jVarLocalReturnArray = [];
    jVarLocalReturnArray = jVarLocalColumns.map(element => {
        return {
            title: element,
            field: element,
            formatter: kFormatter,

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

const jFLocalToSpinner = () => {
    let jVarLocalHtmlId = 'SpinnerId';
    let jVarLocalSpinnerId = document.getElementById(jVarLocalHtmlId);
    jVarLocalSpinnerId.style.display = "none"

};
export { StartFunc }