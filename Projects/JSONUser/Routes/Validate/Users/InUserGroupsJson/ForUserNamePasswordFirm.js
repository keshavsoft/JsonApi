let express = require("express");
let router = express.Router();

let Repo = require("../../../../Repository/Validate/Users/InUserGroupsJson/ForUserNamePasswordFirm");
//let commonMiddleware = require("../../../../Middleware/Validate/Users/InUserGroupsJson/ForUserNameAndPasswordFirm")
let CommonjwtFunc = require("../../../../../../common/Jwt/ForUserGroupsJson");
let CommonMiddleware = require("../../../../Middleware/Validate/Users/InUserGroupsJson/ForUserNameAndPasswordFirm");

router.post('/LoginCheckReturnTokenOnly', CommonMiddleware.ForUserNameAndPassword, (req, res,) => {
    console.log("ForUserNameAndPassword :", req.body);

    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;
    let LocalFirmName = req.body.inFirmName;

    Repo.ForUserPasswordFirm({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
        inFirmName: LocalFirmName
    }).then(PromiseData => {
        console.log("111111 :", PromiseData);
        if (PromiseData.KTF === false) {
            res.json(PromiseData.KReason);
        } else {
            if (PromiseData.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inDataPk: PromiseData.kPK
                }).then((PromiseDataFromJwt) => {
                    console.log("2222222222222 :", PromiseDataFromJwt);

                    res.end(PromiseDataFromJwt.KToken);
                });
            };
        };
    });
});

module.exports = router;