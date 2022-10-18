let jFFocusInHeader = () => {
    let jVarLocalUrlArray = window.location.href.split("/");
    let jVarLastInUrl = jVarLocalUrlArray[jVarLocalUrlArray.length - 1];
    let jVarFileName = jVarLastInUrl.split(".")[0];
    let jVarFindElements = document.getElementById("NavBarId").querySelectorAll("li a");

    jVarFindElements.forEach(element => {
        element.classList.remove("text-info");
        element.classList.add("text-white");

        if (element.innerText === jVarFileName) {
            element.classList.remove("text-white");
            element.classList.add("text-info");
        };

//        console.log(element.innerText);
    });

    // jVarElementToFocus.classList.remove("text-white");
    // jVarElementToFocus.classList.add("text-info");
};

let jFFocusInHeaderFromKSHead = () => {
    let jVarLocalUrlArray = window.location.href.split("/");
    let jVarLastInUrl = jVarLocalUrlArray[jVarLocalUrlArray.length - 1];
    let jVarFileName = jVarLastInUrl.split(".")[0];

    let jVarElementToFocus = document.getElementById(`KSHead${jVarFileName}`);

    jVarElementToFocus.classList.remove("text-white");
    jVarElementToFocus.classList.add("text-info");
};

let jFRemoveActiveClassInHeader_notneeded = () => {
    let jVarLocalNavId = document.getElementById("NavBarId");
    let jVarLocalActiveElements = jVarLocalNavId.querySelectorAll(".text-info");

    jVarLocalActiveElements[0].classList.remove("text-info");
    jVarLocalActiveElements[0].classList.add("text-white");
};

jFFocusInHeader();
