import ConfigJson from "../../../../../../../Config.json" assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = `/${ConfigJson.Project}/${ConfigJson.SubRoute}/FromConfig/ColumnsAsArray`

    let response = await fetch(jVarLocalFetchUrl);
    jVarLocalPresentViewData = await response.json();
};

export { StartFunc };