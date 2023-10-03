import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";
// import { StartFunc as StartFuncVerticalFromParamsButton } from "./VerticalFromParamsId/EntryFile.js";
// import { StartFunc as StartFuncMenuId } from "./MenuId/EntryFile.js";

let StartFunc = () => {
    StartFuncRefreshBSTableId();
    // StartFuncVerticalFromParamsButton();
    // StartFuncMenuId();

};

export { StartFunc };