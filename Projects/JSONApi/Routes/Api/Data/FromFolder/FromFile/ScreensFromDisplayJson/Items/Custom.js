var express = require('express');
var router = express();
let Repos = require('../../../../../../../Repository/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Custom/PostFromPk')

router.get('/PostFromPk/:inRowPk', (req, res) => {
    console.log("-aaaaaaaaaaaaaa", req.params.inRowPk);
    // res.end("ssssssssssssssss");
    let LocalRowPk = req.params.inRowPk;

    Repos.GetFunc({
        inClientName: "Maguva",
        inPurchasePK: LocalRowPk
    }).then(PromiseData => {
        res.json(PromiseData);
    });

});

module.exports = router;
