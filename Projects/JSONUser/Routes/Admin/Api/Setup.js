var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/Save");

router.get('/:inDataPk  ', function (req, res, next) {
    let LocalDataPk = req.params.inDataPk;
    
    if (LocalDataPk > 0) {
        Repo.FromDataPk({ inUserPK: req.KeshavSoft.DataPk, inUserName: req.KeshavSoft.kUserName }).then((PromieData) => {
            res.end(JSON.stringify(PromieData));
        }).catch((PromiseError) => {

        });
    };
});

module.exports = router;