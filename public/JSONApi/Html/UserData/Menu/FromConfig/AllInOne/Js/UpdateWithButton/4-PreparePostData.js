let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalDisplayName = jVarLocalColsestTr.querySelector('[name="DisplayName"]');
    let jVarLocalShowInTable = jVarLocalColsestTr.querySelector('[name="ShowInTable"]');
    let jVarLocalInsert = jVarLocalColsestTr.querySelector('[name="Insert"]');
    let jVarLocalCreateNew = jVarLocalColsestTr.querySelector('[name="CreateNew"]');
    let jVarLocalIsTextArea = jVarLocalColsestTr.querySelector('[name="IsTextArea"]');
    let jVarLocalShowTotal = jVarLocalColsestTr.querySelector('[name="ShowTotal"]');
    let jVarLocalEnterToServer = jVarLocalColsestTr.querySelector('[name="EnterToServer"]');
    
    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalDisplayNameValue = jVarLocalDisplayName.value;
    let jVarLocalShowInTableValue = jVarLocalShowInTable.checked
    let jVarLocalInsertValue = jVarLocalInsert.checked
    let jVarLocalCreateNewValue = jVarLocalCreateNew.checked
    let jVarLocalIsTextAreaValue = jVarLocalIsTextArea.checked
    let jVarLocalShowTotalValue = jVarLocalShowTotal.checked
    let jVarLocalEnterToServerValue = jVarLocalEnterToServer.checked

    let BodyAsJson = {
        DisplayName: jVarLocalDisplayNameValue,
        ShowInTable: jVarLocalShowInTableValue,
        Insert: jVarLocalInsertValue,
        CreateNew: jVarLocalCreateNewValue,
        IsTextArea: jVarLocalIsTextAreaValue,
        ShowTotal: jVarLocalShowTotalValue,
        EnterToServer: jVarLocalEnterToServerValue
    }

    return {
        folderName: jVarLocalFolderName,
        FileName: jVarLocalfilename,
        ItemName: jVarLocalitemname,
        ScreenName: jVarLocalscreenname,
        DataAttribute: jVarLocalDataAttributeValue,
        BodyAsJson
    };
};

export { StartFunc };