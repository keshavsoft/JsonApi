let express = require("express");
let router = express.Router();

let Repo = require("../../../../Repository/Validate/Users/InUserGroupsJson/ForCredentials")
let CommonjwtFunc = require("../../../../../../common/Jwt/ForUserGroupsJson");

router.post('/LoginCheckReturnTokenOnly', (req, res,) => {
    console.log("sssssss : ", req.body);

    if ("inUserName" in req.body) {
        if ("inPassWord" in req.body) {
            if ("inFirmName" in req.body) {
                let LocalUserName = req.body.inUserName;
                let LocalPassWord = req.body.inPassWord;
                let LocalFirmName = req.body.inFirmName;

                Repo.ForUserPasswordFirm({
                    inUserName: LocalUserName,
                    inPassWord: LocalPassWord,
                    inFirmName: LocalFirmName
                }).then(PromiseData => {
                    if (PromiseData.kPK > 0) {
                        CommonjwtFunc.CreateToken({
                            inDataPk: PromiseData.kPK
                        }).then((PromiseDataFromJwt) => {
                            res.end(PromiseDataFromJwt);
                        });
                    };
                });

            } else {
                res.json({ KTF: false, KReason: "Need to send inUserName!" });
            };
        } else {
            res.json({ KTF: false, KReason: "Need to send inUserName!" });
        };
    } else {
        res.json({ KTF: false, KReason: "Need to send inPassWord!" });
    };
});

module.exports = router;