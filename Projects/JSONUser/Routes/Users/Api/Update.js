var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/Update");

router.get('/', function (req, res, next) {
    if (req.KeshavSoft.DataPk > 0) {
        Repo.Update({ inUserPK: req.KeshavSoft.DataPk, inUserName: req.KeshavSoft.kUserName }).then((PromieData) => {
            res.end(JSON.stringify(PromieData));
        }).catch((PromiseError) => {

        });
    };
});

module.exports = router;