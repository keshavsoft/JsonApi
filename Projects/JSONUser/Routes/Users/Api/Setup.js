var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/Setup");

router.get('/:inUserPK', function (req, res, next) {
    let LocalUserPK = req.params.inUserPK;
    console.log("ssssssss : ", LocalUserPK);
    Repo.Basic({
        inUserPK: LocalUserPK
    }).then((PromieData) => {
        res.end(JSON.stringify(PromieData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;