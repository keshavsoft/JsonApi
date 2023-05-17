exports.TokenToCookieFirmDetailsAlso = (req, res, next) => {
    console.log("req.body", req.body);
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inUserName: "",
                inPassword: ""
            },
        });
        return;
    };
    if (("inUserName" in req.body)===false) {
        res.json({KTF:false,KReason:"inUserName not found in body"})
        return;
    };
    if (("inPassword" in req.body)===false) {
        res.json({KTF:false,KReason:"inPassword not found in body"})
        return;
    };
    next();
};