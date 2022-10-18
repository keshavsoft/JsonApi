let express = require('express');
let router = express.Router();
let Repos = require("../../../../../Repository/Api/Data/Masters/PreLoad");

router.get('/', function (req, res, next) {
    let LocalDataPk = req.KeshavSoft.DataPk;
    
    Repos.PreLoad({ inDataPk: LocalDataPk }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;