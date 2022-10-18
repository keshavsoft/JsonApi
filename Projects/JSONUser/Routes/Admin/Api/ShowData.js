var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/ShowData");

router.get('/', function (req, res, next) {
    console.log("users ");

    //    res.end(JSON.stringify({}));
    Repo.ShowData().then(PromiseData => {
        res.json(PromiseData);
    });
});

module.exports = router;