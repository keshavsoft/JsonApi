let jwt = require("jsonwebtoken");
let CommonFromDataSupply = require("../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/Check");

let LocalVerifyToken = ({ inKToken }) => {
    try {
        let LocalToken = process.env.KS_TOKEN_FORLOGIN;

        let LocalauthData = jwt.verify(inKToken, LocalToken);

        if (("DataPk" in LocalauthData) === false) {
            return false;
        } else {
            // let LocalFromForExistence = CommonCheckDataPK.ForExistence({ inDataPK: authData.DataPk });
            let LocalFromForExistence = CommonFromDataSupply.ForExistence({ inDataPK: LocalauthData.DataPk });

            if ("KTF" in LocalFromForExistence) {
                if (LocalFromForExistence.KTF === false) {
                    return false;
                } else {
                    // req.KeshavSoft.kUserName = authData.UserName;
                    return LocalauthData;
                };
            } else {
                return false;
            };
        };
    } catch (error) {
        return false;
    };
};

let LocalVerifyToken2 = ({ inKToken, inws }) => {
    try {
        let LocalToken = process.env.KS_TOKEN_FORLOGIN;

        let LocalauthData = jwt.verify(inKToken, LocalToken);

        if (("DataPk" in LocalauthData) === false) {
            inws.close();
        } else {
            // let LocalFromForExistence = CommonCheckDataPK.ForExistence({ inDataPK: authData.DataPk });
            let LocalFromForExistence = CommonFromDataSupply.ForExistence({ inDataPK: LocalauthData.DataPk });

            if ("KTF" in LocalFromForExistence) {
                if (LocalFromForExistence.KTF === false) {
                    inws.close();
                } else {
                    // req.KeshavSoft.kUserName = authData.UserName;
                    return LocalauthData;
                };
            } else {
                inws.close();
            };
        };
    } catch (error) {
        inws.close();
    };
};

let LocalVerifyToken1 = ({ inKToken, inws }) => {
    try {
        let LocalToken = process.env.KS_TOKEN_FORLOGIN;

        jwt.verify(inKToken, LocalToken, (err, authData) => {
            if (err) {
                inws.close();
            } else {
                if (("DataPk" in authData) === false) {
                    inws.close();
                } else {
                    // let LocalFromForExistence = CommonCheckDataPK.ForExistence({ inDataPK: authData.DataPk });
                    let LocalFromForExistence = CommonFromDataSupply.ForExistence({ inDataPK: authData.DataPk });

                    if ("KTF" in LocalFromForExistence) {
                        if (LocalFromForExistence.KTF === false) {
                            inws.close();
                        } else {

                            // req.KeshavSoft.kUserName = authData.UserName;
                            return parseInt(authData.DataPk);
                        };
                    } else {
                        inws.close();
                    };
                };
            };
        });

    } catch (error) {
        inws.close();
    };
};

module.exports = LocalVerifyToken;