exports.WithConfig = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inFolderName: "",
                inFileName: "",
                inItemName: "",
                inScreenName: ""
            },
            originalUrl: req.originalUrl
        });
    };
    if (("KeshavSoft" in req) === false) res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    if (("DataPk" in req.KeshavSoft) === false) res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" });
    if (("inFolderName" in req.body) === false) res.json({ KTF: false, KReason: "inFolderName not found in body" });
    if (("inFileName" in req.body) === false) res.json({ KTF: false, KReason: "inFileName not found in body" });
    if (("inItemName" in req.body) === false) res.json({ KTF: false, KReason: "inItemName not found in body" });
    if (("inScreenName" in req.body) === false) res.json({ KTF: false, KReason: "inScreenName not found in body" });

    next();
};