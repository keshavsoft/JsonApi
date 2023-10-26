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
                inFolderName: "",
                inFileNameOnly: "",
                inItemName: "",
                inScreenName: ""
            },
        });
        return;
    };

    if (("inFolderName" in req.body) === false) res.json({ KTF: false, KReason: "inFolderName not found in body" });

    if (("inFileNameOnly" in req.body) === false) res.json({ KTF: false, KReason: "inFileNameOnly not found in body" });

    if (("inItemName" in req.body) === false) res.json({ KTF: false, KReason: "inItemName not found in body" });

    if (("inScreenName" in req.body) === false) res.json({ KTF: false, KReason: "inScreenName not found in body" });

    next();
};
