let LocalPrepareBodyObject = ({ inDataSetObject }) => {
    let jVarLocalBodyObject = {};

    if ("jsonconfig" in inDataSetObject) {
        console.log("inDataSetObject : ", inDataSetObject.jsonconfig);
        jVarLocalBodyObject = {
            ...jVarLocalBodyObject,
            ...JSON.parse(inDataSetObject.jsonconfig)
        };

    };

    if ("itemconfig" in inDataSetObject) {
        jVarLocalBodyObject = {
            ...jVarLocalBodyObject,
            ...JSON.parse(inDataSetObject.itemconfig)
        };

    };

    return jVarLocalBodyObject;
};

let jFPrintFromData = ({ inEvent, inProjectName }) => {
    let PromiseArray = [];
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalBodyObject = LocalPrepareBodyObject({ inDataSetObject: jVarLocalCurrentTarget.dataset });

    let JsonPK = jVarLocalCurrentTarget.closest("tr").dataset.pk;

    let jVarLocalRoute = inProjectName;

    let jVarLocalFetchForHtmlFiles = `${window.location.origin}/${jVarLocalRoute}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/FromPrintFilesJson/GetData/AsArray`;
    let jVarLocalFetchJsonData = `${window.location.origin}/${jVarLocalRoute}/Api/Preview/ShowData/FromDataFolder`;
    let jVarLocalFetchForHtmlFilesHeaders = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyObject)
    };

    fetch(jVarLocalFetchForHtmlFiles, jVarLocalFetchForHtmlFilesHeaders).then(p => p.json()).then(p => {
        let k1 = document.getElementById("KCont1");
        k1.innerHTML = "";
        console.log("ssssssss : ", Object.values(p.HtmlData[0])[0]);
        k1.innerHTML = Object.values(p.HtmlData[0])[0];

    });


    //    this.CommonFuncs.ForPrint({ inPromiseArray: PromiseArray, inCurrentTarget: jVarLocalCurrentTarget });
};


let jFPrintFromData1 = ({ inEvent, inProjectName }) => {
    let PromiseArray = [];
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalBodyObject = LocalPrepareBodyObject({ inDataSetObject: jVarLocalCurrentTarget.dataset });

    let JsonPK = jVarLocalCurrentTarget.closest("tr").dataset.pk;

    let jVarLocalRoute = inProjectName;

    let jVarLocalFetchForHtmlFiles = `${window.location.origin}/${jVarLocalRoute}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Screens/FromPrintFilesJson/GetData/AsArray`;
    let jVarLocalFetchJsonData = `${window.location.origin}/${jVarLocalRoute}/Api/Preview/ShowData/FromDataFolder`;
    let jVarLocalFetchForHtmlFilesHeaders = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyObject)
    };

    PromiseArray.push(fetch(jVarLocalFetchForHtmlFiles, jVarLocalFetchForHtmlFilesHeaders));
    PromiseArray.push(fetch(jVarLocalFetchJsonData, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyObject)
    }));

    //    this.CommonFuncs.ForPrint({ inPromiseArray: PromiseArray, inCurrentTarget: jVarLocalCurrentTarget });
};

export { jFPrintFromData }