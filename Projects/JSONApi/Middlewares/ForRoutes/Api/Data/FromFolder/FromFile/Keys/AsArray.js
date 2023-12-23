exports.PostFunc = (req, res, next) => {
    if (("KeshavSoft" in req) === false) res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    if (("DataPk" in req.KeshavSoft) === false) res.json({ KTF: false, KReason: "DataPk not found in Request" });

    if (Object.keys(req.body).length === 0) res.json({
        KTF: false,
        KReason: "post requst body should contain : ",
        body: {
            inFolderName: ""
        },
    });

    if (("inFolderName" in req.body) === false) res.json({ KTF: false, KReason: "inFolderName not found in body" });
    if (("inFileNameOnly" in req.body) === false) res.json({ KTF: false, KReason: "inFileNameOnly not found in body" });
    next();
};