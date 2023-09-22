let StartFunc = async (inEvent) => {
    if (inEvent.keyCode === 13) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarLocalFoam = document.getElementById("kform1");
        let jVarLocalFromData = serializeObject(jVarLocalFoam);

        if ("clienteval" in jVarLocalCurrentTarget.dataset) {
            let jVarLocalClientEval = inEvent.currentTarget.dataset.clienteval;

            let jVarLocalReplaced = jVarLocalClientEval.replaceAll("{{KS}}", `"${jVarLocalCurrentTarget.value}"`);

            Object.entries(jVarLocalFromData).forEach(
                ([key, value]) => {
                    jVarLocalReplaced = jVarLocalReplaced.replace(`{{${key}}}`, parseFloat(value));
                }
            );
            inEvent.currentTarget.value = eval(jVarLocalReplaced);


        } else {

        };

    };
};

let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    }

    // Return the object
    return pairs;
};



export { StartFunc };
