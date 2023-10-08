import { StartFunc as StartFuncEntry } from "./FormFetchFuncs/Entry.js";

const StartFunc = async () => {
    await StartFuncEntry();
};

export { StartFunc }