let _ = require("lodash");

let ItemScreenColumn = ({ inItemKeysArray, inRequestQuery }) => {
    let LocalItemConfig = {};
    LocalItemConfig = _.pick(inRequestQuery, inItemKeysArray);

    return LocalItemConfig;
};

let ItemScreenColumnNoLodash = ({ inItemKeysArray, inRequestQuery }) => {
    //console.log("inItemKeysArray : ", inItemKeysArray, inRequestQuery);
    let LocalItemConfig = {};

    inItemKeysArray.forEach(element => {
        if (element in inRequestQuery) {
            LocalItemConfig[element] = inRequestQuery[element];
        };
    });
    //console.log("LocalItemConfig : ", LocalItemConfig);

    return LocalItemConfig;
};

module.exports = { ItemScreenColumn, ItemScreenColumnNoLodash };