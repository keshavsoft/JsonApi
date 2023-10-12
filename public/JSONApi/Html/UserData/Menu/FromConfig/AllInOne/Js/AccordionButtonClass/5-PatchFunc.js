// import ApiConfigJson from '../../../../../Admin/ApiConfig.json' assert {type: 'json'};
import ApiConfigJson from '../../../../../../../../../JSONAdminApi/Js/Admin/ApiConfig.json' assert {type: 'json'};
import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";

let StartFunc = async ({ inFetchBody }) => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
        focusCancel: true,
        focusButtonColor: "#0000ff"
    }).then((result) => {
        if (result.isConfirmed) {
            localFetchFunc({ inFetchBody })
        }
    });

};

const localFetchFunc = async ({ inFetchBody }) => {
    // let jFetchUrl = `/${ApiConfigJson.ProjectName}/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/Toggles`;
    let jFetchUrl = `/JSONApi/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK`;
   
    let jLocalFetchConfig = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    };

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    let jVarLocalResponseData = await response.json();
    console.log("jVarLocalResponseData:",jVarLocalResponseData);

    StartFuncAfterFetchFunc({ inResponse: jVarLocalResponseData, inBodyData: inFetchBody });

    // return await response.status;

}

export { StartFunc };