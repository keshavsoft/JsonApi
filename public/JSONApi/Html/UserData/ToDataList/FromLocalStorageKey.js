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

const jFLocalFromArray = ({ inData, inDataListsID }) => {
    inData.forEach(LoopItem => {
        if ("Data" in LoopItem) {
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
        } else {
            console.log(`FromLocalStorageKey, Data not found...`);
        };
    });
};

export { StartFunc };