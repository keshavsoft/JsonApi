import { StartFunc as StartFuncFetchFunc } from './PostFunc.js'
import { StartFunc as StartFuncAfterFetch } from '../AfterFetch/EntryFile.js'

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFunc();

    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded.KTF) {

            StartFuncAfterFetch({ inResponseAsJson: jVarLocalDataNeeded });
        };
    }
};

export { StartFunc }

