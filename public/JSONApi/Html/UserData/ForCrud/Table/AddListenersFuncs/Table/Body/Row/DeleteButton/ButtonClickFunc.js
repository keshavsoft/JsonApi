import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";

let StartFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Yes, delete it!',
        confirmButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
        } else {
            StartFuncFetchFunc({ currentTarget: jVarLocalCurrentTarget })

        };

    });

};

export { StartFunc }