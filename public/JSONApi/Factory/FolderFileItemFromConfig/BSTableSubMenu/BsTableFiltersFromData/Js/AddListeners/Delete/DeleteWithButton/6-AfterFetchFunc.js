let StartFunc = async ({ inResponse, inBodyData }) => {

    let localInJsonPk = JSON.parse(inBodyData.body).inJsonPK;


    switch (inResponse.KTF) {
        case true:

            // const Toast = Swal.mixin({
            //     toast: true,
            //     position: 'top-center',
            //     showConfirmButton: false,
            //     timer: 3000,
            //     timerProgressBar: true,
            //     didOpen: (toast) => {
            //       toast.addEventListener('mouseenter', Swal.stopTimer)
            //       toast.addEventListener('mouseleave', Swal.resumeTimer)
            //     }
            //   })

            //   Toast.fire({
            //     icon: 'error',
            //     title: `Deleted successfully @RowPK${localInJsonPk}`
            //   })
            // window.location.href = "";

            let queryString = `${window.location.origin}/JSONApi/Factory/FolderFileItemFromConfig/BSTableSubMenu/BSTableFiltersFromData/BSTableFiltersFromData.html`;

            const myUrlWithParams = new URL(queryString);

            myUrlWithParams.searchParams.append("FromDelete", true);
            myUrlWithParams.searchParams.append("DeletePk", localInJsonPk);

            window.location.href = myUrlWithParams.href;

            break;

        case false:
            Swal.fire(`Not Update Data ${inResponse.KReason}`)
            break;
        default:
    };
};

export { StartFunc };