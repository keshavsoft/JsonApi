let getUrl = async (req, res) => {
    let LocalUrlArray = req.originalUrl.split("/");
    let LocalBasePath = LocalUrlArray[1];
    
    switch (LocalBasePath) {
        case "Tally":
            res.end("Copy Tally to public from Repo : https://github.com/keshavsoft/kposthtml");
            break;
        case "JSONUser":
            res.end("Copy project : JSONUser from Repo : https://github.com/keshavsoft/JSONUser");

            break;
        case "JSONImport":
            res.setHeader("Content-Type", "text/html");
            res.end("From Get, Copy project : JSONImport from Repo : https://github.com/keshavsoft/JSONImport");

            break;
        default:
            res.end(`${req.originalUrl} : end point not found!`);

            break;
    };
};

let postUrl = async (req, res) => {
    let LocalUrlArray = req.originalUrl.split("/");
    let LocalBasePath = LocalUrlArray[1];

    switch (LocalBasePath) {
        case "Tally":
            res.end("Copy Tally to public from Repo : https://github.com/keshavsoft/kposthtml");
            break;
        case "JSONUser":
            res.end("Copy project : JSONUser from Repo : https://github.com/keshavsoft/JSONUser");

            break;
        case "JSONImport":
            res.end("Copy project : JSONImport from Repo : https://github.com/keshavsoft/JSONImport");

            break;
        default:
            res.end(`${req.originalUrl} : end point not found!`);

            break;
    };
};

module.exports = { getUrl, postUrl }