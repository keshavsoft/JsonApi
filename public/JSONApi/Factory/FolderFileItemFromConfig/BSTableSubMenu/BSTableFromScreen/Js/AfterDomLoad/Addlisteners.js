let StartFunc = ({ inProjectName }) => {
    let jVarLocalDeleteButtonClass = document.getElementsByClassName("DeleteButtonClass");

    for (let i = 0; i < jVarLocalDeleteButtonClass.length; i++) {
        jVarLocalDeleteButtonClass[i].addEventListener("click", async () => {
            await jFLocalButtonClickFunc({
                inEvent: event,
                inProjectName
            });
        });
    };
};

// DeleteButtonClass

let jFLocalButtonClickFunc = async ({ inEvent }) => {

    let jVarLocalCurrentTarget = inEvent.currentTarget;

    console.log("jVarLocalCurrentTarget : ", jVarLocalCurrentTarget);
    // let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;

    // let jVarLocalNewLocation = "";
    // jVarLocalNewLocation += `/JSONAdminApi/Html/Admin/CreateNew/CreateFile.html?inFolderName=${jVarLocalFolderName}`
    // window.location = jVarLocalNewLocation;

};

export { StartFunc };