import { StartFunc as StartFuncLoopInputs } from "../../../../../CommonFuncs/Htmlnputs/LoopInputs.js";

let StartFunc = async ({ inProjectName, inSubRoute }) => {
    let jVarLocalFind = document.querySelectorAll(".SubTableFooterCreateNewRowSaveButtonClass");
    //MainTable Body Row Options Print
    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", async (inEvent) => {
            jFLocalButtonClick({ inEvent, inProjectName, inSubRoute });
            console.log("in------- : ", inEvent.currentTarget);
        });
    });
};

const jFLocalFromCardDataSet = ({ inHtmlCard }) => {
    let jVarLocalReturnData = {};
    let jVarLocalDataset = inHtmlCard.dataset;

    if (Object.keys(inHtmlCard.dataset).length > 0) {
        if (jVarLocalDataset.hasOwnProperty("pk")) {
            jVarLocalReturnData.pk = jVarLocalDataset.pk;
        };

        if (jVarLocalDataset.hasOwnProperty("insertkey")) {
            jVarLocalReturnData.insertkey = jVarLocalDataset.insertkey;
        };

        jVarLocalReturnData.JsonConfig = JSON.parse(inHtmlCard.dataset.jsonconfig);
        jVarLocalReturnData.ItemConfig = JSON.parse(inHtmlCard.dataset.itemconfig);
    };

    return jVarLocalReturnData;
};

const jFLocalCheckBeforeSave = ({ inJVarTableFooter }) => {
    let jVarLocalRetTf = true;

    let jVarLocalDataSetObject;
    let jVarLocalHtmlNamesArray = inJVarTableFooter.querySelectorAll("[name]");

    jVarLocalHtmlNamesArray.forEach((LoopItem) => {
        if (LoopItem.dataset.hasOwnProperty("keshavsoft")) {
            jVarLocalDataSetObject = JSON.parse(LoopItem.dataset.keshavsoft);
            if (jVarLocalDataSetObject.Validate) {
                if (LoopItem.classList.contains("is-invalid")) {
                    LoopItem.classList.remove("is-invalid");
                };

                switch (jVarLocalDataSetObject.Type) {
                    case "NotEmpty":
                        if (LoopItem.value === "") {
                            LoopItem.classList.add("is-invalid");
                            LoopItem.focus();
                            jVarLocalRetTf = false;
                        };

                        break;

                    default:
                        break;
                };
            };
        }
    });

    return jVarLocalRetTf;
};

let jFLocalButtonClick = ({ inEvent, inProjectName, inSubRoute }) => {
    inEvent.preventDefault();
    let jVarLocalCurrentTarget = inEvent.currentTarget;

    let jVarLocalRoute = inProjectName;
    let jVarLocalSubRoute = inSubRoute;
    let jVarLocalHtmlCard = inEvent.currentTarget.closest(".card");
    let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".card-body");
    let jVarLocalTableFooterCreateRow = jVarLocalCurrentTarget.closest("[data-footertype='CreateNewRow']");

    let jVarLocalJsonConfigAndItemConfig = jFLocalFromCardDataSet({ inHtmlCard: jVarLocalHtmlCard });

    if (jFLocalCheckBeforeSave({ inJVarTableFooter: jVarLocalTableFooterCreateRow })) {
        let jVarLocalFetchPostData = StartFuncLoopInputs({ jVarHtmlCardBody: jVarLocalHtmlCardBody });
        jVarLocalJsonConfigAndItemConfig.inDataToSave = jVarLocalFetchPostData;

        let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/SubTable/Footer/Save`;
        console.log("jVarLocalFetchUrl : ", jVarLocalFetchUrl, jVarLocalJsonConfigAndItemConfig);

        fetch(jVarLocalFetchUrl, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jVarLocalJsonConfigAndItemConfig)
        })
            .then(response => response.json())
            .then(dataFromApi => {
                if (dataFromApi.KTF === true) {
                    window.location.href = "";
                } else {
                    Swal.fire(dataFromApi.KReason);
                }
            });
    };

};

export { StartFunc }