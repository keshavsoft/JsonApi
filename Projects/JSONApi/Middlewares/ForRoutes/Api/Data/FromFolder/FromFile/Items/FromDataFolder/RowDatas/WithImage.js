exports.PostFunc = (req, res, next) => {

    if (("KeshavSoft" in req) === false) res.json({ KTF: false, KReason: "KeshavSoft not found in req" });

    if (("DataPk" in req.KeshavSoft) === false) res.json({ KTF: false, KReason: "DataPk not found in Request" });

    if (Object.keys(req.body).length === 0) res.json({ KTF: false, KReason: "post requst body should contain : ", body: { inFolderName: "", inFileNameOnly: "", inItemName: "", inRowPk: "" }, });

    if (("inFolderName" in req.body) === false) res.json({ KTF: false, KReason: "inFolderName not found in body" });

    if (("inFileNameOnly" in req.body) === false) res.json({ KTF: false, KReason: "inFileNameOnly not found in body" });

    if (("inItemName" in req.body) === false) res.json({ KTF: false, KReason: "inItemName not found in body" });

    if (("inRowPk" in req.body) === false) res.json({ KTF: false, KReason: "inRowPk not found in body" });

    next();
};
