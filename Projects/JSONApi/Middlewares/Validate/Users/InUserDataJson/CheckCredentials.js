exports.PostFunc = (req, res, next) => {

    if (Object.keys(req.body).length === 0) res.json({
        KTF: false,
        KReason: "post requst body should contain : ",
        body: {
            inUserName: "",
            inPassWord: ""
        },
    });
    if (("inUserName" in req.body) === false) res.json({ KTF: false, KReason: "inUserName not found in body" });
    if (("inPassWord" in req.body) === false) res.json({ KTF: false, KReason: "inPassWord not found in body" });
    next();
};