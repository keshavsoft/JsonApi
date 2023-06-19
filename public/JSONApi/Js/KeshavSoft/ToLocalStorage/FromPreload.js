const StartFunc = async () => {
    let jVarLocalFetchUrl = "http://localhost:4119/JSONApi/API//Data/Masters/PreLoad/ShowData";
    let jVarLocalFetchData = await fetch(jVarLocalFetchUrl);
    let jVarLocalFetchDataAsJson = await jVarLocalFetchData.json();

    if (jVarLocalFetchDataAsJson.KTF) {
        jFLocalToLocalStorage({ inData: jVarLocalFetchDataAsJson.DataFromServer });
    };
};

const jFLocalToLocalStorage = ({ inData }) => {
    localStorage.setItem("ForDataList", JSON.stringify(inData));
};

StartFunc().then();