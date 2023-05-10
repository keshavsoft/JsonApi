// KVerticalFooterSaveButtonClass
//import { StartFunc as StartFuncExtractValue } from "../../../CommonFuncs/Htmlnputs/ExtractValue.js";
import { StartFunc as StartFuncLoopInputs } from "../../../CommonFuncs/Htmlnputs/LoopInputs.js";

let StartFunc = async ({ inProjectName, inSubRoute }) => {
    let jVarLocalFind = document.querySelectorAll(".KVerticalFooterSaveButtonClass");
    //MainTable Body Row Options Print
    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", async (inEvent) => {
            Vertical.SaveFuncs.StartFunc({ inEvent, inProjectName, inSubRoute });
        });
    });
};

let Vertical = {
    SaveFuncs: {
        StartFunc: ({ inEvent, inProjectName, inSubRoute }) => {
            let jVarLocalCurrentTarget = inEvent.currentTarget;
            let jVarLocalKCont1 = document.getElementById("KCont1");

            let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".KTableDivClass");
            let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".KCardBody");
            let jVarClosestKTableDivClass = jVarLocalCurrentTarget.closest(".KTableDivClass");
            let jVarLocalKCardBody = jVarClosestKTableDivClass.querySelector(".KCardBody");

            if (Vertical.SaveFuncs.CommonFuncs.CheckBeforeSave(jVarLocalHtmlCardBody)) {
                // let jVarLocalFetchPostData = VerticalCommonFuncs.PreparePostData.ForSave({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

                let jVarLocalFetchPostData = StartFuncLoopInputs({ jVarHtmlCardBody: jVarLocalHtmlCardBody });

                Vertical.SaveFuncs.CommonFuncs.SaveOnlyFetch({
                    inHtmlCard: jVarLocalHtmlCard,
                    inCardBodyForItems: jVarLocalKCardBody,
                    inFetchPostData: jVarLocalFetchPostData,
                    inKCont1: jVarLocalKCont1,
                    inProjectName, inSubRoute
                }).then(PromiseData => {
                    if (PromiseData.KTF) {
                        //   window.location.href = `Show.html${window.location.search}&JsonPk=${PromiseData.kPK}`;
                    };
                    // console.log("ssssssssss : ", PromiseData);
                });
            };
        },
        CommonFuncs: {
            CheckBeforeSave: (jVarHtmlCardBody) => {
                let jVarLocalRetTf = true;

                let jVarLocalDataSetObject;
                let jVarLocalHtmlNamesArray = jVarHtmlCardBody.querySelectorAll("[name]");

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
                            }
                        };
                    }
                });

                return jVarLocalRetTf;

            },
            SaveOnlyFetch: ({ inHtmlCard, inFetchPostData, inCardBodyForItems, inKCont1, inProjectName, inSubRoute }) => {
                return new Promise((resolve, reject) => {
                    let jVarLocalRoute = inProjectName;
                    let jVarLocalSubRoute = inSubRoute;
                    let jVarLocalJsonConfigAndItemConfig = Vertical.CommonFuncs.PullCardDataAttributes.JsonConfigAndItemConfig({ inHtmlCard });

                    jVarLocalJsonConfigAndItemConfig.inDataToSave = inFetchPostData;

                    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save`;

                    fetch(jVarLocalFetchUrl, {
                        method: "post",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(jVarLocalJsonConfigAndItemConfig)
                    }).then(response => response.json())
                        .then(dataFromApi => {
                            if (dataFromApi.KTF === false) {
                                inHtmlCard.classList.remove("border-success");
                                inHtmlCard.classList.add("border-danger");
                                let jVarLocalShowFailure = inHtmlCard.querySelector("#ShowFailure");
                                jVarLocalShowFailure.classList.remove("visually-hidden");
                            } else {
                                resolve(dataFromApi);
                            };
                        });
                });
            }
        }
    },
    CommonFuncs: {
        PullCardDataAttributes: {
            JsonConfigAndItemConfig: ({ inHtmlCard }) => {
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
            }
        }
    }
};

export { StartFunc }