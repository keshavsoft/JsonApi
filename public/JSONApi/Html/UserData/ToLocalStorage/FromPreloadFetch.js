import ConfigJson from '../../../Config.json' assert {type: 'json'};

const StartFunc = async () => {
    let jVarLocalProject = ConfigJson.Project;
    let jVarLocalSubRoute = ConfigJson.SubRoute;

    let jVarLocalFetchUrl = `/${jVarLocalProject}/${jVarLocalSubRoute}/Data/Masters/PreLoad/ShowData`;
    let jVarLocalFetchData = await fetch(jVarLocalFetchUrl);
    let jVarLocalFetchDataAsJson = await jVarLocalFetchData.json();

    if (jVarLocalFetchDataAsJson.KTF) {
        jFLocalToLocalStorage({ inData: jVarLocalFetchDataAsJson.DataFromServer });
    };
};

const jFLocalToLocalStorage = ({ inData }) => {
    localStorage.setItem(ConfigJson.LocalStorageKeys.ForDataList, JSON.stringify(inData));
};

export { StartFunc };