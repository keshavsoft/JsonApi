var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/Email");

router.get('/:inUserName/:inEmail/:inJWToken', function (req, res, next) {
    let LocalUserName = req.params.inUserName;
    let LocalJWToken = req.params.inJWToken;
    let LocalinEmail = req.params.inEmail;
    console.log("aaaaaaaaaaaa");
    Repo.VerifyTokenAndSetup({
        inUserName: LocalUserName,
        inEmail: LocalinEmail,
        inJWToken: LocalJWToken
    }).then(PromieData => {
        console.log("PromieData : ", PromieData);
        res.end(JSON.stringify(PromieData));
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.get('/FromTemplate/:inUserName/:inEmail/:inJWToken', function (req, res, next) {
    let LocalUserName = req.params.inUserName;
    let LocalJWToken = req.params.inJWToken;
    let LocalinEmail = req.params.inEmail;

    Repo.FromTemplate({
        inUserName: LocalUserName,
        inEmail: LocalinEmail,
        inJWToken: LocalJWToken
    }).then(PromieData => {
        res.end(JSON.stringify(PromieData));
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;