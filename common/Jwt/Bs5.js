var jwt = require('jsonwebtoken');
let CommonCheckDataPK = require("../../DataSupply/Fs/Config/CheckDataPK");
let CommonSecret = "k";

let LocalVerifyToken = (req, res, inKToken, next) => {
    try {
        console.log("inKToken : ", inKToken);
        jwt.verify(inKToken, CommonSecret, (err, authData) => {

            if (err) {
                //  res.end(err);
                res.end("Invalid Token!");
            } else {
                if (("DataPk" in authData) === false) {
                    res.end("Invalid Token -1.");
                } else {
                    let LocalFromForExistence = CommonCheckDataPK.ForExistence({ inDataPK: authData.DataPk });

                    if ("KTF" in LocalFromForExistence) {
                        if (LocalFromForExistence.KTF === false) {
                            res.end(LocalFromForExistence.KReason);
                        } else {
                            if (("KeshavSoft" in req) === false) {
                                req.KeshavSoft = { Headers: {} };
                            };

                            req.KeshavSoft.kUserName = authData.UserName;
                            req.KeshavSoft.DataPk = parseInt(authData.DataPk);

                            next();
                        };
                    } else {
                        res.end("KTF not found in ForExistence!");
                    };
                };
            };
        });

    } catch (error) {
        console.log("error from jwt : ", error);
    };
};

exports.VerifyTokenOnly = async ({ inToken }) => {
    return new Promise((resolve, reject) => {
        jwt.verify(inToken, CommonSecret, (err, authData) => {
            if (err) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
};

exports.VerifyTokenReturnData = async ({ inToken }) => {
    return await jwt.verify(inToken, CommonSecret);

    // jwt.verify(inToken, CommonSecret, async (err, authData) => {
    //     console.log("aaaaaaaaaa ", err, authData);
    //     if (err) {
    //         return await err;
    //     } else {
    //         return await authData;
    //     };
    // });
};

let LocalFromCoookies = (req, res, next) => {
    LocalVerifyToken(req, res, req.cookies.KToken, next);
};

let LocalFromHeaders = (req, res, next) => {
    if (req.get("ktoken") === undefined) {
        res.json({ KTF: false, KReason: "ktoken not found in request headers!" });
    } else {
        LocalVerifyToken(req, res, req.headers.ktoken, next);
    };
};

exports.ForKeshavSoftRedirectToLogin = (req, res, next) => {
    if ("KToken" in req.cookies) {
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
            resolve(token);
        });
    });
};

