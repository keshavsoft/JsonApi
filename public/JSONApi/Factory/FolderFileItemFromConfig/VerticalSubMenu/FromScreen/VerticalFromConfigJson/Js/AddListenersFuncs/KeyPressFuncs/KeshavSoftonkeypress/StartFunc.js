let StartFunc = async (inEvent) => {
    if (inEvent.keyCode === 13) {
        let jVarLocalCurrentTarget = inEvent.currentTarget;
        let jVarLocalClosestForm = jVarLocalCurrentTarget.closest("tr");
        if ("clienteval" in jVarLocalCurrentTarget.dataset) {
            let jVarLocalClientEval = inEvent.currentTarget.dataset.clienteval;
            console.log("jVarLocalClientEval87988", jVarLocalClientEval);
            let jVarLocalReplaced = jVarLocalClientEval.replaceAll("{{KS}}", `"${jVarLocalCurrentTarget.value}"`);
            console.log("jVarLocalReplaced902", jVarLocalReplaced);
            let jVarLocalEvalValue = `'${jVarLocalCurrentTarget.value}'.${jVarLocalClientEval}`;
            // inEvent.currentTarget.value = eval(jVarLocalEvalValue);
            inEvent.currentTarget.value = eval(jVarLocalReplaced);


        } else {

        };

    };
};

export { StartFunc };
