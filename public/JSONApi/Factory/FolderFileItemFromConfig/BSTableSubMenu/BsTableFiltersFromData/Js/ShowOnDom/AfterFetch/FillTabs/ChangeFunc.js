const StartFunc = () => {
    let jVarLocalHtmlId = "CheckBoxClass";
    let jVarLocalCheckBoxClass = document.getElementsByClassName(jVarLocalHtmlId);
    for (let i = 0; i < jVarLocalCheckBoxClass.length; i++) {
        jVarLocalCheckBoxClass[i].addEventListener("change",()=>{
            if (jVarLocalCheckBoxClass[i].checked) {
                console.log("checked", jVarLocalCheckBoxClass[i]);
            }
            else{
                console.log("unchecked", jVarLocalCheckBoxClass[i]);
            }
        })

    }
};

export { StartFunc };