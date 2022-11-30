let express = require("express");
let router = express.Router();

let Repo = require("../../../../Repository/Validate/Users/InUserGroupsJson/CheckForUserNamePasswordFirm");
let CommonMiddleware = require("../../../../Middleware/Validate/Users/InUserGroupsJson/CheckForUserNamePasswordFirm")

router.post('/', CommonMiddleware.CheckForUserNamePasswordFirm, (req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;
    let LocalFirmName = req.body.inFirmName;
    console.log("ssssssssssssssss");
    Repo.ForUserPasswordFirm({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
        inFirmName: LocalFirmName
    }).then(PromiseData => {
        res.json(PromiseData);
    });
});

module.exports = router;