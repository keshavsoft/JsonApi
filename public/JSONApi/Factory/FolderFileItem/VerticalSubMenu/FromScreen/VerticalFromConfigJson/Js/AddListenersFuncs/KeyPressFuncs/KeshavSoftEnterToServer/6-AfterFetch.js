let StartFunc = ({ FetchData, inHtmlCard, inCurrentName }) => {
    if (FetchData.KTF) {
        let LocalDataFromServer = FetchData.DataFromServer[0];
        let jVarLocalHtmlCard = inHtmlCard;
        let jVarLocalCurrentName = inCurrentName;

        jFLocalAfterFetch({
            inDataFromServer: LocalDataFromServer,
            inHtmlCard: jVarLocalHtmlCard,
            inCurrentName: jVarLocalCurrentName
        });

    } else {
        Swal.fire(FetchData.KReason);
    }
};

let jFLocalAfterFetch = ({ inDataFromServer, inHtmlCard, inCurrentName }) => {
    let jVarLocalVerticalInputElements = inHtmlCard.querySelectorAll("[data-dataattribute]");

    jVarLocalVerticalInputElements.forEach((LoopItem) => {
        if (LoopItem.name.replace(inCurrentName, "") in inDataFromServer) {
            LoopItem.value = inDataFromServer[LoopItem.name.replace(inCurrentName, "")];
        };
    });
};

export { StartFunc };