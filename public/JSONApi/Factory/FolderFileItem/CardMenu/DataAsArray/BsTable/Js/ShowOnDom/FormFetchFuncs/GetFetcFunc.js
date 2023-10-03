import ConfigKeys from "../../../../../../../../Config.json" assert { type: 'json'};
const StartFunc = async () => {

    let jVarLocalFetchUrl = `/${ConfigKeys.Project}/${ConfigKeys.SubRoute}/Data/FromFolder/DataAsArray`
    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();

    return await dataFromApi;

};

export { StartFunc };
