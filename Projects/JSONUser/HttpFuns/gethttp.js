const http = require('http')
let debug = require("debug")("KS8");
let CommonDataPath = require("../Kprivate/DataPath.json");

const options = {
    hostname: '',
    port: '',
    path: '',
    method: 'GET',
    headers: { 'Cookie': '' }
};

let WithOutCookie = ({ inoriginalUrl }) => {
    return new Promise((resolve, reject) => {
        //debug("inoriginalUrl : ", inoriginalUrl, inKToken);
        //Foptions.headers.Cookie = `KToken=${inRequest.cookies.KToken}`;
        options.path = inoriginalUrl;
        options.hostname = CommonDataPath.DalPath.hostname;
        options.port = CommonDataPath.DalPath.port;
        debug("options : ", options);
        var results = '';

        const req = http.request(options, res => {
            res.on('data', chunk => {
                results = results + chunk;
            });

            res.on('end', function () {
                debug("results ", results, JSON.parse(results));
                resolve(JSON.parse(results.toString()));
                //TODO
            });

        })

        req.on('error', error => {
            console.error("errir", error);
            reject(error);
        })

        req.end();
    });
};

let WithCookie = ({ inCookie, inoriginalUrl }) => {
    return new Promise((resolve, reject) => {
        options.headers.Cookie = inCookie;
        options.path = inoriginalUrl;
        options.hostname = CommonDataPath.DalPath.hostname;
        options.port = CommonDataPath.DalPath.port;
        debug("options : ", options);
        var results = '';

        const req = http.request(options, res => {
            res.on('data', chunk => {
                results = results + chunk;
            });

            res.on('end', function () {
                resolve(results.toString());
                //TODO
            });

        })

        req.on('error', error => {
            console.error("errir", error);
            reject(error);
        })

        req.end();
    });
};

module.exports = { WithOutCookie, WithCookie };

