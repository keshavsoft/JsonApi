exports.ForUserNameAndPassword = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inUserName: "",
                inPassWord: "",
                inFirmName: ""
            }
        });
    } else {
        if (("inUserName" in req.body) === false) {
            res.json({ KTF: false, KReason: "inUserName not found in body" })

        } else {
            if (("inPassWord" in req.body) === false) {
                res.json({ KTF: false, KReason: "inPassWord not found in body" })

            } else {
                if (("inFirmName" in req.body) === false) {
                    res.json({ KTF: false, KReason: "inFirmName not found in body" })

                } else {
                    next();
                };
            };
        };
    };
}; 
