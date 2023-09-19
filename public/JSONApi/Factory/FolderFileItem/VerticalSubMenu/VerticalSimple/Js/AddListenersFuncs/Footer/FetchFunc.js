import ApiConfigJson from '../../../../../ConfigKeys/ProjectKeys.json' assert {type: 'json'};

let StartFunc1 = async ({ inFetchPostData }) => {
    let jVarLocalRoute = ApiConfigJson.ProjectName;
    let jVarLocalSubRoute = "Api";

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save`;

    fetch(jVarLocalFetchUrl, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchPostData)
    }).then(response => response.json())
        .then(dataFromApi => {
            if (dataFromApi.KTF === false) {
                console.log("hiiii");
            } else {
                resolve(dataFromApi);
            };
        });
};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let jVarLocalRoute = ApiConfigJson.ProjectName;
    let jVarLocalSubRoute = "Api";

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save`;
    
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