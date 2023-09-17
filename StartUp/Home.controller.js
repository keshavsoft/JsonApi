var path = require('path');

let GetFunc = (req, res, next) => {
    //let LocalHomeScreen = CommonHomeScreen.HomeHtmlForGarments;
    let CommonHomeScreen = require("./HomeScreen.json");
    let CommonScreenSelect = require("./ScreenSelect.json");
    
    let LocalHomeScreen = CommonScreenSelect.HomeScreenKey;

    res.sendFile(path.join(__dirname + `/../public/${CommonHomeScreen[LocalHomeScreen]}.html`));
};

module.exports = {
    GetFunc
};
