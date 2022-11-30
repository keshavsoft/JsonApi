var express = require('express');
var router = express.Router();
let Repo = require("../../../Repository/Users/Api/Create");
let controller = require("../../../controllers/Admin/Api/create.controller");

router.post("/", controller.postFunc);
router.post("/WithOutPassword", controller.postWithOutPasswordFunc);
// router.post('/', function (req, res, next) {
//     let LocalUserName = req.body.UserName;
//     let LocalPassWord = req.body.PassWord;
//     let LocalEmail = req.body.inEmail;
//     console.log("create -------------");
//     Repo.Insert({
//         inUserName: LocalUserName,
//         inPassword: LocalPassWord,
//         inEmail: LocalEmail
//     }).then(PromieData => {
//         res.end(JSON.stringify(PromieData));
//     }).catch((PromiseError) => {
//         res.end(JSON.stringify(PromiseError));
//     });
// });

router.get('/:UserName/:Password', function (req, res, next) {
    let LocalUserName = req.params.UserName;
    let LocalPassword = req.params.Password;
    let LocalEmail = req.query.inEmail;
    let LocalDataPk = 116;
    // console.log("LocalUserName : ", LocalUserName);
    if (LocalDataPk > 0) {
        Repo.Create({
            inUserPK: LocalDataPk,
            inUserName: LocalUserName,
            inPassword: LocalPassword, inEmail: LocalEmail
        }).then(PromiseData => {
            res.end(JSON.stringify(PromiseData));
        }).catch((PromiseError) => {
            res.end(JSON.stringify(PromiseError));
        });
    };
});

router.get('/Admin/:UserName/:Password', function (req, res, next) {
    let LocalUserName = req.params.UserName;
    let LocalPassword = req.params.Password;
    let LocalEmail = req.query.inEmail;

    Repo.Admin({
        inUserName: LocalUserName,
        inPassword: LocalPassword, inEmail: LocalEmail
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch((PromiseError) => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;