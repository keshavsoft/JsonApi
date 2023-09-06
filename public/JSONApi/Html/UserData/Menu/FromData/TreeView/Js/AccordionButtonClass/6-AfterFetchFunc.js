let StartFunc = async ({ inResponse, inBodyData }) => {
    await StartFuncForTree({inResponse,inBodyData});
};

let jFPrepareDataForTree = ({inResponse}) => {
    let jVarLocalData = inResponse;

    if ("KTF" in jVarLocalData) {
        if (jVarLocalData.KTF) {
            return jVarLocalData.JsonData;
        } else {
            return jVarLocalData;
        };
    };
};

let jFLoop = ({ inDataValue, inText }) => {
    let LoopObject = {};
    LoopObject.text = inText;
    LoopObject.icon = "fa fa-inbox fa-fw";

    if (inDataValue === null) {
        LoopObject.text += ` ( ${inDataValue} )`;
    } else {
        if (typeof inDataValue === 'object') {
            LoopObject.nodes = Object.keys(inDataValue).map(element => {
                return jFLoop({
                    inDataValue: inDataValue[element],
                    inText: element
                });
            });
        } else {
            LoopObject.text += ` ( ${inDataValue} )`;
        };
    };

    return LoopObject;
};

const StartFuncForTree = async ({inResponse,inBodyData}) => {
    let jVarLocalFolderName = inBodyData.inFolderName;
    let jVarLocalfilename = inBodyData.inFileNameOnly;
    let jVarLocalitemname = inBodyData.inItemName;
    let data = jFPrepareDataForTree({inResponse});
    console.log("data::",data);

    let NewData = Object.keys(data).map(element => {
        return jFLoop({
            inDataValue: data[element],
            inText: element
        });
    });

    $(`#tree-${jVarLocalFolderName}-${jVarLocalfilename}-${jVarLocalitemname}`).bstreeview({
        data: NewData,
        expandIcon: 'fa fa-angle-down fa-fw',
        collapseIcon: 'fa fa-angle-right fa-fw',
        indent: 2,
        parentsMarginLeft: '1.25rem',
        openNodeLinkOnNewTab: true
    });
};


export { StartFunc };