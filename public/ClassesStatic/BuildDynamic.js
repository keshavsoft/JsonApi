let KeshavSoftJOFuncs = {
    ToKCont1: {
        PostDomInsert: {
            StartFunc: () => {
                let jVarLocalFrom = "LocalStorage";
                switch (jVarLocalFrom) {
                    case "LocalStorage":
                        KeshavSoftJOFuncs.ToKCont1.PostDomInsert.CommonFuncs.FromLocalStorage.StartFunc();
                        break;

                    default:
                        break;
                }

            },
            CommonFuncs: {
                FromLocalStorage: {
                    StartFunc: () => {
                        let jVarLocalDomElementsNeeded = document.getElementById("KCont1").querySelectorAll("select");
                        let jVarLocalLocalStorageListNeeded;
                        let jVarLocalLocalStorageKeyNeeded;
                        let jVarLocalStorageColumns;
                        let jVarLocalDataToShow;
                        jVarLocalDomElementsNeeded.forEach(LoopElement => {
                            jVarLocalLocalStorageListNeeded = LoopElement.dataset.klist;
                            jVarLocalLocalStorageListNeeded = JSON.parse(jVarLocalLocalStorageListNeeded);
                            jVarLocalLocalStorageKeyNeeded = jVarLocalLocalStorageListNeeded.LocalStorageKey;
                            jVarLocalStorageColumns = jVarLocalLocalStorageListNeeded.Columns;

                            jVarLocalDataToShow = KeshavSoftJOFuncs.ToKCont1.PostDomInsert.CommonFuncs.FromLocalStorage.GetDataFromLocalStorage({ inKey: jVarLocalLocalStorageKeyNeeded, inColumns: jVarLocalStorageColumns });

                            //    $(LoopElement).select2({ data: jVarLocalDataToShow });

                        });
                    },
                    GetDataFromLocalStorage: ({ inKey, inColumns }) => {
                        let jVarLocalLocalStorage = localStorage.getItem(inKey);
                        jVarLocalLocalStorage = JSON.parse(jVarLocalLocalStorage);
                        let jvarLocalLocalidColumn = inColumns.id;
                        let jvarLocalLocalColumn = inColumns.text;
                        let jvarLocalLoopReturnObject = {};
                        let jvarLocalReturnArray = jVarLocalLocalStorage.map((ele) => {
                            jvarLocalLoopReturnObject = {};
                            jvarLocalLoopReturnObject.id = ele[jvarLocalLocalidColumn];
                            jvarLocalLoopReturnObject.text = ele[jvarLocalLocalColumn];
                            return jvarLocalLoopReturnObject;
                        });

                        return jvarLocalReturnArray;
                    },

                }
            }
        }
    }
};

let jFPrepareInputsForTableSearchRowCreateNew = async (inJVarKThis) => {
    let jVarLocalCard = inJVarKThis.closest(".card");
    let jVarLocalDataset = jVarLocalCard.dataset;
    let jVarLocalJsonConfig = JSON.parse(jVarLocalDataset.jsonconfig);
    let jVarLocalItemConfig = JSON.parse(jVarLocalDataset.itemconfig);

    let jVarLocalScreenName = jVarLocalItemConfig.inScreenName;
    let jVarLocalItemName = jVarLocalItemConfig.inItemName;
    let jVarLocalFileName = jVarLocalJsonConfig.inJsonFileName;
    let jVarLocalFolderName = jVarLocalJsonConfig.inFolderName;

    return {
        inFolderName: jVarLocalFolderName,
        inFileName: jVarLocalFileName,
        inItemName: jVarLocalItemName,
        inScreenName: jVarLocalScreenName
    };
};

let jFTableSearchRowCreateNew = async (inEvent) => {
    let jVarLocalKThis = inEvent.currentTarget;
    let jVarLocalSpinner = jVarLocalKThis.querySelector("span.KSSpinner");

    if (jVarLocalSpinner !== null) jVarLocalSpinner.classList.remove("visually-hidden");
    let jVarLocalReturnData = await jFLocalFetchForCreateNew(await jFPrepareInputsForTableSearchRowCreateNew(jVarLocalKThis));

    if (jVarLocalReturnData) {
        if (jVarLocalSpinner !== null) jVarLocalSpinner.classList.add("visually-hidden");
    };
};

let jFLocalShowData = (inEvent) => {
    inEvent.preventDefault();

    let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
    let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;

    let jVarLocalItemConfig = jVarGlobalClientObject.Api.UserData.CommonFuncs.PrepareItemConfig();

    let jVarLocalFolderName = jVarLocalItemConfig.FolderName;
    let jVarLocalFileName = jVarLocalItemConfig.FileName;
    let jVarLocalItemName = jVarLocalItemConfig.ItemName;
    let jVarLocalScreenName = jVarLocalItemConfig.ScreenName;

    fetch(`/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/ShowData/ShowWithDataPKJson?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`)
        .then(response => {
            if (!response.ok) { throw new Error(response.statusText) };
            return response.json();
        }).then((FetchData) => {
            if (FetchData.KTF) {
                jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
                jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
            };
        })
};

let jFLocalPullData = async ({ inFolderName, inFileName, inItemName, inScreenName }) => {
    let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
    let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;
    let jVarLocalKCont1 = document.getElementById("KCont1");

    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileName = inFileName;
    let jVarLocalItemName = inItemName;
    let jVarLocalScreenName = inScreenName;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Table/ShowData/ShowJsonOrHtml?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;

    let response = await fetch(jVarLocalFetchUrl);
    let FetchData = await response.json();

    if (FetchData.KTF) {
        if (FetchData.KResultHtmlType) {
            jVarLocalKCont1.innerHTML = FetchData.DataFromServer;
            let myScript = document.createElement("script");
            myScript.setAttribute("src", "/js/Tree.js");
            document.body.appendChild(myScript);
        };

        if (FetchData.KResultJsonType) {
            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
            jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
        };

        return await true;
    };
};

let jFLocalFetchForCreateNew = async ({ inFolderName, inFileName, inItemName, inScreenName }) => {
    let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
    let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;

    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileName = inFileName;
    let jVarLocalItemName = inItemName;
    let jVarLocalScreenName = inScreenName;
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Vertical/CreateFromData/ShowWithDataPK?inFolderName=${jVarLocalFolderName}&inJsonFileName=${jVarLocalFileName}&inItemName=${jVarLocalItemName}&inScreenName=${jVarLocalScreenName}`;

    let response = await fetch(jVarLocalFetchUrl);
    let FetchData = await response.json()

    if (FetchData.KTF) {
        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(FetchData.DataFromServer);
        jVarGlobalClientObject.AppendToDOM.BuildFromArrayDataCommon();
        jVarGlobalClientObject.AppendToDOM.CommonFuncs.BuildFromArray.InsertToSelect();
        return await true;
    };
};

let jFPopUpEdit = ({ inEvent }) => {
    let LocalCurrentTarget = inEvent.currentTarget;
    let JsonPK = parseInt(LocalCurrentTarget.closest("tr").dataset.pk);

    let jVarLocalPopUpAlter = document.getElementById('AlterPopUpDataId');
    let jVarLocalTemplate = document.getElementById("Vertical/KVertical/CardBody").innerHTML;

    let jVarLocalGlobalPresentViewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData[0]));
    jVarLocalGlobalPresentViewData.HTMLControlType = "Vertical"

    this.Api.UserData.Table.Row.Edit.CommonFuncs.RowToVertical({
        inTableData: jVarLocalGlobalPresentViewData.KData.TableData, inRowPk: JsonPK, inTableColumns: jVarLocalGlobalPresentViewData.KData.TableColumns,
        inTableInfo: jVarLocalGlobalPresentViewData.KData.TableInfo
    });

    jVarLocalPopUpAlter.querySelector(".modal-body").innerHTML = Handlebars.compile(jVarLocalTemplate)(jVarLocalGlobalPresentViewData);
    var myModal = new bootstrap.Modal(jVarLocalPopUpAlter, {
        keyboard: false
    });

    myModal.show();
};

let jFPopUpCreateNew = ({ inEvent }) => {
    let jVarLocalcurrentTarget = inEvent.currentTarget;
    let jVarLocalClosestCard = jVarLocalcurrentTarget.closest(".card");
    let jVarLocalPopUp = document.getElementById('CreateNewPopUpId');
    console.log("jVarLocalClosestCard : ", jVarLocalClosestCard);
    let jVarLocalTemplate = document.getElementById("Vertical/KPopUp").innerHTML;

    if ("localstorageid" in jVarLocalClosestCard.dataset) {
        if ("localstoragearrayindex" in jVarLocalClosestCard.dataset) {
            if (jVarLocalClosestCard.dataset.localstorageid in localStorage) {
                let jVarLocalLocalStorageArrayNeeded =JSON.parse( localStorage.getItem(jVarLocalClosestCard.dataset.localstorageid));
                jVarGlobalPresentViewData=jVarLocalLocalStorageArrayNeeded[jVarLocalClosestCard.dataset.localstoragearrayindex];
                console.log("jVarLocalLocalStorageArrayNeeded : ", jVarLocalLocalStorageArrayNeeded);
            } else {
                console.log("localstoragearrayindex not found in card dataset");
            };
        } else {
            console.log("localstoragearrayindex not found in card dataset");
        };
    } else {
        console.log("localstorageid not found in card dataset");
    };

    let jVarLocalKTableDivClass = jVarLocalPopUp.querySelector(".KTableDivClass");
    jVarLocalKTableDivClass.setAttribute("data-jsonconfig", jVarLocalClosestCard.dataset.jsonconfig);

    jVarLocalPopUp.querySelector(".modal-body").innerHTML = Handlebars.compile(jVarLocalTemplate)(jVarGlobalPresentViewData);

    jVarLocalPopUp.addEventListener('shown.bs.modal', function (event) {
        let jVarLocalSubmitButton = event.currentTarget.querySelector(".modal-body input");
        jVarLocalSubmitButton.focus();

    });

    var myModal = new bootstrap.Modal(jVarLocalPopUp, {
        keyboard: false
    });

    myModal.show();
};

let jFPopUpCreateNewForSubTable = ({ inEvent }) => {
    let jVarLocalcurrentTarget = inEvent.currentTarget;
    let jVarLocalClosestCard = jVarLocalcurrentTarget.closest(".card");
    let jVarLocalPopUp = document.getElementById('CreateNewPopUpId');
    console.log("jFPopUpCreateNewForSubTable : ", jVarLocalClosestCard);
    let jVarLocalTemplate = document.getElementById("Vertical/KPopUpForSubTable").innerHTML;

    if ("localstorageid" in jVarLocalClosestCard.dataset) {
        if ("localstoragearrayindex" in jVarLocalClosestCard.dataset) {
            if (jVarLocalClosestCard.dataset.localstorageid in localStorage) {
                let jVarLocalLocalStorageArrayNeeded =JSON.parse( localStorage.getItem(jVarLocalClosestCard.dataset.localstorageid));
                jVarGlobalPresentViewData=jVarLocalLocalStorageArrayNeeded[jVarLocalClosestCard.dataset.localstoragearrayindex];
            } else {
                console.log("localstoragearrayindex not found in card dataset");
            };
        } else {
            console.log("localstoragearrayindex not found in card dataset");
        };
    } else {
        console.log("localstorageid not found in card dataset");
    };

    let jVarLocalKTableDivClass = jVarLocalPopUp.querySelector(".KTableDivClass");
    jVarLocalKTableDivClass.setAttribute("data-jsonconfig", jVarLocalClosestCard.dataset.jsonconfig);

    jVarLocalPopUp.querySelector(".modal-body").innerHTML = Handlebars.compile(jVarLocalTemplate)(jVarGlobalPresentViewData);

    jVarLocalPopUp.addEventListener('shown.bs.modal', function (event) {
        let jVarLocalSubmitButton = event.currentTarget.querySelector(".modal-body input");
        jVarLocalSubmitButton.focus();

    });

    var myModal = new bootstrap.Modal(jVarLocalPopUp, {
        keyboard: false
    });

    myModal.show();
};

let jFTableToExcel = ({ tableID = "KTableId", filename = '' }) => {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    console.log("tableHTML : ", tableHTML);

    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });

        console.log("blob : ", blob);

        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }

};

function downloadCSV(csv, filename) {
    let csvFile;
    let downloadLink;

    // csv file
    csvFile = new Blob([csv], { type: 'text/csv' });

    // Download link
    downloadLink = document.createElement('a');

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

function exportTableToCSV(filename = "exp.csv", separator = ",") {
    const csv = [];
    const rows = document.querySelectorAll('table tr:not([style="display:none"])');
    console.log("rows : ", rows);
    for (let i = 0; i < rows.length; i++) {

        let row = [];

        const cols = rows[i].querySelectorAll("td, th");

        for (let j = 0; j < cols.length; j++)
            // Add double quote to make the value stay in the same column if is separated by comma
            row.push(`"${cols[j].innerText}"`);

        csv.push(row.join(separator));
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
};

function exportTableToCSV2() {
    let jVarLocalKTableId = document.getElementById("KTableId");
    let jVarLocalKTableBodyId = jVarLocalKTableId.querySelector("tbody");

    let jVarLocalTableBodyRows = jVarLocalKTableBodyId.querySelectorAll("tr");
    let jVarLocalTableFooterRows = jVarLocalKTableId.querySelectorAll("tfoot tr");

    let jVarLocalTableBodyCurrentRowTds = jVarLocalTableBodyRows[2].querySelectorAll("[class^='KCol']");
    //let jVarLocalTableFooterRowTds = jVarLocalTableFooterRows[0].querySelectorAll("[class^='KCol']");
    let jVarLocalClonedRowTds

    let jVarLocalClonedRow;
    var rowCount = jVarLocalTableBodyRows.length;

    jVarLocalTableBodyRows[2].classList.add("d-none");
    jVarLocalTableFooterRows[0].style.display = "";

    jVarLocalClonedRow = jVarLocalTableFooterRows[0].cloneNode(true);

    jVarLocalClonedRowTds = jVarLocalClonedRow.querySelectorAll("[class^='KCol']");

    jVarLocalClonedRowTds.forEach(element => {
        let jVarLoopLocalClassList = element.classList[0];
        let jVarLoopLocalFind = jVarLocalTableBodyRows[2].querySelector(`[class*='${jVarLoopLocalClassList}']`);

        element.querySelector("input").value = jVarLoopLocalFind.innerHTML.trim();
    });

    jVarLocalKTableBodyId.insertBefore(jVarLocalClonedRow, jVarLocalTableBodyRows[2])

};

function exportTableToCSV9() {
    let jVarLocalKTableId = document.getElementById("KTableId");
    let jVarLocalKTableBodyId = jVarLocalKTableId.querySelector("tbody");

    let jVarLocalTableBodyRows = jVarLocalKTableBodyId.querySelectorAll("tr");
    let jVarLocalTableFooterRow = jVarLocalKTableId.querySelector("tfoot tr");
    let jVarLocalCurrentRowClone = jVarLocalTableBodyRows[2].cloneNode(true);

    let jVarLocalClonedRow = jVarLocalTableFooterRow.cloneNode(true);

    let jVarLocalClonedRowTds = jVarLocalClonedRow.querySelectorAll("[class^='KCol']");

    let New = [];
    jVarLocalClonedRowTds.forEach(element => {
        let jVarLoopLocalClassList = element.classList[0];
        let jVarLoopLocalFind = jVarLocalCurrentRowClone.querySelector(`[class*='${jVarLoopLocalClassList}']`);
        New.push(jVarLoopLocalFind.innerHTML.trim());
    });
    console.log('New : ', New);
    jVarLocalTableBodyRows[2].innerHTML = jVarLocalClonedRow.innerHTML;

    jVarLocalTableBodyRows[2].querySelectorAll("[class^='KCol']").forEach((element, LoopIndex) => {
        element.querySelector("input").value = New[LoopIndex];
    });

};

function exportTableToCSV10() {
    let jVarLocalKTableId = document.getElementById("KTableId");
    let jVarLocalKTableBodyId = jVarLocalKTableId.querySelector("tbody");

    let jVarLocalTableBodyRows = jVarLocalKTableBodyId.querySelectorAll("tr");
    let jVarLocalTableFooterRow = jVarLocalKTableId.querySelector("tfoot tr");

    let jVarLocalClonedRow = jVarLocalTableFooterRow.cloneNode(true);

    let jVarLocalClonedRowTds = jVarLocalClonedRow.querySelectorAll("[class^='KCol']");

    let jVarLocalValuesArray = [];

    jVarLocalClonedRowTds.forEach(element => {
        let jVarLoopLocalClassList = element.classList[0];
        let jVarLoopLocalFind = jVarLocalTableBodyRows[2].querySelector(`[class*='${jVarLoopLocalClassList}']`);
        jVarLocalValuesArray.push(jVarLoopLocalFind.innerHTML.trim());
    });

    jVarLocalTableBodyRows[2].innerHTML = jVarLocalClonedRow.innerHTML;

    jVarLocalTableBodyRows[2].querySelectorAll("[class^='KCol']").forEach((element, LoopIndex) => {
        element.querySelector("input").value = jVarLocalValuesArray[LoopIndex];
    });

};


// document.querySelector('button').addEventListener('click', () => {
//     exportTableToCSV('filename.csv', ',');
// });