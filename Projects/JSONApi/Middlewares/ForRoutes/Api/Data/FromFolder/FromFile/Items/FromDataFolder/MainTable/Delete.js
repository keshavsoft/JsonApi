exports.PostFunc = (req, res, next) => {

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

    if (("KeshavSoft" in req) === false) res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    if (("DataPk" in req.KeshavSoft) === false) res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" });
    if (("inJsonConfig" in req.body) === false) res.json({ KTF: false, KReason: "inJsonConfig not found in body" });
    if (("inItemConfig" in req.body) === false) res.json({ KTF: false, KReason: "inItemConfig not found in body" });
    if (("inPostData" in req.body) === false) res.json({ KTF: false, KReason: "inPostData not found in body" });
    if (("inJsonPK" in req.body) === false) res.json({ KTF: false, KReason: "inJsonPK not found in body" });
    next();
    
};
