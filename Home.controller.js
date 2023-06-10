var path = require('path');
let CommonHomeScreen = require("./HomeScreen.json");

let GetFunc = (req, res, next) => {
    let LocalHomeScreen = CommonHomeScreen.HomeHtml;
    res.sendFile(path.join(__dirname + `/public/${LocalHomeScreen}.html`));
};

module.exports = {
    GetFunc
};
