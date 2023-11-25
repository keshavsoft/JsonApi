let Repo = require("../../../../Repository/Validate/Users/InUserDataJson/CheckCredentials")
let CommonjwtUserCredentials = require("../../../../../../common/Jwt/ForLogin/UserCredentials");

let PostFunc = ((req, res,) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;

    let Response = Repo.PostFunc({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
    });

    if (Response.KTF === false) {
        res.json(Response);
    } else {
        if (Response.kPK > 0) {
            CommonjwtUserCredentials.CreateToken({
                inUserName: LocalUserName,
                inDataPk: Response.kPK
            }).then((ResponseFromJwt) => {
                res.cookie('KToken', ResponseFromJwt, { maxAge: 900000, httpOnly: false });

                Response.KTF = true;

                res.json(Response);
            });
        };
    }
});

module.exports = {
    PostFunc
};