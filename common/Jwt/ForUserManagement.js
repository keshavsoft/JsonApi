var jwt = require('jsonwebtoken');
let CommonTokenName = "KUMAToken";
let CommonSecret = "k";

let LocalFromCoookies = (req, res, next) => {
    jwt.verify(req.cookies[CommonTokenName], CommonSecret, (err, authData) => {
        if (err) {
            res.send(JSON.stringify({ KTF: false }));
        } else {
            if (req.hasOwnProperty("KeshavSoft") === false) {
                req.KeshavSoft = { Headers: {} };
            };

            req.KeshavSoft.kUserName = authData.UserName;
            req.KeshavSoft.DataPk = parseInt(authData.DataPk);

            next();
        }
    });
};

let LocalFromHeaders = (req, res, next) => {
    jwt.verify(req.headers[CommonTokenName], CommonSecret, (err, authData) => {
        if (err) {
            console.log("err : ", err);
            res.sendStatus(403);
        } else {
            if (req.hasOwnProperty("KeshavSoft") === false) {
                req.KeshavSoft = { Headers: {} };
            };

            req.KeshavSoft.kUserName = authData.UserName;
            req.KeshavSoft.DataPk = parseInt(authData.DataPk);

            next();
        }
    });
};

exports.ForKeshavSoftRedirectToLogin = (req, res, next) => {
    if (typeof req.cookies[CommonTokenName] !== "undefined") {
        LocalFromCoookies(req, res, next);
    } else {
        if (typeof req.headers !== "undefined") {
            LocalFromHeaders(req, res, next);
        } else {
            res.sendStatus(403);
        };
    };
};

exports.CreateToken = ({ inUserName, inDataPk }) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ UserName: inUserName, DataPk: inDataPk }, CommonSecret, (err, token) => {
            resolve({ CookieName: CommonTokenName, KToken: token });
        });
    });
};

