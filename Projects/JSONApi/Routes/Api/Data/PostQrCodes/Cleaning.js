var express = require('express');
var router = express();
let Repos = require('../../../../Repository/Api/Data/PostQrCodes/Cleaning');

router.get('/:inFileNameOnly/:inRowPk', (req, res) => {
    let LocalRowPk = req.params.inRowPk;
    let LocalFileNameOnly = req.params.inFileNameOnly;
    let LocalDataPk = req.KeshavSoft.DataPk;

    Repos.GetFunc({
        inClientName: "Cleaning",
        inPurchasePK: LocalRowPk,
        inFileNameOnly: LocalFileNameOnly,
        inDataPk: LocalDataPk
    }).then(PromiseData => {
        console.log("PromiseData : ", PromiseData);

        res.json(PromiseData);
    });

});

module.exports = router;
