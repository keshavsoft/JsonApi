var path = require('path');
let CommonHomeScreen = require("./HomeScreen.json");
let CommonScreenSelect = require("./ScreenSelect.json");

let GetFunc = (req, res, next) => {
    //let LocalHomeScreen = CommonHomeScreen.HomeHtmlForGarments;

    let LocalHomeScreen = CommonScreenSelect.HomeScreenKey;

    res.sendFile(path.join(__dirname + `/../public/${CommonHomeScreen[LocalHomeScreen]}.html`));
};

module.exports = {
    GetFunc
};
