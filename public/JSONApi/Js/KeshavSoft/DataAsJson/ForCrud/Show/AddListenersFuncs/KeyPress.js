let ByTagName = {
    ForTagInput: ({ inLoopItem }) => {
        let jVarLocalValue = inLoopItem.value;
        let jVarLocalKeshavSoftStuffed;

        if (inLoopItem.dataset.hasOwnProperty("keshavsoft")) {
            jVarLocalKeshavSoftStuffed = JSON.parse(inLoopItem.dataset.keshavsoft);

            if (inLoopItem.list !== null) {
                if (jVarLocalKeshavSoftStuffed.DataListReverse) {
                    jVarLocalValue = ByTagName.collectionContains({ collection: inLoopItem.list.options, searchText: inLoopItem.value });
                };
            };

        };
        return jVarLocalValue;
    },
    collectionContains: ({ collection, searchText }) => {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i].value.indexOf(searchText) > -1) {
                return collection[i].text;
            }
        }
        return "";
    }
};

let LocalForInputsNeeded = ({ jVarHtmlCardBody }) => {
    let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

    let jVarLocalFetchBodydata = {};

    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;

        switch (LoopItem.tagName) {
            case "INPUT":
                jVarLocalFetchBodydata[LoopItem.name] = ByTagName.ForTagInput({ inLoopItem: LoopItem });

                break;

            default:
                switch (LoopItem.type) {
                    case "checkbox":
                        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
                        break;
                    default:
                        jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
                        break;
                };
                break;
        };
    });

    return jVarLocalFetchBodydata;
};


let StartFunc = async () => {

    let jVarLocalFind = document.querySelectorAll(".KeshavSoftonkeypress");
    //MainTable Body Row Options Print
    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("keypress", LocalKeyPress);
    });
};

let LocalKeyPress = async (inEvent) => {
    if (inEvent.keyCode === 13) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarLocalClosestForm = jVarLocalCurrentTarget.closest("tr");

        if ("clienteval" in jVarLocalCurrentTarget.dataset) {
            if ("enteronclient" in jVarLocalCurrentTarget.dataset) {
                if (jVarLocalCurrentTarget.dataset.enteronclient === "true") {
                    let jVarLocalClientEval = inEvent.currentTarget.dataset.clienteval;
                    let jVarLocalFetchPostData = LocalForInputsNeeded({ jVarHtmlCardBody: jVarLocalClosestForm });

                    Object.entries(jVarLocalFetchPostData).forEach(
                        ([key, value]) => {
                            jVarLocalClientEval = jVarLocalClientEval.replace(`{{${key}}}`, parseFloat(value));
                        }
                    );

                    inEvent.currentTarget.value = eval(jVarLocalClientEval);
                };
            }
        } else {

        };

    };
};

export { StartFunc }