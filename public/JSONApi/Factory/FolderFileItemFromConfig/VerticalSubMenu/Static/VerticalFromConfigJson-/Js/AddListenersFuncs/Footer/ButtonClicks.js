import { StartFunc as StartFuncLoopInputs } from "../../CommonFuncs/HtmlInputs/LoopInputs.js";

import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

import ApiConfigJson from '../../../ConfigKeys/ProjectKeys.json' assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFind = document.querySelectorAll(".KVerticalFooterSaveButtonClass");
    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", async (inEvent) => {
            await Vertical.SaveFuncs.StartFunc({ inEvent });
        });
    });
};

let Vertical = {
    SaveFuncs: {
        StartFunc: async ({ inEvent }) => {
            let jVarLocalCurrentTarget = inEvent.currentTarget;
            let jVarLocalKCont1 = document.getElementById("KCont1");

            let jVarLocalHtmlCard = jVarLocalCurrentTarget.closest(".KTableDivClass");
            let jVarLocalHtmlCardBody = jVarLocalHtmlCard.querySelector(".KCardBody");
            let jVarClosestKTableDivClass = jVarLocalCurrentTarget.closest(".KTableDivClass");
            let jVarLocalKCardBody = jVarClosestKTableDivClass.querySelector(".KCardBody");

            if (Vertical.SaveFuncs.CommonFuncs.CheckBeforeSave(jVarLocalHtmlCardBody)) {

                let jVarLocalFetchPostData = StartFuncLoopInputs({ jVarHtmlCardBody: jVarLocalHtmlCardBody });
                let jVarLocalJsonConfigAndItemConfig = Vertical.CommonFuncs.PullCardDataAttributes.JsonConfigAndItemConfig({ inHtmlCard: jVarLocalHtmlCard });

                jVarLocalJsonConfigAndItemConfig.inDataToSave = jVarLocalFetchPostData;

                let jVarLocalFromFetch = await StartFuncFetchFunc({
                    inBodyData: jVarLocalJsonConfigAndItemConfig
                });
                StartFuncAfterFetch({ inFetchPostData: jVarLocalFromFetch, inHtmlCard: jVarLocalHtmlCard });

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
            SaveOnlyFetch: ({ inHtmlCard, inFetchPostData }) => {
                return new Promise((resolve, reject) => {
                    let jVarLocalRoute = ApiConfigJson.ProjectName;
                    let jVarLocalSubRoute = "Api";
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