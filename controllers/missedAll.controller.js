let getUrl = async (req, res) => {
    let LocalUrlArray = req.originalUrl.split("/");
    let LocalBasePath = LocalUrlArray[1];
    let LocalLastEndPoint = LocalUrlArray[LocalUrlArray.length - 1];

    if (LocalLastEndPoint.includes(".")) {
        if (LocalLastEndPoint.split(".")[1] === "html") {
            if (LocalBasePath === "JSONUser") {
                res.setHeader("Content-Type", "text/html");
                return await res.end("Copy JSONUser to public from Repo : https://github.com/keshavsoft/kposthtml");
            };

            if (LocalBasePath === "JSONAdminApi") {
                res.setHeader("Content-Type", "text/html");
                return await res.end("Copy JSONAdminApi to public from Repo : https://github.com/keshavsoft/kposthtml");
            };

            if (LocalBasePath === "JSONReports") {
                res.setHeader("Content-Type", "text/html");
                return await res.end("Copy JSONReports to public from Repo : https://github.com/keshavsoft/kposthtml");
            };
        };
    };

    switch (LocalBasePath) {
        case "JSONAdminApi":
            res.setHeader("Content-Type", "text/html");
            res.end("Copy project : JSONAdminApi from Repo : https://github.com/keshavsoft/AdminApi");

            break;
        case "Tally":
            res.setHeader("Content-Type", "text/html");
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
        case "JSONAdminApi":
            res.status(503).send("From Post, Copy JSONAdminApi to public from Repo : https://github.com/keshavsoft/JSONAdminApi");

            break;
        case "Tally":
            res.setHeader("Content-Type", "text/html");
            res.end("From Post, Copy Tally to public from Repo : https://github.com/keshavsoft/kposthtml");

            break;
        case "JSONUser":
            res.status(503).send("From Post, Copy JSONUser to public from Repo : https://github.com/keshavsoft/JSONUser");

            // res.setHeader("Content-Type", "text/html");
            // res.end("From Post, Copy project : JSONUser from Repo : https://github.com/keshavsoft/JSONUser");

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