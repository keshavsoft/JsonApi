import ProjectKeys from "../../../../../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};


let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;

    let jVarLocalFetchUrl = `/${ProjectKeys.ProjectName}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save`;

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
