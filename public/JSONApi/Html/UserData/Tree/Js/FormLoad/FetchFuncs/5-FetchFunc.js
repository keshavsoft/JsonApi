import ConfigJson from "../../../../../../Config.json" assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = `/${ConfigJson.Project}/Api/Data/FromFolder/TreeWitData`;

    let response = await fetch(jVarLocalFetchUrl);
    jVarLocalPresentViewData = await response.json();
};

export { StartFunc };