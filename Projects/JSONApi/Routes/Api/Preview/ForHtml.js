let express = require('express');
let router = express.Router();
let Repos = require("../../../Repository/Api/Preview/ForHtml");

router.get('/', function (req, res, next) {
    let LocalDataPK = req.KeshavSoft.DataPk;

    Repos.ShowData({
        inDataPK: LocalDataPK
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    });
});

module.exports = router;