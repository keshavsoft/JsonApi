const StartFunc = async () => {
    let jVarLocalKey = "ForDataList";
    let jVarLocalDataList = document.getElementById("DataListsID");
    let jVarLocalLocalStorageData = localStorage.getItem(jVarLocalKey);
    let jVarLocalLocalStorageDataAsJson = JSON.parse(jVarLocalLocalStorageData);

    jFLocalFromArray({
        inData: jVarLocalLocalStorageDataAsJson,
        inDataListsID: jVarLocalDataList
    });
};

const jFLocalMastersAccounts = ({ inDataListsID }) => {
    let jVarLocalKey = "Masters-Accounts";
    let jVarLocalLocalStorageData = localStorage.getItem(jVarLocalKey);
    let jVarLocalLocalStorageDataAsJson = JSON.parse(jVarLocalLocalStorageData);
    console.log("aaaaaaaaaaaa------------- : ", jVarLocalLocalStorageDataAsJson);
    let LocalDataList = document.createElement("datalist");

    if (inDataListsID === null === false) {
        LocalDataList.setAttribute("id", jVarLocalKey);

        inDataListsID.appendChild(LocalDataList);
    };

    jVarLocalLocalStorageDataAsJson.forEach(LoopItemSub => {
        let LocalDataListOption = document.createElement("option");
        LocalDataListOption.setAttribute("value", LoopItemSub[0]);

        if (LoopItemSub.length > 1) {
            LocalDataListOption.innerHTML = LoopItemSub[1];
        }

        LocalDataList.appendChild(LocalDataListOption);
    });
};

const jFLocalFromArray = ({ inData, inDataListsID }) => {
    inData.forEach(LoopItem => {
        let LocalDataList = document.createElement("datalist");
        LocalDataList.setAttribute("id", LoopItem.DatalistID);

        inDataListsID.appendChild(LocalDataList);

        LoopItem.Data.forEach(LoopItemSub => {
            let LocalDataListOption = document.createElement("option");
            LocalDataListOption.setAttribute("value", LoopItemSub[0]);

            if (LoopItemSub.length > 1) {
                LocalDataListOption.innerHTML = LoopItemSub[1];
            }

            LocalDataList.appendChild(LocalDataListOption);
        });
    });
};

StartFunc().then();