let StartFunc = ({ inClients }) => {
    let jVarLocalReturnArray = [];
    for (let [key, value] of inClients) {
        jVarLocalReturnArray.push(value);
    };
    // console.log("hi",jVarLocalReturnArray);
    return jVarLocalReturnArray;
}

module.exports = StartFunc;