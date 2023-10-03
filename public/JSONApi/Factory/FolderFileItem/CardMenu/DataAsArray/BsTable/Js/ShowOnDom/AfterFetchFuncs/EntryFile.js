let StartFunc = ({ inDataToShow }) => {
    // console.log("inDataToShow:", inDataToShow);

    let localmapData = inDataToShow.map((ele) => {
        return { ...ele.DataConfig,  ...ele.Data}
    });
    // console.log('localmapData::', localmapData);


    let jVarLocalDataToShow = localmapData;
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    });

};


let jFLocalPrepareHeaderForDataOnly = ({ data }) => {
    let jVarLocalColumns =Object.keys( data[0]);
   
    console.log("jVarLocalColumns::", jVarLocalColumns);
   

    let jVarLocalReturnArray = [];
    jVarLocalReturnArray = jVarLocalColumns.map(element => {
        return {
            title: element,
            field: element
        };
    });

    jVarLocalReturnArray.push(
        {
            field: 'operate',
            title: 'Item Operate',
            align: 'center',
            clickToSelect: false,
            events: window.operateEvents
        });

    return jVarLocalReturnArray;
};


export { StartFunc }