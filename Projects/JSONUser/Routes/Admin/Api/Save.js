var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/Save");

router.get('/', function (req, res, next) {
    if (req.KeshavSoft.DataPk > 0) {
        Repo.Save({ inUserPK: req.KeshavSoft.DataPk, inUserName: req.KeshavSoft.kUserName }).then((PromieData) => {
            res.end(JSON.stringify(PromieData));
        }).catch((PromiseError) => {

        });
    };
});

module.exports = router;