import { StartFunc as StartFuncLoopInputs } from "../../../../../../CommonFuncs/Htmlnputs/LoopInputs.js";
import { StartFunc as StartFuncFromDataSet } from "../../../../../../CommonFuncs/FromCard/FromDataSet.js";

let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarClosestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarClosestCard = jVarLocalCurrentTarget.closest(".card");

    let JsonPK = jVarClosestTr.dataset.pk;

    let jVarLocalFetchPostData = StartFuncLoopInputs({ jVarHtmlCardBody: jVarClosestTr });
    let jVarLocalBody = StartFuncFromDataSet({ inHtmlCard: jVarClosestCard });

    jVarLocalBody.pk = JsonPK;
    jVarLocalBody.inDataToUpdate = jVarLocalFetchPostData;

    return jVarLocalBody;
};

export { StartFunc }