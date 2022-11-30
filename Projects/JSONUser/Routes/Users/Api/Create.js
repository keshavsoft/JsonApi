var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/Create");

router.get('/', function (req, res, next) {
    let LocalUserName = req.query.inUserName;
    let LocalPassword = req.query.inPassword;
    let LocalEmail = req.query.inEmail;

    if (req.KeshavSoft.DataPk > 0) {
        Repo.Create({ inUserPK: req.KeshavSoft.DataPk, inUserName: LocalUserName, inPassword: LocalPassword, inEmail: LocalEmail }).then((PromieData) => {
            res.end(JSON.stringify(PromiseData));
        }).catch((PromiseError) => {

        });
    };
});

router.get('/:UserName/:Password', function (req, res, next) {
    let LocalUserName = req.params.UserName;
    let LocalPassword = req.params.Password;
    let LocalEmail = req.query.inEmail;
    let LocalDataPk = 116;
   // console.log("LocalUserName : ", LocalUserName);
    if (LocalDataPk > 0) {
        Repo.Create({
            inUserPK: LocalDataPk,
            inUserName: LocalUserName,
            inPassword: LocalPassword, inEmail: LocalEmail
        }).then(PromiseData => {
            res.end(JSON.stringify(PromiseData));
        }).catch((PromiseError) => {
            res.end(JSON.stringify(PromiseError));
        });
    };
});

router.get('/Admin/:UserName/:Password', function (req, res, next) {
    let LocalUserName = req.params.UserName;
    let LocalPassword = req.params.Password;
    let LocalEmail = req.query.inEmail;
    
    Repo.Admin({
        inUserName: LocalUserName,
        inPassword: LocalPassword, inEmail: LocalEmail
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;