exports.PostFunc = (req, res, next) => {
    if (("DataPk" in req.KeshavSoft) === false) {
        res.json({ KTF: false, KReason: "DataPk not found in Request" })
        return;
    };

    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inJsonConfig: {},
                inItemConfig: {},
                inPostData: {},
                inJsonPK: 0
            },
        });
        return;
    };
    if (("inJsonConfig" in req.body) === false) {
        res.json({ KTF: false, KReason: "inJsonConfig not found in body" })
        return;
    };

    if (("inItemConfig" in req.body) === false) {
        res.json({ KTF: false, KReason: "inItemConfig not found in body" })
        return;
    };

    if (("inPostData" in req.body) === false) {
        res.json({ KTF: false, KReason: "inPostData not found in body" })
        return;
    };
    if (("inJsonPK" in req.body) === false) {
        res.json({ KTF: false, KReason: "inJsonPK not found in body" })
        return;
    };
    next();
};
