let StartFunc = async ({ inResponse, inBodyData }) => {
    console.log("inBodyData::", inBodyData);
    let jVarLocalFolderName = inBodyData.inFolderName;
    let jVarLocalfilename = inBodyData.inFileNameOnly;
    let jVarLocalitemname = inBodyData.inItemName;
    // id="table-hea-row-{{@../../key}}-{{@../key}}-{{@key}}"
    jFLocalPrepareHeaderForDataOnly({ inResponse, inHtmlId: `table-head-row-${jVarLocalFolderName}-${jVarLocalfilename}-${jVarLocalitemname}` });
    var $table = $(`#table-${jVarLocalFolderName}-${jVarLocalfilename}-${jVarLocalitemname}`);

    $table.bootstrapTable({ data: Object.values(inResponse.JsonData) });

};
let jFLocalPrepareHeaderForDataOnly = ({ inResponse, inHtmlId }) => {
    let jVarLocalHtmlId = inHtmlId;
    console.log("jVarLocalHtmlId:",jVarLocalHtmlId);
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    console.log("jVarLocaltableHeadRow::",jVarLocaltableHeadRow);
    let jVarLocalColumns = Object.keys(Object.values(inResponse.JsonData)[0]);
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element;
        jVarLocalNewTh.dataset.field = element;
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
}

export { StartFunc };