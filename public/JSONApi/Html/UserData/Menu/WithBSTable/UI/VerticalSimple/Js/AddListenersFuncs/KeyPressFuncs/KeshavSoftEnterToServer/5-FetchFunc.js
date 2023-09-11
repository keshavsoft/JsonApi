import ApiConfigJson from "./../../../../../../../../../../Config.json" assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let jVarLocalFetchUrl = `/${ApiConfigJson.Project}/${ApiConfigJson.SubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Tabular/Footer/KeyPress/EnterToServer`;

    let jVarLocalFetchHeaderObject = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;

};

export { StartFunc };