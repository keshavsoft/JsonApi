// KVerticalFooterSaveButtonClass

let StartFunc = async () => {

    let jVarLocalFind = document.querySelectorAll(".KVerticalFooterSaveButtonClass");
    //MainTable Body Row Options Print
    jVarLocalFind.forEach((spanElement) => {
        spanElement.addEventListener("click", LocalClickFunc);
    });
};

let LocalClickFunc = async (inEvent) => {
    console.log("sssssssssssss");
};

export { StartFunc }