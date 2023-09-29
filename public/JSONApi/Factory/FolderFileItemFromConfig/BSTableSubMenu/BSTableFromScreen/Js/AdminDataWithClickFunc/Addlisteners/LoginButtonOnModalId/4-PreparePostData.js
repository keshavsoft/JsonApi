const StartFunc = () => {
    let jVarLocalObject = {};

    jVarLocalObject.inUserName = document.getElementById("KUserNameInput").value;
    jVarLocalObject.inPassWord = document.getElementById("KPasswordInput").value;

    if (jVarLocalObject.inUserName !== "" && jVarLocalObject.inPassWord !== "") {
        return jVarLocalObject;
    };
};

export { StartFunc };