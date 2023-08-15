let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/Api/Data/FromFolder/GetDirs");

router.get('/AsArray', function (req, res, next) {
    let LocalDataPk = req.KeshavSoft.DataPk;

    if ((req.get('Accept') === "application/json") === false) {
        res.status(422).send('Accept:application/json only!');
    };

    Repos.AsArray({ inDataPk: LocalDataPk }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

router.get('/AsTree', function (req, res, next) {
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.AsTree({ inDataPk: LocalDataPk }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

router.get('/MenuWithDesign', function (req, res, next) {
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.MenuWithDesign({ inDataPK: LocalDataPk }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;