let Repo = require("../../../../Repository/Validate/Users/InUserDataJson/ForCleaning")
let CommonjwtFunc = require("../../../../../../common/Jwt/ForLogin/UserCredentials");

let TokenToCookie = (req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;

    Repo.TokenToCookie({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
    }).then(PromiseData => {
        if (PromiseData.KTF === false) {
            res.json(PromiseData);
        } else {
            if (PromiseData.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inUserName: LocalUserName,
                    inDataPk: PromiseData.kPK
                }).then((PromiseDataFromJwt) => {
                    res.cookie('KToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

                    PromiseData.KTF = true;

                    res.json(PromiseData);
                });
            };
        };
    });

};

module.exports = { TokenToCookie };