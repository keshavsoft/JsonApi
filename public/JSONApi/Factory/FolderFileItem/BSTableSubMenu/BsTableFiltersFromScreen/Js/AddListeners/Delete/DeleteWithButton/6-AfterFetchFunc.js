let StartFunc = async ({ inResponse, inBodyData }) => {

    let localInJsonPk = JSON.parse(inBodyData.body).inJsonPK;


    switch (inResponse.KTF) {
        case true:

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-center',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: `Deleted successfully @RowPK${localInJsonPk}`
          }).then(()=>{
            window.location.href=""
          })

            // window.location.href = "";
            break;

        case false:
            Swal.fire(`Not Update Data ${inResponse.KReason}`)
            break;
        default:
    };
};

export { StartFunc };