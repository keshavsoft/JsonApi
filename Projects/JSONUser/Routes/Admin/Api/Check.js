var express = require('express');
var router = express.Router();

let UserCheck = require("../../../../../DataSupply/Fs/Users/AdminData/Check");
//let CommonjwtFunc = require("../../../../../common/Jwt/AdminData");

router.get('/LoginCheck/:inUserName/:inPassWord', (req, res, next) => {
    let LocalUserName = req.params.inUserName;
    let LocalPassWord = req.params.inPassWord;

    console.log("LocalUserName : ", LocalUserName);
    
    UserCheck.ForUserAndPassword({
        inUserName: req.params.inUserName,
        inPassWord: req.params.inPassWord,
        inoriginalUrl: req.originalUrl
    }).then(PromiseDataFromUserCheck => {
        if (PromiseDataFromUserCheck.KTF) {
            if (PromiseDataFromUserCheck.kPK > 0) {
                res.json({});

                // CommonjwtFunc.CreateToken({ inUserName: req.params.inUserName, inDataPk: PromiseDataFromUserCheck.kPK }).then(PromiseDataFromJwt => {
                //     res.cookie('KAToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

                //     res.json(PromiseDataFromUserCheck);
                // });

            } else {
                res.json(PromiseDataFromUserCheck);
            };
        } else {
            res.json(PromiseDataFromUserCheck);
        };
    });
});

router.get('/LoginCheckReturnToken/:inUserName/:inPassWord', (req, res, next) => {
    let LocalUserName = req.params.inUserName;
    let LocalPassWord = req.params.inPassWord;

    UserCheck.ForUserAndPassword({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
        inoriginalUrl: req.originalUrl
    }).then(PromiseDataFromUserCheck => {
        if (PromiseDataFromUserCheck.KTF) {
            if (PromiseDataFromUserCheck.kPK > 0) {
                res.json({});

                // CommonjwtFunc.CreateToken({ inUserName: req.params.inUserName, inDataPk: PromiseDataFromUserCheck.kPK }).then(PromiseDataFromJwt => {
                //     PromiseDataFromUserCheck.KToken = PromiseDataFromJwt;

                //     res.json(PromiseDataFromUserCheck);
                // });

            } else {
                res.json(PromiseDataFromUserCheck);
            };
        } else {
            res.json(PromiseDataFromUserCheck);
        };
    });
});

module.exports = router;