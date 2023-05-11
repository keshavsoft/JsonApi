// KVerticalFooterSaveButtonClass


// switch (LoopItem.tagName) {
//     case "INPUT":
//         // jVarLocalFetchBodydata[LoopItem.name] = this.PreparePostData.CommonFuncs.ByTagName.ForTagInput({ inLoopItem: LoopItem });
//         jVarLocalFetchBodydata[LoopItem.name] = StartFuncExtractValue({ inLoopItem: LoopItem });

//         break;
//     default:
//         switch (LoopItem.type) {
//             case "checkbox":
//                 jVarLocalFetchBodydata[LoopItem.name] = LoopItem.checked;
//                 break;
//             default:
//                 jVarLocalFetchBodydata[LoopItem.name] = LoopItem.value;
//                 break;
//         };
//         break;
// };

const LocalTypeFunc = ({ inLoopItem }) => {
    let jVarLocalItem = inLoopItem;
    let jVarLocalValue = jVarLocalItem.value;
    let jVarLocalKeshavSoftStuffed;

    switch (jVarLocalItem.type) {
        case "number":
            jVarLocalValue = parseInt(jVarLocalItem.value);

            let jVarLocalFindDot = jVarLocalItem.step.indexOf(".");

            if (jVarLocalFindDot > 0) {
                jVarLocalValue = parseFloat(jVarLocalItem.value);
            };

            break;
        default:
            break;
    };

    if (jVarLocalItem.dataset.hasOwnProperty("keshavsoft")) {
        jVarLocalKeshavSoftStuffed = JSON.parse(jVarLocalItem.dataset.keshavsoft);

        if (jVarLocalItem.list !== null) {
            if (jVarLocalKeshavSoftStuffed.DataListReverse) {
                jVarLocalValue = LocalcCllectionContains({
                    collection: jVarLocalItem.list.options,
                    searchText: jVarLocalItem.value
                });
            };
        };
    };
    return jVarLocalValue;
};

const StartFunc = ({ inLoopItem }) => {
    let jVarLocalItem = inLoopItem;
    let jVarLocalValue = jVarLocalItem.value;

    switch (jVarLocalItem.tagName) {
        case "INPUT":
            jVarLocalValue = LocalTypeFunc({ inLoopItem: jVarLocalItem });

            break;
        default:
            switch (jVarLocalItem.type) {
                case "checkbox":
                    jVarLocalValue = jVarLocalItem.checked;
                    break;
                default:
                    // jVarLocalFetchBodydata[jVarLocalItem.name] = jVarLocalItem.value;
                    break;
            };
            break;
    };

    return jVarLocalValue;
};

let LocalcCllectionContains = ({ collection, searchText }) => {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].value.indexOf(searchText) > -1) {
            return collection[i].text;
        }
    }
    return "";
};

export { StartFunc }