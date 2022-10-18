var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/Save");

router.post('/', function (req, res, next) {
    let LocalUserName = req.body.UserName;
    let LocalPassWord = req.body.PassWord;
    
    Repo.Save({
        inUserName: LocalUserName,
        inPassword: LocalPassWord
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.post('/WithDataPk', function (req, res, next) {
    let LocalUserName = req.body.UserName;
    let LocalPassWord = req.body.PassWord;
    let Localpk = req.body.pk;

    Repo.WithDataPk({
        inDataPk: Localpk,
        inUserName: LocalUserName,
        inPassword: LocalPassWord
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;