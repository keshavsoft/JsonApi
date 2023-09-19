import ApiConfigJson from "../../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

const StartFunc = async () => {

    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/GetDirs/MenuWithDesign`;

    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };