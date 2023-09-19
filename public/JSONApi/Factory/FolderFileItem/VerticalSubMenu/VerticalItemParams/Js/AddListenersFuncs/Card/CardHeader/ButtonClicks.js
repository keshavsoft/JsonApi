let StartFunc = () => {
    let jVarLocalCardHeaderButtons = document.querySelectorAll(".CardHeaderButtons");

    for (let i = 0; i < jVarLocalCardHeaderButtons.length; i++) {
        jVarLocalCardHeaderButtons[i].addEventListener("click", LocalButtonClick);
    };

    console.log("jVarLocalCardHeaderButtons : ", jVarLocalCardHeaderButtons);
};

let LocalButtonClick = () => {
    window.location.href = `Vertical.html${window.location.search}`;
    //console.log("aaaaaaa");
};

export { StartFunc }