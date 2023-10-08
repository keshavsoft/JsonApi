import ConfigJson from "../../../../../../../Config.json" assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = `/${ConfigJson.Project}/${ConfigJson.SubRoute}/Data/FromFolder/DataAsArray`

    let response = await fetch(jVarLocalFetchUrl);
    jVarLocalPresentViewData = await response.json();
};

export { StartFunc };