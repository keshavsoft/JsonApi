var express = require('express');
var router = express();
let Repos = require('../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Custom/PostFromPk')

router.get('/PostFromPk/:inRowPk', (req, res) => {
    // res.end("ssssssssssssssss");
    let LocalRowPk = req.params.inRowPk;
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.GetFunc({
        inClientName: "Maguva",
        inPurchasePK: LocalRowPk,
        inDataPk: LocalDataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    });

});

module.exports = router;
